module.exports.run = async (bot, message, args) => {
    message.channel.send(``, { files: ['./mom.mp4'] });
};

module.exports.help = {
    name: "mom"
}