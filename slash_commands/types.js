const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor("Blue")
	.setTitle("Tipos")
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: 'String', value: 'Em qualquer linguagem de programação de computador, uma string é uma sequência de CARACTERES usada para representar texto.', inline: true },
		{ name: 'Number', value: 'Number é um tipo de dado numérico no formato de ponto flutuante de 64 bits de precisão dupla (IEEE 754) . Em outras linguagens de programação existem diferentes tipos numéricos; por exemplo, Inteiros, Floats, Doubles ou Bignums.', inline: true },
		{ name: 'Const', value: 'Declara uma constante de escopo de bloco, apenas de leitura.', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Se ainda ficou com dúvidas', iconURL: 'https://i.imgur.com/AfFp7pu.png' , value: 'https://www.youtube.com/watch?v=sIXUNUqnoXI' },

	)
	
module.exports = {
    data: new SlashCommandBuilder()
        .setName("types")
        .setDescription("Aprendendo sobre tipos primitivos de dados"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}