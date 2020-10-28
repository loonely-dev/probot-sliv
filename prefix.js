const Discord = require('discord.js');
 const fs = require("fs");
 module.exports.run = async (bot, message, args) => {
 if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("Napishite proverku");
  
    let prefixis = JSON.parse(fs.readFileSync("./guild.json", "utf8"));
   
   prefixis[message.guild.id] = {
      prefix: args[0]
    };
   
    fs.writeFile("./guild.json", JSON.stringify(prefixis), (err) => {
      if (err) console.log(err)
    });
 
   let embed = new Discord.RichEmbed()
    .setColor("#FF9900")
    .setTitle("Префикс установлен!")
    .setDescription(`Установил префикс: ${args[0]}`);
   
   message.channel.send(embed);
  }
   
  module.exports.help = {
    name: "prefix"
  }
   
  //================================= пихаем в bot.js(или что у вас там есть) ======================================================
 
  let prefixis = JSON.parse(fs.readFileSync("./guild.json", "utf8"));
  if(!prefixis[message.guild.id]){
         prefixis[message.guild.id] ={
            prefix: "."
    };
 };
fs.writeFile("./guild.json", JSON.stringify(prefixis), (err) => {
      if (err) console.log(err)
    });
 let prefix = prefixis[message.guild.id].prefix;
 let messageArray = message.content.split(" ");
 let cmd = messageArray[0];
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
 let commandfile = bot.commands.get(cmd.slice(prefix.length));
 if(commandfile) commandfile.run(bot,message,args);