const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523656781193543741")
setInterval(function() {
channel.send(`crediiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiitmoooooooooooooooooooneeeeeeeeeeeeeeeeeeeeeey ViiRo`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
