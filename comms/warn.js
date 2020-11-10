module.exports.run = async (bot, message, args) => {
const fs = require('fs'); // Подключаем родной модуль файловой системы node.js
var warns = JSON.parse(fs.readFileSync("C:/Users/USER 35/Downloads/bot/data.json", "utf8")); // Объявляем переменную warns, с помощью которой бот сможет прочитать файл data.json

if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("У вас нет прав для использования данной команды"); // Если пользователь попытается предупредить участника сервера без привилегии KICK_MEMBERS, ему будет в этом отказано.
if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("У меня нет прав!") // Если у бота нету привилегии KICK_MEMBERS, он отправит соответствующее сообщение
let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]) // Восприятие упоминания и аргумента
if(wUser.id === message.author.id) return message.channel.send("Вы не можете выдать предупреждение самому себе!"); // Если пользователь попытается предупредить самого себя, ему будет в этом отказано.
if (!wUser) return message.reply("Вы не указали пользователя") // Если пользователь не найден/не указан - в предупреждении пользователю будет отказано
const { MessageEmbed } = require('discord.js')

if (!warns[wUser.id]) warns[wUser.id] = { // Если ID пользователя не найден, количество предупреждений устанавливается на 0
    warns: 0
};

warns[wUser.id].warns++; // Если все проверки прошли успешно, к текущему количеству предупреждений пользователя прибавляется +1

fs.writeFile("./data.json", JSON.stringify(warns), (err) => { // Все данные сохраняются в .json файле
       if (err) console.log(err)
});

if (warns[wUser.id].warns >= 3) { // Если обнаружено 3+ предупреждений, то...

    wUser.kick("3/3 warn's") // Кикнуть участника сервера по причине "3/3 предупреждений"

    if (warns[wUser.id].warns >= 3) warns[wUser.id] = { // Если обнаружено 3+ предупреждений, их количество устанавливается на 0
            warns: 0
    };

    fs.writeFile("./data.json", JSON.stringify(warns), (err) => { // Всё сохраняется в .json файл
          if (err) console.log(err)
    });

    var warn_embed1 = new MessageEmbed() // Embed, отправляющийся при третьем предупреждении
         .setColor('#db0f0f')
         .addFields(
                { name: 'User', value: `<@${message.author.id}>` },
                { name: 'Warn a', value: wUser },
                { name: `Warn's`, value: '3/3 **[KIK]**' }
    );

    message.channel.send(warn_embed1)

    } else { // Иначе...

    var warn_embed2 = new MessageEmbed() // Embed, отправляющийся при 1 и 2 предупреждении
         .setColor('#db0f0f')
         .addFields(
                { name: 'User', value: `<@${message.author.id}>` },
                { name: 'Warn a', value: wUser },
                { name: `Warn's`, value: `${warns[wUser.id].warns}/3` }
    );

    message.channel.send(warn_embed2)

    if (warns[wUser.id].warns >= 3) warns[wUser.id] = { // Если обнаружено 3+ предупреждений, их количество устанавливается на 0
          warns: 0
    };

    fs.writeFile("./data.json", JSON.stringify(warns), (err) => { // Всё сохраняется в .json файле
        if (err) console.log(err)
        });
    }
}

module.exports.help = {
    name: "warn"
}