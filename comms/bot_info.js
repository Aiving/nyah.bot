const { constants } = require('promise-fs');

module.exports.run = async (bot, message, args) => {
    const { MessageEmbed } = require('discord.js')
    var fuck = './comms/';
    const fs = require('promise-fs')
    let totalSeconds = (bot.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
    fs.readdir(fuck, (err, files) => {
    {
        let embed = new MessageEmbed()   
        .setColor('#9b7d73')
	      .setTitle(`I'm Nyah bot`)
	      .setURL('https://top.gg/bot/706510023664074783')
            .setDescription(`\`Command's: ${files.length}\``)
		    .setThumbnail('https://cdn.discordapp.com/attachments/767500940835815446/771476715516067851/eFJojWN.png')
		    .addFields(
                { name: 'Bot ID', value: `\`\`\`js\n${bot.user.id}\n\`\`\``, inline: true},
			    { name: 'Bot uptime:', value: `\`\`\`js\n${uptime}\n\`\`\``, inline: true },
			    { name: 'Bot prefix:', value: `\`\`\`js\n^\n\`\`\``},
          )
          .setTimestamp()
          .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL()}`);
          message.channel.send(embed);
    }
})};
module.exports.help = {
    name: "bot_info"
  }
