module.exports.run = async (bot, message, args) => {
    bot.guilds.cache.get(message.guild.id).channels.cache.get(message.guild.systemChannelID).createInvite().then(inv => message.channel.send(inv.url))
}

module.exports.help = {
    name: "inv_gen"
  }