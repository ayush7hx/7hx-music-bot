const { Message } = require('discord.js');

/**
 * Command to pause the current song in the music bot.
 * @param {Message} message - The message that triggered the command.
 */
module.exports = {
    name: 'pause',
    description: 'Pause the currently playing song',
    execute(message) {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue) {
            return message.channel.send('There is no song playing that I could pause!');
        }
        serverQueue.connection.dispatcher.pause();
        message.channel.send('Paused the current song!');
    },
};