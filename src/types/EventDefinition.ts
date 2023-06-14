import type { Awaitable, ClientEvents } from "discord.js";

export default interface EventDefinition<T extends keyof ClientEvents> {
    name: T;
    handle(...args: ClientEvents[T]): Awaitable<void>;
}
