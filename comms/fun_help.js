module.exports.run = async (bot, message, args) => {
    const { MessageEmbed } = require('discord.js')
    {
      let embed = new MessageEmbed()
        .setColor(`#fafa00`)
        .setTitle(`List of fun commands`)
        .addFields(
        { name: `^chtd`, value: `\`\`\`js\nRussian meme\n\`\`\``, inline: true},
        { name: `^kurays_eblan`, value: `\`\`\`js\nRussian meme\n\`\`\``, inline: true },
        { name: `^mom`, value: `\`\`\`js\nRussian meme\n\`\`\``, inline: true},
        { name: `^om`, value: `\`\`\`js\nRussian meme\n\`\`\``},
        { name: `^onet`, value: `\`\`\`js\nSend a random russian meme\n\`\`\``, inline: true},
        { name: `^random_chan`, value: `\`\`\`js\nSend a random anime-chan art\n\`\`\``, inline: true},
        { name: `^test`, value: `\`\`\`js\nTest!\n\`\`\``, inline: true },
        )
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username}`, `${message.author.avatarURL()}`);
        message.channel.send(embed);
    }
      }

module.exports.help = {
    name: "help"
  }
