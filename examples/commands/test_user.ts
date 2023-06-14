import { User } from "discord.js";
import Command from "../../src/types/Command";

export default {
    name: 'test',
    arguments: [{
        name: 'user',
        type: 'user'
    }],
    async run(context, user: User) {
        context.message.reply(user.tag);
    }
} as Command;