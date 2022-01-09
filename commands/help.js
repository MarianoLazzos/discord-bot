const Discord = require('discord.js');


//Inicializacion del mensaje enbebido
const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#913aff")
    .setTitle("Listado de Comandos")
    .setAuthor('Mariano Lazzos', 'https://i.pinimg.com/originals/11/74/21/1174215797dec302c416c52eaac5fc46.png')
    .setTimestamp()

module.exports = {
  name: "!help",
  description: "all command list",
  execute(msg, args, commands){
    let stringCommands = [];
    for(let i in commands){
      stringCommands.push({name: `${commands[i].name}`, value: `${commands[i].description}`});
    }
    exampleEmbed.fields = stringCommands;
    msg.channel.send(exampleEmbed);
  }
}