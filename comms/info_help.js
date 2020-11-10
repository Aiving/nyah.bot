module.exports.run = async (bot, message, args) => {
    const { MessageEmbed } = require('discord.js')
    {
      let embed = new MessageEmbed()
        .setColor(`#8f8f8f`)
        .setTitle(`List of information commands`)
        .addFields(
        { name: `^bot_info`, value: `\`\`\`js\nInformation about the bot\n\`\`\``, inline: true},
        { name: '^guild_info', value: `\`\`\`js\nInformation about server\n\`\`\``, inline: true},
        { name: `^inv_gen`, value: `\`\`\`js\nGenerate invite to guild\n\`\`\``, inline: true},
        { name: `^my_info`, value: `\`\`\`js\nInformation about you\n\`\`\``},
        { name: `^ping`, value: `\`\`\`js\nBot client ping\n\`\`\``, inline: true},
        { name: `^time`, value: `\`\`\`js\nSend a time (GMT+0002)\n\`\`\``, inline: true},
        { name: `^user_avatar`, value: `\`\`\`js\nSends the user's avatar\n\`\`\``, inline: true},
        )
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username}`, `${message.author.avatarURL()}`);
        message.channel.send(embed);
    }
      }

module.exports.help = {
    name: "help"
  }
