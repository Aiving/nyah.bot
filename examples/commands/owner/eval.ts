import { codeBlock } from "discord.js";
import Command from "../../../src/types/Command";
import isOwner from "../../conditions/isOwner";

export default {
    name: 'eval',
    arguments: [{
        name: 'code',
        type: 'text',
        remaining: true
    }],
    conditions: [
        isOwner
    ],
    async run(context, code: string) {
        try {
            const evaled = await eval(code);
            const inspected = require('util').inspect(evaled, { depth: 0 });

            if (codeBlock('js', inspected).length > 2000) {
                context.message.reply({ files: [{ name: 'result.js', attachment: Buffer.from(inspected) }] })
            } else context.message.reply(codeBlock('js', inspected));
        } catch (err: any) {
            context.message.reply(codeBlock('js', err.stack));
        }
    }
} as Command;