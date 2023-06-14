import EventDefinition from '../../src/types/EventDefinition';

export default {
    name: 'messageCreate',
    async handle(message) {
        console.log(message.content);
    }
} as EventDefinition<'messageCreate'>;