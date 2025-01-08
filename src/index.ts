import { Client, Events, GatewayIntentBits } from 'discord.js';

const TOKEN = process.env.BOT_TOKEN;
const CLIENT = new Client({ intents: [GatewayIntentBits.Guilds] });

CLIENT.once(Events.ClientReady, readyClient => {
	console.log(`Dawg is alive! Logged in as ${readyClient.user.tag}`);
});

CLIENT.login(TOKEN);