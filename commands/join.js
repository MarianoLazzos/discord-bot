module.exports = {
    name: "!join",
    description: "join bot to channel",
    execute(){
        const voiceChannel = msg.member.voice.channel;
        voiceChannel.join();
    }
}