import type { Message } from "discord.js";
import type NyahBot from "../NyahBot";

export default interface CommandContext {
    client: NyahBot;
    message: Message;
    arguments: string[];
}
