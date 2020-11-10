const { Message } = require("discord.js");
const { futimes } = require("promise-fs");

module.exports.run = async (bot, message, args) => {
    const arggs = message.content.split(' ').slice(1); // Все аргументы за именем команды с префиксом
    const amout = arggs.join(' '); // Количество сообщений, которые должны быть удалены
    let amount = Number(amout)
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('no.');
    if (!amount) return message.channel.send('where are the numbers, johnny?'); // Проверка, задан ли параметр количества
    if (isNaN(amount)) return message.channel.send('numbers, not letters.'); // Проверка, является ли числом ввод пользователя
    if (amount > 100) return message.channel.send('ha-ha, no.'); // Проверка, является ли ввод пользователя числом больше 100
    if (amount < 1) return message.channel.send('why. <:koder:767477656705826836> '); // Проверка, является ли ввод пользователя числом меньше 1
    await message.channel.messages.fetch({
        limit: amount
    }).then(messages => {
        message.channel.bulkDelete(messages)
    })
}

module.exports.help = {
    name: "clear"
  }