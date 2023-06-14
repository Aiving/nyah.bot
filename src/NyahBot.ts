import { Channel, Client, User, type ClientEvents } from "discord.js";
import { readdir } from "fs/promises";
import { join } from "path/posix";
import EventDefinition from "./types/EventDefinition";
import Command, { ChannelArgument, CommandGroup, Condition, NumberArgument, TextArgument, UserArgument } from "./types/Command";
import isCommandGroup from "./util/isCommandGroup";
import { statSync } from "fs";
import CommandContext from "./types/CommandContext";
import avoid from "./util/avoid";

export default class NyahBot extends Client {
    public prefix: string = '!';
    public configuration?: { owners: string[] };
    private readonly commands: (CommandGroup | Command)[] = [];

    async loadEvents(directory: string, extension: string = 'js') {
        const files = await readdir(directory);
        const events = files.filter(file => file.endsWith(extension) && statSync(join(directory, file)).isFile());

        for (const eventFile of events) {
            const event: EventDefinition<keyof ClientEvents> = (await import(join(directory, eventFile))).default;

            this.on(event.name, event.handle);
        }
    }

    findCommand(strings: string[], source = this.commands): [Command | null, string[]] {
        let possiblyCommand: Command | null = null;
        let commandIndex = 0;
        let currentSource = source;

        for (const index in strings) {
            const result = currentSource.find(command => command.name == strings[index]);

            if (result && isCommandGroup(result)) {
                currentSource = result.commands;
            } else if (result) {
                commandIndex = parseInt(index);
                possiblyCommand = result;
                break;
            }
        }

        return [possiblyCommand, strings.slice(commandIndex + 1)];
    }

    processConditions(conditions: Condition[], context: CommandContext, commandArguments?: (string | number | User | Channel | null)[]): boolean {
        if (commandArguments) return conditions.some(condition => condition(context, ...commandArguments));
        else return conditions.some(condition => condition(context));
    }

    async processArgument(argument: TextArgument | NumberArgument | UserArgument | ChannelArgument, index: number, rawArguments: string[]) {
        switch (argument.type) {
            case 'number':
                const number = parseInt(rawArguments[index]);

                return number;
            case 'text':
                if (argument.remaining == true) return rawArguments.slice(index).join(' ');

                return rawArguments[index];
            case 'channel':
                const { groups: channelGroups } = rawArguments[index].match(/(?<id>\d{15,23})/)!;

                return await this.channels.fetch(channelGroups!.id);
            case 'user':
                const { groups: userGroups } = rawArguments[index].match(/(?<id>\d{15,23})/)!;

                return await this.users.fetch(userGroups!.id);
            default:
                return rawArguments[index];
        }
    }

    async registerCommandHandler() {
        this.on('messageCreate', async (message) => {
            if (!message.content.startsWith(this.prefix)) return;

            const cleanContent = message.content.slice(this.prefix.length);
            const [command, rawArguments] = this.findCommand(cleanContent.split(' '));

            if (command !== null) {
                const context = { arguments: rawArguments, client: this, message };
                const commandArguments = command.arguments?.map((argument, index) => this.processArgument(argument, index, rawArguments));

                if (command.conditions && !this.processConditions(command.conditions, context, commandArguments ? (await Promise.all(commandArguments)) : undefined)) return message.reply('You failed one of the conditions.').then(avoid);

                if (commandArguments) return command.run({ arguments: rawArguments, client: this, message }, ...(await Promise.all(commandArguments)));
                else return command.run({ arguments: rawArguments, client: this, message });
            }
        });
    }

    async loadCommands(directory: string, source = this.commands, extension: string = '.js') {
        const files = await readdir(directory);
        const groups = files.filter(file => statSync(join(directory, file)).isDirectory());
        const commands = files.filter(file => file.endsWith(extension) && statSync(join(directory, file)).isFile());

        for (const commandFile of commands) {
            const command: Command = (await import(join(directory, commandFile))).default;

            source.push(command);
        }

        for (const groupDirectory of groups) {
            const group = {
                name: groupDirectory,
                commands: []
            } as CommandGroup;

            await this.loadCommands(join(directory, groupDirectory), group.commands);

            source.push(group);
        }
    }
}