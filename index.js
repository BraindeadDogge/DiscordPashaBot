const { triggerAsyncId } = require("async_hooks");
const Discord = require("discord.js");
const { connected } = require("process");
const config = require("./config.json");
const client = new Discord.Client();
client.login(config.BOT_TOKEN);


const prefix = "!";

client.on("message", message => {
    if (!message.content.startsWith(prefix)) return;
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    const channel = client.channels.cache.get("686271048999632896");
    if(command === "блянекит") {
        channel.join().then(connection => {
            const dispatcher = connection.play('./peppa.mp3')
            setTimeout(function(){
                channel.leave()
            }, 14000);
        }).catch(err => console.log(err));
    }
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
    if(newMember.id === '420936422178947084' && newMember.channelID === '686271048999632896') {
        client.channels.cache.get('784532987277869098').send('некит, здарова жирная мразь');
        client.channels.cache.get("686271048999632896").join().then(connection => {
            const dispatcher = connection.play('./hello.m4a')
            setTimeout(function(){
                client.channels.cache.get("686271048999632896").leave()
            }, 5000);
        }).catch(err => console.log(err));
    }
    else if(newMember.id === '420936422178947084' && newMember.channelID === null) {
        client.channels.cache.get('784532987277869098').send('некит съебал накапливать массу');
        client.channels.cache.get("686271048999632896").join().then(connection => {
            const dispatcher = connection.play('./bye.m4a')
            setTimeout(function(){
                client.channels.cache.get("686271048999632896").leave()
            }, 2000);
        }).catch(err => console.log(err));
    }
})


client.on('voiceStateUpdate', (oldMember, newMember) => {
    if(newMember.id === '420936422178947084' && newMember.channelID === '731993706747658362') {
        client.channels.cache.get('784532987277869098').send('некит, здарова жирная мразь');
        client.channels.cache.get("731993706747658362").join().then(connection => {
            const dispatcher = connection.play('./hello.m4a')
            setTimeout(function(){
                client.channels.cache.get("731993706747658362").leave()
            }, 5000);
        }).catch(err => console.log(err));
    }
    else if(newMember.id === '420936422178947084' && newMember.channelID === null) {
        client.channels.cache.get('784532987277869098').send('некит съебал накапливать массу');
        client.channels.cache.get("731993706747658362").join().then(connection => {
            const dispatcher = connection.play('./bye.m4a')
            setTimeout(function(){
                client.channels.cache.get("731993706747658362").leave()
            }, 2000);
        }).catch(err => console.log(err));
    }
})


client.on('voiceStateUpdate', (oldMember, newMember) => {
    if(newMember.id === '420936422178947084' && newMember.channelID === '781973498200981564') {
        client.channels.cache.get('784532987277869098').send('некит, здарова жирная мразь');
        client.channels.cache.get("781973498200981564").join().then(connection => {
            const dispatcher = connection.play('./hello.m4a')
            setTimeout(function(){
                client.channels.cache.get("781973498200981564").leave()
            }, 5000);
        }).catch(err => console.log(err));
    }
    else if(newMember.id === '420936422178947084' && newMember.channelID === null) {
        client.channels.cache.get('784532987277869098').send('некит съебал накапливать массу');
        client.channels.cache.get("781973498200981564").join().then(connection => {
            const dispatcher = connection.play('./bye.m4a')
            setTimeout(function(){
                client.channels.cache.get("781973498200981564").leave()
            }, 2000);
        }).catch(err => console.log(err));
    }
})


client.on('voiceStateUpdate', (oldMember, newMember) => {
    if(newMember.id === '420936422178947084' && newMember.channelID === '781973581944586242') {
        client.channels.cache.get('784532987277869098').send('некит, здарова жирная мразь');
        client.channels.cache.get("781973581944586242").join().then(connection => {
            const dispatcher = connection.play('./hello.m4a')
            setTimeout(function(){
                client.channels.cache.get("781973581944586242").leave()
            }, 5000);
        }).catch(err => console.log(err));
    }
    else if(newMember.id === '420936422178947084' && newMember.channelID === null) {
        client.channels.cache.get('784532987277869098').send('некит съебал накапливать массу');
        client.channels.cache.get("781973581944586242").join().then(connection => {
            const dispatcher = connection.play('./bye.m4a')
            setTimeout(function(){
                client.channels.cache.get("781973581944586242").leave()
            }, 2000);
        }).catch(err => console.log(err));
    }
})


client.on('voiceStateUpdate', (oldMember, newMember) => {
    if(newMember.id === '420936422178947084' && newMember.channelID === '781931900217983028') {
        client.channels.cache.get('784532987277869098').send('некит, здарова жирная мразь');
        client.channels.cache.get("781931900217983028").join().then(connection => {
            const dispatcher = connection.play('./hello.m4a')
            setTimeout(function(){
                client.channels.cache.get("781931900217983028").leave()
            }, 5000);
        }).catch(err => console.log(err));
    }
    else if(newMember.id === '420936422178947084' && newMember.channelID === null) {
        client.channels.cache.get('784532987277869098').send('некит съебал накапливать массу');
        client.channels.cache.get("781931900217983028").join().then(connection => {
            const dispatcher = connection.play('./bye.m4a')
            setTimeout(function(){
                client.channels.cache.get("781931900217983028").leave()
            }, 2000);
        }).catch(err => console.log(err));
    }
})


client.on('voiceStateUpdate', (oldMember, newMember) => {
    if(newMember.id === '420936422178947084' && newMember.channelID === '748634031419293888') {
        client.channels.cache.get('784532987277869098').send('некит, здарова жирная мразь');
        client.channels.cache.get("748634031419293888").join().then(connection => {
            const dispatcher = connection.play('./hello.m4a')
            setTimeout(function(){
                client.channels.cache.get("748634031419293888").leave()
            }, 5000);
        }).catch(err => console.log(err));
    }
    else if(newMember.id === '420936422178947084' && newMember.channelID === null) {
        client.channels.cache.get('784532987277869098').send('некит съебал накапливать массу');
        client.channels.cache.get("748634031419293888").join().then(connection => {
            const dispatcher = connection.play('./bye.m4a')
            setTimeout(function(){
                client.channels.cache.get("748634031419293888").leave()
            }, 2000);
        }).catch(err => console.log(err));
    }
})

