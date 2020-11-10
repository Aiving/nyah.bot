const Discord = require('discord.js')
const fs = require('promise-fs')

module.exports.run = async (bot, message, args) => {

    
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.reply('fuck you!');
    if(!args[0] || args[0 == 'help']) return message.reply(`^setpref <your very original new prefix here>`);

    let prefixes = JSON.parse(fs.readFileSync('./prefixes.json', 'utf8'));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFile('./prefixes.json', JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });

    let prefixEmbed = new Discord.MessageEmbed()
    .setColor('#FF9900')
    .setTitle('New prefix')
    .setDescription(`New prefix: ${args[0]}`)

    message.channel.send(prefixEmbed)
}