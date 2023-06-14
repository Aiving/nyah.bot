import { join } from "path/posix";
import NyahBot from "./NyahBot";
import { token, owners } from './data/configuration.json';

async function main(): Promise<void> {
    const client = new NyahBot({ intents: 131071 });

    client.prefix = 'YOUR_PREFIX_HERE';
    client.configuration = { owners };

    client.loadCommands(join(__dirname, 'commands'));
    client.loadEvents(join(__dirname, 'events'));
    client.registerCommandHandler();

    await client.login(token);
}

void main();