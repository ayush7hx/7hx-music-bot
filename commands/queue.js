const queue = require('../musicQueue');

module.exports = {
    name: 'queue',
    description: 'View the current music queue.',
    execute(message) {
        if (queue.length === 0) {
            return message.channel.send('The queue is currently empty.');
        }
        const queueMessage = queue.map((song, index) => `**${index + 1}**: ${song.title}`).join('\n');
        message.channel.send(`Current queue:\n${queueMessage}`);
    },
};