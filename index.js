global.Discord = require('discord.js');
global.client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_INTEGRATIONS","GUILD_EMOJIS_AND_STICKERS", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGE_REACTIONS", "GUILD_VOICE_STATES"]
})

client.login("");

client.on("ready", () => {
    console.log("ONLINE");
    
client.on("interactionCreate", interaction => {
    if (!interaction.isCommand()) return
    })

const fs = require("fs")

client.commands = new Discord.Collection()

const commandsFolder = fs.readdirSync("./commands");
for (const folder of commandsFolder) {
    const commandsFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
    for (const file of commandsFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

client.on("ready", () => {
    client.guilds.cache.forEach(guild => {
        client.commands.forEach(command => {
            guild.commands.create(command.data)
        })
    })
})

client.on("interactionCreate", interaction => {
    if (!interaction.isCommand()) return

    const command = client.commands.get(interaction.commandName)
    if (!command) return})
})

    const { DisTube } = require("distube")
const { SpotifyPlugin } = require("@distube/spotify")
const { SoundCloudPlugin } = require("@distube/soundcloud")


const distube = new DisTube(client, {
    youtubeDL: false,
    plugins: [new SpotifyPlugin(), new SoundCloudPlugin()],
    leaveOnEmpty: true,
    leaveOnStop: true
})

client.on("interactionCreate", interaction => {
    if (!interaction.isCommand()) return

client.guilds.cache.forEach(guild => {
    guild.commands.create({
        name: "Play",
        description: "Riproduce Musica"
    })
    client.guilds.cache.forEach(guild => {
        guild.commands.create({
            name: "Query",
            description: "Mette in coda una canzone"
        })
        client.guilds.cache.forEach(guild => {
            guild.commands.create({
                name: "Pause",
                description: "Mette in pausa la musica"
            })
}) })})
})
if (interaction.commandName == "Play") {
    const voiceChannel = message.member.voice.channel
    if (!voiceChannel) {
        interaction.reply({content:"Devi essere in un canale vocale!"}).catch(() => {})
    }}

    const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
    if (voiceChannelBot && voiceChannel.id != voiceChannelBot.id) {
        interaction.reply({content:"Qulacun'altro sta gia ascoltando della musica!"}).catch(() => {})
    }

    let args = message.content.split(/\s+/)
    let query = args.slice(1).join(" ")

    if (!query) {
        interaction.reply({content:"Inserisci la canzone che vuoi ascoltare"}).catch(() => {})
    }

        distube.play(voiceChannelBot || voiceChannel, query, {
            member: message.member,
            textChannel: message.channel,
            message: message
        }) 
        
    

