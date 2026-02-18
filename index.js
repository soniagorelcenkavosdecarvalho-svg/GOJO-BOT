const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log('GOJO-BOT está online 😈🔥');
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === '!gojo') {
    message.reply('Eu sou o mais forte. 😈');
  }

  if (message.content === '!insano') {
    message.reply('VOCÊ OUSOU ME INVOCAR? EU SOU O CAOS ABSOLUTO 😈🔥');
  }
});

client.login(process.env.TOKEN);
