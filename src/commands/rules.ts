import { CommandInteraction, PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import { rules } from "../embeds/rules";

export default {
    data: new SlashCommandBuilder()
        .setName('rules')
        .setDescription('Send the server rules in chat!')
        .addIntegerOption(number => number
            .setName('number')
            .setDescription('Which rule to send')
            .setRequired(true)
        .setAutocomplete(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
    async execute(interaction: CommandInteraction) {
        const number = interaction.options.get('number');

        switch (number?.value) {
            case 1:
                await interaction.reply({ embeds: [rules.one] });
                break;
            case 2:
                await interaction.reply({ embeds: [rules.two] });
                break;
            case 3:
                await interaction.reply({ embeds: [rules.three] });
                break;
            case 4:
                await interaction.reply({ embeds: [rules.four] });
                break;
            case 5:
                await interaction.reply({ embeds: [rules.five] });
                break;
            case 6:
                await interaction.reply({ embeds: [rules.six] });
                break;
            case 7:
                await interaction.reply({ embeds: [rules.seven] });
                break;
            case 8:
                await interaction.reply({ embeds: [rules.eight] });
                break;
            case 9:
                await interaction.reply({ embeds: [rules.nine] });
                break;
            default:
                await interaction.reply('Invalid rule option provided!');
                break;
        }
    }
}