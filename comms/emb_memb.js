module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR'));
    let user = await bot.users.fetch(args[0]);
    const { MessageEmbed } = require('discord.js')
    {
      let embed = new MessageEmbed()
        .setColor(args[1])
        .setAuthor(bot.user.username, bot.user.avatarURL())
        .setDescription(args.slice(2).join(` `));
    user.send(embed);
    }
}

module.exports.help = {
    name: "emb_memb"
}