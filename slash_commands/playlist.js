const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Playlistzinha para estudar"),

    async execute(interaction){
        await interaction.reply("https://open.spotify.com/playlist/7K3scENpOi7ZPZUHfnfic3?si=c0879f9bddd14a2f")
    }

}