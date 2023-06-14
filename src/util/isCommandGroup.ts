import Command, { CommandGroup } from "../types/Command";

export default function isCommandGroup(object: CommandGroup | Command): object is CommandGroup {
    return Array.isArray((object as CommandGroup).commands);
}