import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { help } from "../embeds/help";


export default {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('...What do you think it does?'),
    async execute(interaction: CommandInteraction) {
        interaction.reply({ embeds: [help] })
    }
}