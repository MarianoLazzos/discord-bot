require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');


Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();
  console.info(`Called command: ${command}`);

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(msg, args, botCommands, bot);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});


bot.on('message', async msg => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!msg.guild) return;

  if (msg.content === '!join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (msg.member.voice.channel) {
      const connection = await msg.member.voice.channel.join();
    } else {
      msg.reply('You need to join a voice channel first!');
    }
  }
});


bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  console.log("prueba");
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

