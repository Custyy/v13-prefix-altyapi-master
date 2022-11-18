const Discord = require('discord.js')
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_MESSAGES] })
const config = global.config = require('./config.js')
const db = global.db = require('quick.db')
const fs = require('fs')
const moment = require('moment')
require('moment-duration-format')
moment.locale('tr')

require('./utils/eventLoader.js')(client)

global.log = message => console.log(`${message}`)

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()

fs.readdir('./commands/', (Error, Files) => {
    if (Error) console.error(Error)
    console.log(`${Files.length} Komut Yüklenecek!`)
    Files.forEach(Pepe => {
        let Props = require(`./commands/${Pepe}`)
        console.log(`→ Yüklenen Komut: ${Props.help.name}.`)
        client.commands.set(Props.help.name, Props)
        Props.conf.aliases.forEach(Alias => {
            client.aliases.set(Alias, Props.help.name)
        })
    })
})

client.login(config.bot.token)
