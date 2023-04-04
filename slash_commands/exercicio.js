const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const exampleEmbed = new EmbedBuilder()
  .setColor("Red")
  .setTitle("Exercicios")
  .addFields(
    { name: "\u200B", value: "\u200B" },
    {
      name: "\u200B",
      value:
        "1-) Crie uma função que receba dois parâmetros e retorne a soma dos dois valores.",
      inline: true,
    },
    {
      name: "\u200B",
      value:
        "2-) Crie uma função que receba um array de números e retorne o maior número encontrado no array.",
      inline: true,
    },
    {
      name: "\u200B",
      value:
        "3-) Crie uma função que receba um objeto como parâmetro e retorne uma string com os valores das propriedades do objeto.",
      inline: true,
    },
    {
      name: "\u200B",
      value:
        "4-) Crie uma classe chamada 'Pessoa' com as propriedades 'nome' e 'idade'. Em seguida, crie um objeto dessa classe e defina os valores das propriedades.",
      inline: true,
    },
    {
      name: "\u200B",
      value:
        "5-) Crie uma classe chamada 'Animal' com as propriedades 'nome' e 'som'. Em seguida, crie um objeto dessa classe e defina os valores das propriedades. Em seguida, crie uma função que receba um objeto 'Animal' como parâmetro e retorne uma string com o som que o animal faz.",
      inline: true,
    }
  );

module.exports = {
  data: new SlashCommandBuilder()
    .setName("exercicios")
    .setDescription("Lista de exercicios"),

  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed] });
  },
};
