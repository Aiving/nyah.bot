module.exports.run = async (bot, message, args) => {
    let config = require('../config.json'); // Подключаем файл с параметрами и информацией
    if(message.author.id !== config.ownerID) return;
    let channel = await bot.channels.fetch(args[0]);
    let user = await bot.users.fetch(args[1]);
    channel.send(`\`\`\`js\n
${user.username} has joined the server!
User tag: #${user.discriminator}
User ID: ${user.id}
User is bot?: ${user.bot}
User created account: ${user.createdAt}\`\`\``);
}

module.exports.help = {
    name: "emithello"
}