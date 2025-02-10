import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { links } from "../embeds/links";

export default {
    data: new SlashCommandBuilder()
        .setName('links')
        .setDescription("Find all of Gray's links across the interwebs!"),
    async execute(interaction: CommandInteraction) {
        interaction.reply({ embeds: [links] });
    }

}