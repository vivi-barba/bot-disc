const { REST, Routes} = require("discord.js")


const dotenv = require('dotenv');
dotenv.config();
const {TOKEN, CLIENT_ID, GUILD_ID} = process.env;

const fs = require("node:fs");
const path = require("node:path");
const commandsPath = path.join(__dirname, "slash_commands")
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

const commands = [];

for (const file of commandsFiles){
    const command = require(`./slash_commands/${file}`);
    commands.push(command.data.toJSON());
}

// instância rest
const rest = new REST({versin: "10"}).setToken(TOKEN);

//fazendo o deploy

(async () => {
    try {
        console.log(`Resetando ${commands.length} comandos...`);

        //put
        const data = await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            {body: commands}
        )
        console.log("comandos registrados com sucesso!");
        

    }
    catch (error){
        console.error(error);
    }
})();
