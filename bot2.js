const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('бот запустился ' + bot.user.tag);
})

bot.on('message', message => {
    if(message.content == '!ping') message.channel.send('Pong!');
    if(message.content == '!ку') message.channel.send('Привет!');
    if(message.content == 'я') message.channel.send('я знаю бро');
    if(message.content == 'факт') message.channel.send('факт 1 - ты даун');
})


bot.login('NzYyOTM0MjQ1OTY5ODg3MjYy.X3wX4g.H96D3HEzAId6MAbwhdge0WuILoI');
