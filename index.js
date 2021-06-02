const items = require('./botconfig.json')
const prefix = items.prefix
const express = require("express")
const app = express()
console.log(prefix)

app.get("/", (req, res) => {
  res.send("hello hell!")
})

app.listen(3000, () => {
  console.log("Project is ready!")
})

let Discord = require("discord.js")
let client = new Discord.Client()

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "Something exciting is coming to HMRP soon" }, status: "online"})
})
client.on("message", message => { 
if(message.content === "{Prefix} Ping") {
  message.channel.send("Ping Pong")
}
if(message.content === "Activity-Check") {
  let embed = new Discord.MessageEmbed()
  .setTitle("Activity Check")
  .setDescription("You need to react to this so we know your active, we're cracking down on inactive members as we want HRMP to be a place where everyone can be active. If your away from your xbox or have an issue with it fill in an <#832340765132193873> which will take 5 minutes of your day if that.")
  .setColor("RED")
  .setFooter("HMRP™ Official Bot coded By: 1K-30 Bailey R. - Founder")
  message.channel.send(embed)
}
if(message.content === "Embed") {
  let embed = new Discord.MessageEmbed()
  .setTitle("This is embed title...supposedly")
  .setDescription("Description anyone?")
  .setColor("RANDOM")
  .setFooter("HMRP™ | 1K-30 Bailey R. - Founder")
  message.channel.send(embed)
}
});

client.login(process.env.token)