import { Awaitable, Channel, User } from "discord.js";
import CommandContext from "./CommandContext";

export interface CommandGroup {
    name: string;
    commands: (Command | CommandGroup)[];
}

export type Condition = (context: CommandContext, ...args: (string | number | User | Channel | null)[]) => Awaitable<boolean>;

export default interface Command {
    name: string;
    aliases?: string[];
    conditions?: Condition[];
    arguments?: (TextArgument | NumberArgument | UserArgument | ChannelArgument)[];
    run(context: CommandContext, ...args: (string | number | User | Channel | null)[]): Awaitable<void>;
}

export interface Argument {
    name: string;
    required?: boolean;
}

export interface TextArgument extends Argument {
    type: 'text';
    remaining?: boolean;
}

export interface NumberArgument extends Argument {
    type: 'number';
    min: number;
    max: number;
}

export interface UserArgument extends Argument {
    type: 'user';
}

export interface ChannelArgument extends Argument {
    type: 'channel';
}