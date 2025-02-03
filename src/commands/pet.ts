import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName('pet')
        .setDescription('Give Dawg a little pet!'),
    async execute(interaction: CommandInteraction) {
        interaction.reply('Aww, thanks! 🐶');
    }

}