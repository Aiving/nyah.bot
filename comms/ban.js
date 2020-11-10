module.exports.run = async (bot, message, args) => {
    const { MessageEmbed } = require('discord.js')

if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You don't have permission's to use this command!");

let bUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])

if(bUser.id === message.author.id) return message.channel.send("You can't ban myself!!"); 

if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("I don't have permission's")
    
args = message.content.split(' '); // Занесли в массив всё содержание сообщения

args.splice(0, 2); // Начиная с позиции 0, удалили 2 элемента из массива

args = args.join(' '); // Объединили все элементы в массиве
    
if (!bUser) return message.reply("You don't indicate user!") 

if (!args) return message.reply("You don't indicate reason!")

bUser.ban()
var ban_embed = new MessageEmbed()
     .setColor('#db0f0f')
     .addFields(
         { name: `\`User\``, value: `<@${message.author.id}>`, inline: true},
         { name: `\`Ban\``, value: bUser },
         { name: `\`Reason\``, value: `\`\`\`js\n${args}\n\`\`\``, }
     );

message.channel.send(ban_embed)
     }

module.exports.help = {
    name: "ban"
}