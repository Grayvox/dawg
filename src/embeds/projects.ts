import { EmbedBuilder } from "discord.js";


export const projects = {
    stable: new EmbedBuilder()
    .setColor(0xCDD6F4)
    .setTitle('stable.dev')
    .setURL('https://stable.dev')
    .setAuthor({ name: 'Project' })
    .setDescription(`
            **NOTE: This platform is currently a WIP, and is not open to the public yet.**

            A platform for hosting Discord bots with ease like never before - you write the code, and we take care of the rest.

            - Infrastructure that automatically scales to your bots needs.

            - Support for any and all languages and frameworks, using our own open source library, [Tails](https://github.com/stabledotdev/tails).

            - Integrations with services and DBs you already use, like Redis and Lavalink.

            This project is owned and managed by my friend, [Perny](https://perny.dev). I am simply a developer on the team. :)
        `)
    .setImage('https://i.postimg.cc/C5gwPQ9x/image-2025-02-10-171623652.png')
    .setThumbnail('https://i.postimg.cc/QxjXcvp6/image-2025-02-10-171710867.png')
}