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
var exclude12 = `dont miss the current ethereum 2.0 airdrop`
var exclude3= `1inchs christmas airdrop`

var exclude4 =`1inⅽhs ⅽhristmas`

var exclude5 =`started an Ethereum 2.0 Airdrop`
var exclude10 =`aⅰrdrop`
var exclude11 = `ethereuⅿ`

var exclude6 =`ether with that ethereum 2.0 airdrop`

var exclude8 =`started an Ethereum 2.0 Aⅰrdrop`
var exclude9 =`the ethereum 2.0 airdrop started`
var exclude12 = `the ethereum airdrop started today`
var exclude7 = `ethereum started an airdrop`

var hello=`Hello everyone`
var hello2=`Hey team`

var bruh=`bruh`

const Badlines =[
  `**Fuck off mate.**`,
  `**I'm tired of this shit.**`,
  `**Jesus christ.**`,
  `**Another one! quick destroy it!.**`
]

const friendlyLines =[
  `Hey bud`,
  `Wassssaaaa`,
  `Bruuuh`
]

bot.on('message', msg => {
  if (msg.content.toLowerCase().includes(exclude.toLowerCase())
  || msg.content.toLowerCase().includes(exclude2.toLowerCase())
  || msg.content.toLowerCase().includes(exclude3.toLowerCase())
  || msg.content.toLowerCase().includes(exclude4.toLowerCase())
  || msg.content.toLowerCase().includes(exclude5.toLowerCase())
  || msg.content.toLowerCase().includes(exclude6.toLowerCase())
  || msg.content.toLowerCase().includes(exclude7.toLowerCase())
  || msg.content.toLowerCase().includes(exclude10.toLowerCase())
  || msg.content.toLowerCase().includes(exclude8.toLowerCase())
  || msg.content.toLowerCase().includes(exclude11.toLowerCase())
  || msg.content.toLowerCase().includes(exclude12.toLowerCase())
  || msg.content.toLowerCase().includes(exclude9.toLowerCase())) {
    replyBad(msg)

  }else if(msg.content.toLowerCase().includes(hello.toLowerCase())
  || msg.content.toLowerCase().includes(hello2.toLowerCase())){
    replyHello(msg)

  }else if(msg.content.toLowerCase().includes(bruh.toLowerCase())){
    replyGood(msg)

  }

});

function badResponse(){
  return Badlines[Math.floor(Math.random()*(Badlines.length))]
}
function HelloResponse(){
  return friendlyLines[Math.floor(Math.random()*(2))]
}

function friendlyResponse(){
  return friendlyLines[2]
}

function replyBad(msg){
  msg.delete(2000)
  msg.reply(badResponse()).then(m=>{m.delete(3000)});
  msg.channel.send(':warning: The message above is a scam. watch out!').then(m=>{m.delete(3000)});
}

function replyGood(msg){
  msg.reply(friendlyResponse());
}
function replyHello(msg){
  msg.reply(HelloResponse());
}

app.get('/',(req,res)=>{
 
  res.send(':)')
})

app.listen(process.env.PORT || 5000, ()=>{
console.log('App is listening')
})