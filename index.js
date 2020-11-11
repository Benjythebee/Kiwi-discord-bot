require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
console.log(TOKEN)
bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

var exclude = `second UNI`

bot.on('message', msg => {
  if (msg.content.toLowerCase().includes(exclude.toLowerCase())) {
    msg.delete(2000)
    msg.reply('**Fuck off mate.**').then(m=>{m.delete(3000)});
    msg.channel.send(':warning: The message above is a scam. watch out!').then(m=>{m.delete(3000)});

  }
});
