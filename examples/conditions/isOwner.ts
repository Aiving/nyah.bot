import { Condition } from "../../src/types/Command";

const isOwner: Condition = (context) => {
    const { configuration } = context.client;

    if (configuration) return configuration.owners.includes(context.message.author.id);
    else return false;
};

export default isOwner;