module.exports.run = async (bot, message, args) => {
    const { MessageEmbed } = require('discord.js')
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('no.');
    {
      let embed = new MessageEmbed()
        .setColor('#000000')
        .setTitle(`List of Admin command's`)
        .addFields(
          { name: '^clear', value: `\`\`\`js\nClear message's\n\`\`\``, inline: true},
          { name: '^to_memb', value: `\`\`\`js\nSending a message to a specific user\n\`\`\``, inline: true},
          { name: `^chnl_send`, value: `\`\`\`js\nSending a message to a specific channel on behalf of the bot\n\`\`\``},
          { name: `^emb_send`, value: `\`\`\`js\nSending an embed to a specific channel\n\`\`\``},
          { name: `^emb_memb`, value: `\`\`\`js\nSend embed to a specific user\n\`\`\``, inline: true },
          { name: `^warn`, value: `\`\`\`js\nWarn a user\n\`\`\``, inline: true },
        )
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username}`, `${message.author.avatarURL()}`);
        message.author.send(embed);
    }
      }

module.exports.help = {
    name: "adm_help"
  }