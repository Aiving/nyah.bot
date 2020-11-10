module.exports.run = async (bot, message, args) => {
    const { MessageEmbed } = require('discord.js')
    {
      let embed = new MessageEmbed()
        .setColor(`#000000`)
        .setTitle(`List of commands`)
        .addFields(
        { name: `^adm_help`, value: `\`\`\`js\nIs the List of commands available to admins\n\`\`\``, inline: true },
        { name: '^fun_help', value: `\`\`\`js\nList of commands\n\`\`\``, inline: true},
        { name: '^help', value: `\`\`\`js\nList of commands\n\`\`\``, inline: true},
        { name: '^info_help', value: `\`\`\`js\nList of commands\n\`\`\``, inline: true},
        )
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username}`, `${message.author.avatarURL()}`);
        message.channel.send(embed);
    }
      }

module.exports.help = {
    name: "help"
  }
