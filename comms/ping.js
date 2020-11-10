module.exports.run = async (bot, message, args) => {
    const { MessageEmbed } = require('discord.js')
    {
      let embed = new MessageEmbed()
        .setColor(0x139c13)
        .setAuthor('Bot client ping')
        .setDescription(`
        Ping is ${bot.ws.ping}ms.
        `)
      message.channel.send(embed);
    }
      }

module.exports.help = {
    name: "ping"
  }