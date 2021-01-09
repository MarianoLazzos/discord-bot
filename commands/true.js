module.exports = {
    name: "true",
    description: "true",
    execute(msg, args){
        if(msg == "true"){
            msg.reply("false");
        }else if(msg == "false"){
            msg.reply("ture");
        };
    },
}