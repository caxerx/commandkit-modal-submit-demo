import type { EventHandler } from 'commandkit';
import { Logger } from 'commandkit/logger';

const handler: EventHandler<'interactionCreate'> = async (interaction) => {
  if ('customId' in interaction) {
    Logger.info(`Interaction created: ${interaction.customId}`);
  } else {
    Logger.info(`Interaction created: ${interaction}`);
  }
};

export default handler;
