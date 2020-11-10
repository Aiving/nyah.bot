module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR'));
    let channel = await bot.channels.fetch(args[0]);
    channel.send(args.slice(1).join(' '));
}

module.exports.help = {
    name: "chnl_send"
}