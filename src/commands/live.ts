import { CommandInteraction, PermissionFlagsBits, SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName('live')
        .setDescription('Send the announcement when you go live!')
        .addStringOption(current_topic => current_topic
            .setName('current_topic')
            .setDescription('Current Topic')
            .setRequired(true)
        )
        .addStringOption(later_topic => later_topic
            .setName('later_topic')
            .setDescription('Later Topic')
            .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),     
    async execute(interaction: CommandInteraction) {
        const currentTopic = interaction.options.get('current_topic')?.value;
        const laterTopic = interaction.options.get('later_topic')?.value;

        await interaction.reply(`## 🚨 The Alpha Has Awoken 🚨\nPrepare yourselves, interns...\n**We are LIVE on Twitch**\n\n${currentTopic}\n${laterTopic}\n\n**GO GO GO GO**\nhttps://www.twitch.tv/grayvoxdev\n\n<@&1324530658084786257>`);
    }
}