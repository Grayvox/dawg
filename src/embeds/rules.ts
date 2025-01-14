import { EmbedBuilder } from "discord.js";

export const rules = {
    one: new EmbedBuilder()
        .setColor(0x676eeb)
        .setTitle('1 - We Are A Common Ground')
        .setAuthor({ name: 'Guidelines of the Lab' })
        .setDescription(`
            First and foremost - we are not here to cause arguments, discriminate, harass, abuse, trash talk, name call, insult, 
            ridicule, gossip, deliberate personal malice, threat, defame, impersonate... the whole lasagna. We are here as a 
            community to build stuff, play video games, and write incredible stories. We are NOT here to fight one another or try 
            to disrupt the peace. We are a common ground, not a battlefield. You have the right to an opinion, but not a right to 
            fight people on this opinion. This rule will always come first.
            `)
        .setTimestamp()
        .setFooter({ text: 'Last updated on...' }),
    two: new EmbedBuilder()
        .setColor(0x676eeb)
        .setTitle('2 - We Are One Community ')
        .setAuthor({ name: 'Guidelines of the Lab' })
        .setDescription(`
            To build off of Rule 1, and to be more specific: We do not allow discrimination or any harmful actions thereof, 
            towards any human based off of their sex, race, homeland, gender identity, sexual orientation, disabilities, health 
            conditions, political opinions, and hair color for that matter. You are who you are, you were born how and where you 
            were born, and as long as you welcome everyone, you should be welcomed just the same as anyone else regardless of that.
            `)
        .setTimestamp()
        .setFooter({ text: 'Last updated on...' }),
    three: new EmbedBuilder()
        .setColor(0x676eeb)
        .setTitle('3 - Shut Yo Fluffing Mouth')
        .setAuthor({ name: 'Guidelines of the Lab' })
        .setDescription(`
            Foul language, sexual discussions, pornography/adult content, and harassment of any kind towards others is a no no. We 
            offer a space for all people, including minors and those who are simply, and morally, against these things. Seriously, 
            learn to shut yo' fluffing mouth. 
            `)
        .setTimestamp()
        .setFooter({ text: 'Last updated on...' }),
    four: new EmbedBuilder()
        .setColor(0x676eeb)
        .setTitle('4 - Keep The Spam Outta Here')
        .setAuthor({ name: 'Guidelines of the Lab' })
        .setDescription(`
            No spamming. This includes the spamming of messages, shared media, pings, links, questions, answers, and... (leads 
            into the next rule).
            `)
        .setTimestamp()
        .setFooter({ text: 'Last updated on...' }),
    five: new EmbedBuilder()
        .setColor(0x676eeb)
        .setTitle("5 - Don't Be A Salesman")
        .setAuthor({ name: 'Guidelines of the Lab' })
        .setDescription(`
            Ads. Unless you are putting it in a channel that specifically says it is for advertising (Which, as of the last 
            update to this, we do not have), we do not allow the promotion of any product, service or project. Oh yeah, and don't 
            DM anyone ads either.
            `)
        .setTimestamp()
        .setFooter({ text: 'Last updated on...' }),
    six: new EmbedBuilder()
        .setColor(0x676eeb)
        .setTitle("6 - DON'T SPOIL THE LORE")
        .setAuthor({ name: 'Guidelines of the Lab' })
        .setDescription(`
            To put it lightly, we enjoy lore around here. So, do us all a favor, and don't spoil stuff. If you have something to 
            say that is a major spoiler or gives away important details discovered later on in a game, TV show, film, web series, 
            or anything like that... **USE SPOILER TAGS -->** || surrounding the text.
            `)
        .setTimestamp()
        .setFooter({ text: 'Last updated on...' }),
    seven: new EmbedBuilder()
        .setColor(0x676eeb)
        .setTitle('7 - We Only Speak Ze English')
        .setAuthor({ name: 'Guidelines of the Lab' })
        .setDescription(`
            We get it, learning a new language can be... painful, to put it lightly (both for communication and programming). That 
            being said though, most of us only speak English, so let's keep it to English in this server.
            `)
        .setTimestamp()
        .setFooter({ text: 'Last updated on...' }),
    eight: new EmbedBuilder()
        .setColor(0x676eeb)
        .setTitle('8 - Respect Our Team')
        .setAuthor({ name: 'Guidelines of the Lab' })
        .setDescription(`
            Our moderators, admins, and any other staff work very hard to keep this place going. Never interfere with their work or 
            make it more difficult. This includes mini-modding, disrespecting authority, constantly asking them questions, etc. Let 
            us do our jobs so we can all have a good time here.
            `)
        .setTimestamp()
        .setFooter({ text: 'Last updated on...' }),
    nine: new EmbedBuilder()
        .setColor(0x676eeb)
        .setTitle('9 - Read The Darn ToS')
        .setAuthor({ name: 'Guidelines of the Lab' })
        .setDescription(`
            Oh yeah, and anything apart of Discord's Terms of Service and Guidelines applies here too. 

            Terms of Service --> https://discord.com/terms
            Guidelines --> https://discord.com/guidelines
            `)
        .setTimestamp()
        .setFooter({ text: 'Last updated on...' })
}