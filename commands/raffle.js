const Discord = require('discord.js');
const message = new Discord.MessageEmbed()
.setColor("#913aff")
.setTitle("Raffle")


module.exports = {
    name: "!raffle",
    description: "make a raffle: !raffle <param1 param2 ...>",
    execute(msg, args = []){
        let desc = "";
        let notPicked = args;
        let raffled;
        if(args.length >= 2){
            raffled = notPicked[Math.floor(Math.random() * notPicked.length)];
            desc += `**Winner:** ${raffled} \n`;
            notPicked.splice(notPicked.indexOf(raffled), 1);
            if(args.length === 3){
                for(let i = 0; i < 2; i++){
                    raffled = notPicked[Math.floor(Math.random() * notPicked.length)];
                    desc += `**${i+2}° Place:** ${raffled} \n`;
                    notPicked.splice(notPicked.indexOf(raffled), 1);
                };
            }
            else{
                raffled = notPicked[Math.floor(Math.random() * notPicked.length)];
                desc += `**2° Place:** ${raffled} \n`;
                notPicked.splice(notPicked.indexOf(raffled), 1);
            };
            message.description = `${desc}`;
            msg.channel.send(message);
        }else{
            msg.reply("You need at least (2) two parameters, Example: !raffle param1 param2");
        };  
    }
}
