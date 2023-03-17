const { REST, Routes} = require("discord.js")


const dotenv = require('dotenv');
dotenv.config();
const {TOKEN, CLIENT_ID, GUILD_ID} = process.env;

const fs = require("node:fs");
const path = require("node:path");
const commandsPath = path.join(__dirname, "slash_commands")
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

