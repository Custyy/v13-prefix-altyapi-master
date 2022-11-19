const Discord = require('discord.js')

exports.run = async (client, message, args) => {
   message.channel.send(`\`🏓\` Latency is **${Date.now() - message.createdTimestamp}**ms!
\`💻\` API Latency is **${client.ws.ping}**ms!`)
}

exports.conf = {
   enabled: true,
   guildOnly: true,
   aliases: ['ping'],
   permLevel: 0
}

exports.help = {
   name: 'Ping',
   description: 'Botun geçikme süresini gösterir.'
}