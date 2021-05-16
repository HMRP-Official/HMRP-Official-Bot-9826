const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("hello hell!")
})

app.listen(3000, () => {
  console.log("Project is ready!")
})

let Discord = require("discord.js")
let client = new Discord.Client()

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "Watching 1K-30 Screw Up Again" }, status: "dnd"})
})
client.on("message", message => { 
if(message.content === "ping") {
  message.channel.send("pong")
}
if(message.content === "embed") {
  let embed = new Discord.MessageEmbed()
  .setTitle("This is embed title...supposedly")
  .setDescription("Description anyone?")
  .setColor("RANDOM")
  .setFooter("HMRP™ | 1K-30 Bailey R. - Founder")
  message.channel.send(embed)
}
});

client.login(process.env.token)