const ytdl = require('ytdl-core');
let queue = [];

module.exports = {
    name: "!play",
    description: "play a YoutubeLink",
    execute(msg, args, botCommands, bot){
        if(msg.member.voice.channel){
            queue.push(...args);
            const voiceChannel = msg.member.voice.channel;
            voiceChannel.join().then(connection => {
            const stream = ytdl(`${queue[0]}`, { filter: 'audioonly' });
            queue.shift();
            const dispatcher = connection.play(stream);
            if(queue != 0){
                bot.commands.get("!play").execute(queue, bot);
            }else{
                dispatcher.on('finish', () => voiceChannel.leave());
            };                   
            })
        } else {
            msg.reply("You need to join a voice channel first!");
        }
        
    }
}


