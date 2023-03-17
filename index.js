// classes para importar o discord.js
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

// criando nova instancia client 
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();
// require dotenv 
const dotenv = require('dotenv');
dotenv.config();
const {TOKEN, CLIENT_ID, GUILD_ID} = process.env;

//import slash command of file
const fs = require("node:fs");
const path = require("node:path");

const commandsPath = path.join(__dirname, "slash_commands")
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

for (const file of commandsFiles){
    const filePath = path.join(commandsPath, file);
    const command = require(filePath); 

    if("data" in command && "execute" in command){
        client.commands.set(command.data.name, command)
    }else{
        console.log(`Pronto! Login realizado com ${filePath} esta com "data" ou "execute ausente"`)
    }
}
console.log(client.commands)


client.once(Events.ClientReady, c => {
	console.log(`Pronto! Login realizado com ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(TOKEN);