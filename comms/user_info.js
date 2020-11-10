module.exports.run = async (bot, message, args) => {
    const { MessageEmbed } = require('discord.js')
      let user = await bot.users.fetch(args[0]);
      {
        let embed = new MessageEmbed()
          .setColor('#ffffff')
            .setTitle(user.username)
            .setURL(`https://discord.com/users/${user.id}`)
              .setThumbnail(`${user.displayAvatarURL()}?size=4096`)
              .addFields(
            { name: 'User tag:', value: `\`\`\`js\n${user.discriminator}\n\`\`\``, inline: true},
            { name: 'User ID:', value: `\`\`\`js\n${user.id}\n\`\`\``, inline: true},
            { name: `User bot?:`, value: `\`\`\`js\n${user.bot}\n\`\`\``},
            { name: `User created account:`, value: `\`\`\`js\n${user.createdAt}\n\`\`\``, inline: true },
            )
            .setTimestamp()
            .setFooter(`Requested by ${message.author.username}`, `${message.author.avatarURL()}`);
            message.channel.send(embed);
      }
        }
  
  module.exports.help = {
      name: "user_info"
    }