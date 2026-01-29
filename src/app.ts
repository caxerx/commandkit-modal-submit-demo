import { Client } from 'discord.js';

const client = new Client({
  intents: ['GuildMessages', 'MessageContent'],
});

export default client;
