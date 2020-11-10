const { User } = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let user = await bot.users.fetch(args[0]);
        message.channel.send(`${user.displayAvatarURL()}?size=${args[1]}`);
}

module.exports.help = {
    name: "user_avatar"
}