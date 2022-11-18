const Discord = require('discord.js')

module.exports = (client) => {

  client.user.setActivity(`github.com/custyTR/v13-prefix-altyapi-master`, { type: 'PLAYING', url: 'https://youtube.com/c/Custy31' })

  console.log(`${client.user.username} Online! (${client.guilds.cache.size} Server - ${client.channels.cache.size} Channel - ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Users)`)
}