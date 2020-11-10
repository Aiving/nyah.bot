module.exports.run = async (bot, message, args) => {
    message.channel.send(``, { files: ['./chtd.mp4'] });
};

module.exports.help = {
    name: "chtd"
}