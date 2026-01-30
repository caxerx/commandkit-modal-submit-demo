import { SimpleActionMessage3 } from '@/components/action-message';
import type { ChatInputCommand, CommandData } from 'commandkit';
import { MessageFlags } from 'discord.js';

export const command: CommandData = {
  name: 'actionrow3',
  description: "Test action row",
};

export const chatInput: ChatInputCommand = async (ctx) => {
  ctx.interaction.reply({
    flags: [MessageFlags.IsComponentsV2],
    components: SimpleActionMessage3(),
  });
};