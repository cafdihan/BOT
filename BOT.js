const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
   console.log("Estoy listo!");
});


var msg;
var i;
var time;
client.on("message", (message) => {

  //if (!message.content.startsWith(prefix)) return;
  //if (message.author.bot) return;

  if (message.content.startsWith( + "ping")) {
    message.channel.send("pong!"+message.content);
  }

  if (message.content.startsWith("Greetings")) {
    msg=message.content;
    for(i = 0; i<1000; i++){
      if(msg[i]=='f')
        if(msg[i+1]=='t')
          if(msg[i+2]==':')
            if(msg[i+3]==' ')
              if(msg[i+6]=='m'){
                time=parseInt(msg[i+4])*10+parseInt(msg[i+5]);
                break;
              }
              else if(msg[i+5]=='m') {
                time=parseInt(msg[i+4]);
                break;
              }
    }
    message.delete(time*60*1100);
  }

  if(message.content.startsWith( prefix + "ping")) {

  }
});

client.login(config.token);
