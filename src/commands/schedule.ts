import { CommandInteraction, PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import { createSchedule } from "../embeds/schedule";

export default {
    data: new SlashCommandBuilder()
        .setName('schedule')
        .setDescription('Send this weeks schedule!')
        .addStringOption(sunday => sunday
            .setName('sunday')
            .setDescription('Sunday')
            .setRequired(true)
        )
        .addStringOption(monday => monday
            .setName('monday')
            .setDescription('Monday')
            .setRequired(true)
        )
        .addStringOption(tuesday => tuesday
            .setName('tuesday')
            .setDescription('Tuesday')
            .setRequired(true)
        )
        .addStringOption(wednesday => wednesday
            .setName('wednesday')
            .setDescription('Wednesday')
            .setRequired(true)
        )
        .addStringOption(thursday => thursday
            .setName('thursday')
            .setDescription('Thursday')
            .setRequired(true)
        )
        .addStringOption(friday => friday
            .setName('friday')
            .setDescription('Friday')
            .setRequired(true)
        )
        .addStringOption(saturday => saturday
            .setName('saturday')
            .setDescription('Saturday')
            .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),        
    async execute(interaction: CommandInteraction) {
        const sun = interaction.options.get('sunday');
        const mon = interaction.options.get('monday');
        const tue = interaction.options.get('tuesday');
        const wed = interaction.options.get('wednesday');
        const thu = interaction.options.get('thursday');
        const fri = interaction.options.get('friday');
        const sat = interaction.options.get('saturday');

        const schedule = createSchedule([
            sun?.value as string, 
            mon?.value as string, 
            tue?.value as string,
            wed?.value as string,
            thu?.value as string,
            fri?.value as string,
            sat?.value as string
        ]);
        await interaction.reply({ content: "<@&1324530658084786257>", embeds: [schedule] });

        // <@&1324530658084786257> is the Stream Gang role
    }
}