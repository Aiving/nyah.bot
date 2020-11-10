const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const bot = new Discord.Client(); // Объявляем, что robot - бот
const fs = require('promise-fs'); // Подключаем родной модуль файловой системы node.js  
const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
} 
let config = require('./config.json'); // Подключаем файл с параметрами и информацией
let token = config.token; // «Вытаскиваем» из него токен

bot.commands = new Discord.Collection();
async function loadCommands() {
  let dir = await fs.readdir('comms', { encoding: 'utf8'});
  let files = dir.filter(file => file.endsWith('.js'));

  files.forEach(file => {
    let cmd = require(`./comms/${file}`);
    bot.commands.set(file.split('.')[0], cmd);
  });

  return files.length;
}

loadCommands().then(loaded => {
  console.log(`loaded commands: ${loaded}`);
});

bot.on('guildMemberAdd', member => {
  console.log('User ' + member.user.tag + ' has joined the server!');
  
  var channel = member.guild.systemChannel;
  if (!channel) return;
  channel.send(`\`\`\`js\n
${member.user.username} has joined the server!
User tag: #${member.user.discriminator}
User ID: ${member.user.id}
User is bot?: ${member.user.bot}
User created account: ${member.user.createdAt}\`\`\``);

  var role = member.guild.roles.cache.find(role => role.name === "Приезжий");
  if (!role) return;
  member.roles.add(role);
});

bot.on('ready', async (args) => {
  console.log(bot.user.username + " запустился")

  bot.user.setPresence({
    status: "dnd",  // You can show online, idle... Do not disturb is dnd
    activity: {name: '^help', type: "PLAYING"}
  });
});
process.on('unhandledRejection', (error) => console.error(error));

bot.on('message', async (message) => { // Реагирование на сообщения
  function RandomMoney() {
    var rand = ['ахуенно. целый бизнес на водопроводе алексея сделал <:a4e:771809559374200892>', 'да чет не очень, кризис все дела(', 'ОХ ЕБАТЬ ПРИБЫЛЬ ВЧЕРА БЫЛА ПОДНЯЛ 32532532 ШТУК НА ДЕТЯХ НЕГРОВ <a:flex:771815301200347176>', 'я банкрот.', 'каким деньгами. долбаеб?', 'нету денег', 'ты кто ебать.'];
    return rand[Math.floor(Math.random()*rand.length)];
}
  if(message.author.bot) return;
  if(message.content.includes('ну как там с деньгами')){
    message.channel.send(RandomMoney())
  }
  var date = new Date();
  if(message.guild === null) return;
  let prefixes = JSON.parse(fs.readFileSync('./prefixes.json', 'utf8'));

  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };
  }
  let prefix = prefixes[message.guild.id].prefixes  
  if(message.channel.id == config.blacklistchannelID) return;
  if (message.channel.id == config.adminRoom) return;
  if (message.channel.nsfw) return;
  console.log(`G: ${message.guild.name} | C: ${message.channel.name} | U: ${message.author.tag} | M: ${message.cleanContent}`);
  fs.appendFile('logs.txt', '\r\n' + `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} | G: ${message.guild.name} | C: ${message.channel.name} | U: ${message.author.tag} | M: ${message.cleanContent}`, (err) => {
    if(err) throw err;
});
  
  if(message.channel.id == config.blacklistchannelID2) return;
  let arr = message.content.split(' ');
  let args = arr.slice(1);
  let name = arr[0].slice(prefix.length);
  if(!message.content.startsWith(prefix)) return;
  if(!message.guild) return;
  let file = bot.commands.get(name);
  if(file) file.run(bot, message, args);

    if (message.content.startsWith(config.prefix + "eval")) {
  if(message.author.id !== config.ownerID) return message.reply('ахуел? не твоя команда, уебан блять.')
    try {
      const code = args.join(" ");
      let evaled = await eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled, { depth: 0 });

      message.channel.send(evaled, {code:"js"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`js\n${clean(err)}\n\`\`\``);
    }
    }
});

bot.login(token); // Авторизация бота