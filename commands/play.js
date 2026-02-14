const play = require('play-dl');

async function playMusic(url) {
    try {
        const stream = await play.stream(url);
        // Your code to play the stream
        console.log(`Now playing: ${url}`);
    } catch (error) {
        console.error('Error playing music:', error);
    }
}

module.exports = { playMusic };