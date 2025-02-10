import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { blog } from "../embeds/blog";

export default {
    data: new SlashCommandBuilder()
        .setName('blog')
        .setDescription("Check out Gray's writings"),
    async execute(interaction: CommandInteraction) {
        interaction.reply({ embeds: [blog] });
    }

}