module.exports.run = async (bot, message, args) => {
    const { MessageEmbed, Emoji } = require('discord.js')
    {
      let embed = new MessageEmbed()
        .setColor('#1a6355')
        .setTitle(message.guild.name)
        .addFields(
        { name: "Guild Owner", value: `${message.guild.owner}`},
        { name: "All Channel's", value: `\`\`\`js\n${message.guild.channels.cache.size}\n\`\`\``, inline: true},
        { name: "All Categorie's", value: `\`\`\`js\n${message.guild.channels.cache.filter(channel => channel.type == 'category').size}\n\`\`\``, inline: true},
        { name: "All User's", value: `\`\`\`js\n${message.guild.members.cache.size}\n\`\`\``},
        { name: "Guild ID", value: `\`\`\`js\n${message.guild.id}\n\`\`\``, inline: true},
        { name: "Guild Region", value: `\`\`\`js\n${message.guild.region}\n\`\`\``, inline: true},
        { name: "Guild Verified?", value: `\`\`\`js\n${message.guild.verified}\n\`\`\``},
        { name: "Guild Created", value: `\`\`\`js\n${message.guild.createdAt}\n\`\`\``, inline: true},
        { name: "Guild System Channel", value: `\`\`\`js\n${message.guild.systemChannel.name}\n\`\`\``, inline: true},
        { name: "Role's", value: `\`\`\`js\n${message.guild.roles.cache.size}\n\`\`\``},
        { name: "Guild Emoji's", value: `\`\`\`js\n${message.guild.emojis.cache.size}\n\`\`\``, inline: true},
        { name: "Guild Animated Emoji's", value: `\`\`\`js\n${message.guild.emojis.cache.filter(emojis => emojis.animated).size}\n\`\`\``, inline: true},
        { name: "Moderation Level", value: `\`\`\`js\n${message.guild.verificationLevel}\n\`\`\``}
        )
        .setThumbnail(`${message.guild.iconURL()}?size=4096`)
        .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`, `${message.author.avatarURL()}`);
      message.channel.send(embed);
    }
      }

module.exports.help = {
    name: "guildinfo"
  }
