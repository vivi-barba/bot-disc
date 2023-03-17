// classes para importar o discord.js
const { Client, Events, GatewayIntentBits } = require('discord.js');

// require dotenv 
const dotenv = require('dotenv');
dotenv.config();
const {TOKEN, CLIENT_ID, GUILD_ID} = process.env;

//import slash command of file
const fs = require("node:fs");
const path = require("node:path");

const commandsPath = path.join(__dirname, "slash_commands")
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))
console.log(commandsFiles)

// criando nova instancia client 
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once(Events.ClientReady, c => {
	console.log(`Pronto! Login realizado com ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(TOKEN);