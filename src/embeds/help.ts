import { EmbedBuilder } from "discord.js";

export const help = new EmbedBuilder()
    .setColor(0x676eeb)
    .setAuthor({ name: 'Dawg' })
    .setTitle(`Help Desk`)
    .setDescription(`
        Greetings hooman! I am da dawg, Dawg. That is my name, Dawg. Yes. I luv dat name.
        I am a very good boy. I do lots of funny stuff, including some things that might help you out around here!
        
        Here is a list of da commands I dew:
        **/blog** - Check out Gray's blog and the writings he throws on there.
        **/help** - ...What do you think it does?
        **/links** - Check out all of Gray's links and the cool platform he uses to manage them.
        **/pet** - Give Dawg a pet. He likes pets. Please. He loves pets.
        **/stable** - Learn about stable.dev - a project Gray is helping create with some friends!

        \`Bot designed by Grayvox using TypeScript, Discord.js, and Bun\`
    `)
    .setFooter({ text: 'If you need any more help, contact Grayvox himself!' });