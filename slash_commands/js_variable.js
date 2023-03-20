const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor("Yellow")
	.setTitle("Variável Javascript")
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: 'Var', value: 'Declara uma variável, opcionalmente, inicializando-a com um valor.', inline: true },
		{ name: 'Let', value: 'Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.', inline: true },
		{ name: 'Const', value: 'Declara uma constante de escopo de bloco, apenas de leitura.', inline: true },
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("js_variable")
        .setDescription("Aprendendo sobre variáveis com javascript"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}