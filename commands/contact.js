const { execute } = require("./ping");

const Discord = require("discord.js");
const messaje = new Discord.MessageEmbed()
.setColor("#913aff")
.setAuthor("Developer contact")
.setColor("#913aff")
.setTitle("Send email")
.setURL("https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBnqBvMNsNmZPPckdrkskZkbZbXdhNmPRmDZFSjHmPBNkKxTTcdPmdVQFRwbsCsWBKpwhpk")

module.exports = {
    name: "!contact",
    description: "developer contact",
    execute(msg, args){
        msg.channel.send(messaje);
    }
}