module.exports.run = async (bot, message, args) => {
  const { MessageEmbed } = require('discord.js')
    {
      let embed = new MessageEmbed()
        .setColor('#ffffff')
	      .setTitle(message.author.username)
	      .setURL(`https://discord.com/users/${message.author.id}`)
		    .setThumbnail(`${message.author.avatarURL()}?size=4096`)
		    .addFields(
          { name: 'Your tag:', value: `\`\`\`js\n${message.author.discriminator}\n\`\`\``, inline: true},
          { name: 'Your ID:', value: `\`\`\`js\n${message.author.id}\n\`\`\``, inline: true},
          { name: `You bot?:`, value: `\`\`\`js\n${message.author.bot}\n\`\`\``},
          { name: `You created account:`, value: `\`\`\`js\n${message.author.createdAt}\n\`\`\``, inline: true },
          )
          .setTimestamp()
          .setFooter(`Requested by ${message.author.username}`, `${message.author.avatarURL()}`);
          message.channel.send(embed);
    }
      }

module.exports.help = {
    name: "my_info"
  }
