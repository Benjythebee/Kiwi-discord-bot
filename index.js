require('dotenv').config();
const express = require('express')
var app = express()
const path = require('path')
app.use(express.static(path.join(__dirname)))
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

var exclude = `second UNI`

var exclude2 = `1inch christmas`

bot.on('message', msg => {
  if (msg.content.toLowerCase().includes(exclude.toLowerCase())) {
    msg.delete(2000)
    msg.reply('**Fuck off mate.**').then(m=>{m.delete(3000)});
    msg.channel.send(':warning: The message above is a scam. watch out!').then(m=>{m.delete(3000)});

  }else if(msg.content.toLowerCase().includes(exclude2.toLowerCase())){
    msg.delete(2000)
    msg.reply('**Fuck off mate.**').then(m=>{m.delete(3000)});
    msg.channel.send(':warning: The message above is a scam. watch out!').then(m=>{m.delete(3000)});

  }
});


app.get('/',(req,res)=>{
 
  res.send(':)')
})

app.listen(process.env.PORT || 5000, ()=>{
console.log('App is listening')
})