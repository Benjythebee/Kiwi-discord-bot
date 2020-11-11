require('dotenv').config();
const express = require('express')
var app = express()
app.use(express.static(path.join(__dirname)))
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

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


app.get('/',(req,res)=>{
 
  res.send(':)')
})

app.listen('8000', ()=>{
console.log('App is listening')
})