import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { projects } from "../embeds/projects";


export default {
    data: new SlashCommandBuilder()
        .setName('stable')
        .setDescription('Learn about one of my projects, stable.dev!'),
    async execute(interaction: CommandInteraction) {
        interaction.reply({ embeds: [projects.stable] })
    }
}