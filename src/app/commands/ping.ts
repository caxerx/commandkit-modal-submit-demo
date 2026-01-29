import { SimpleActionMessage } from '@/components';
import type { ChatInputCommand, CommandData } from 'commandkit';
import { MessageFlags } from 'discord.js';

export const command: CommandData = {
  name: 'ping',
  description: "Ping the bot to check if it's online.",
};

export const chatInput: ChatInputCommand = async (ctx) => {
  ctx.interaction.reply({
    flags: [MessageFlags.IsComponentsV2],
    components: SimpleActionMessage(),
  });
};