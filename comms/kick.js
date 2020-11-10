module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return mess.reply("You don't have permission's to use this command");
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return mess.reply("I don't have permission's!")
    
    let kUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
    
    if(kUser.id === message.author.id) return message.channel.send("You can't kick myself!"); 
    
    args = message.content.split(' ');
    args.splice(0, 2);
    args = args.join(' ');
    
    if (!kUser) return message.reply("You don't indicate user!")
    if (!args) return message.reply("You don't indicate reason!")
    
    kUser.kick(args)
    const { MessageEmbed } = require('discord.js')
    var kick_embed = new MessageEmbed()
         .setColor('#db0f0f')
         .addFields(
             { name: `\`\`\`User\`\`\``, value: `<@${message.author.id}>`, inline: true},
             { name: `\`\`\`Kick\`\`\``, value: kUser, inline: true},
             { name: `\`\`\`Reason\`\`\``, value: `\`\`\`js\n${args}\n\`\`\``}
         );
    
         message.channel.send(kick_embed)
}

module.exports.help = {
    name: "kick"
}