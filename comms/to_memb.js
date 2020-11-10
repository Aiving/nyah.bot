module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR'));
    let user = await bot.users.fetch(args[0]);
    user.send(args.slice(1).join(' '));
    message.delete()
}

module.exports.help = {
    name: "to_memb"
}