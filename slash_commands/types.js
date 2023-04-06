const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
  .setColor("Blue")
  .setTitle("Tipos")
  .addFields(
    { name: "\u200B", value: "\u200B" },
    {
      name: "String",
      value:
        "Em qualquer linguagem de programação de computador, uma string é uma sequência de CARACTERES usada para representar texto.",
      inline: true,
    },
    {
      name: "Number",
      value:
        "Number é um tipo de dado numérico no formato de ponto flutuante de 64 bits de precisão dupla (IEEE 754) . Em outras linguagens de programação existem diferentes tipos numéricos; por exemplo, Inteiros, Floats, Doubles ou Bignums.",
      inline: true,
    },
    {
      name: "Int",
      value: "Declara uma constante de escopo de bloco, apenas de leitura.",
      inline: true,
    },
    { name: "\u200B", value: "\u200B" },
    {
      name: "boolean",
      value:
        "Na ciência da computação, um booleano é um tipo de dado lógico que pode ter apenas os valores true ou false",
      inline: true,
    },
    {
      name: "Null",
      value:
        "Number é um tipo de dado numérico no formato de ponto flutuante de 64 bits de precisão dupla (IEEE 754) . Em outras linguagens de programação existem diferentes tipos numéricos; por exemplo, Inteiros, Floats, Doubles ou Bignums.",
      inline: true,
    },
    {
      name: "Undefined",
      value: "Declara uma constante de escopo de bloco, apenas de leitura.",
      inline: true,
    },
    {
      name: "Se ainda ficou com dúvidas",
      iconURL: "https://i.imgur.com/AfFp7pu.png",
      value: "https://www.youtube.com/watch?v=7Isq6ekQT1k",
    }
  );
	
module.exports = {
    data: new SlashCommandBuilder()
        .setName("types")
        .setDescription("Aprendendo sobre tipos primitivos de dados"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}