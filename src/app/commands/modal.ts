import { SimpleModal } from '@/components/modal';
import type { ChatInputCommand, CommandData } from 'commandkit';

export const command: CommandData = {
  name: 'modal',
  description: "Test modal",
};

export const chatInput: ChatInputCommand = async (ctx) => {
  ctx.interaction.showModal(SimpleModal());
};