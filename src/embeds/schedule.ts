import { EmbedBuilder } from "@discordjs/builders";

export function createSchedule(times: string[]) {
    return new EmbedBuilder()
        .setColor(0x676eeb)
        .setTitle('🚨 This Week on Grayvox Broadcasting... 🚨')
        .setAuthor({ name: 'Welcome Back' })
        .setDescription(`
            Tune in for this week's shenanigans of many kinds!
            All times listed are in your local time zone.

            Sunday **-** ${times[0]}
            Monday **-** ${times[1]}
            Tuesday **-** ${times[2]}
            Wednesday **-** ${times[3]}
            Thursday **-** ${times[4]}
            Friday **-** ${times[5]}
            Saturday **-** ${times[6]}
            `)
        .setTimestamp()
        .setFooter({ text: 'For the week of...' });
}