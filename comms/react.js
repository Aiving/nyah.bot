module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR'));
        message.channel.messages.cache.get(args[0]).react(args[1]);
}

module.exports.help = {
    name: "react"
}