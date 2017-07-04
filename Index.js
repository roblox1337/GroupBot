const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('MjgzNjU1ODIwOTU1MDkwOTU0.DD0XqQ.YaYWll7bEz3ToNdi-tMRBD0OBV8');
