/*
const { SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("bake")
        .setDescription('Ask mom bot to bake you things like cookies and cake')
        .addSubcommand(subcommand =>
            subcommand.setName("cookies").setDescription("Ask mom to bake some cookies"))
        .addSubcommand(subcommand => 
            subcommand.setName("cake").setDescription("Ask mom to bake you cake")),
/*
            /**
             * @param {ChatInputCommandInteraction} interaction
             */
            /*
             async execute(interaction, client) {
                const cake = interaction.options.getSubcommand("cake")
                const cookies = interaction.options.getSubcommand("cookies")
                const math = Math.floor(Math.random() * 10)
                function cookieFunc(cookies){
                    if (math => 6) return interaction.reply("Mom baked you cookies 🍪")
                    if (math < 5) return interaction.reply("Mom decided not to make you cookies")
                }
                cookieFunc()
                function cakeFunc(cake) {
                    if (math => 6) return interaction.reply("Mom Baked you a cake 🍰")
                    if (math < 5) return interaction.reply("Mom decided not to make you a cake ❌🍰")
                }
                cakeFunc()
            }

}
*/
