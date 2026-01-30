import {
  ActionRow,
  Button,
  TextDisplay,
  type CommandKitButtonBuilderInteractionCollectorDispatch,
} from "commandkit";
import { ButtonStyle } from "discord.js";
import { SimpleModal } from "./modal";

/** Example 1: Show modal immediately
 * This is not working.
 */

export const simpleShowModalHandler: CommandKitButtonBuilderInteractionCollectorDispatch =
  async (interaction, ctx) => {
    await interaction.showModal(SimpleModal());
    ctx.dispose();
  };

export const SimpleActionMessage = () => {
  return (
    <>
      <TextDisplay content="Simple Action Message" />
      <ActionRow>
        <Button
          label="Test"
          style={ButtonStyle.Primary}
          onClick={simpleShowModalHandler}
        />
      </ActionRow>
    </>
  );
};

/** Example 2: Show modal after 500ms in the
 *  This is not working too.
 */
export const simpleShowModalHandler2: CommandKitButtonBuilderInteractionCollectorDispatch =
  async (interaction, ctx) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    await interaction.showModal(SimpleModal());
    ctx.dispose();
  };

export const SimpleActionMessage2 = () => {
  return (
    <>
      <TextDisplay content="Simple Action Message" />
      <ActionRow>
        <Button
          label="Test2"
          style={ButtonStyle.Primary}
          onClick={simpleShowModalHandler}
        />
      </ActionRow>
    </>
  );
};

/**
 * Example 3: Show modal after 500ms in the button click handler
 * This is working.
 */
export const SimpleActionMessage3 = () => {
  return (
    <>
      <TextDisplay content="Simple Action Message" />
      <ActionRow>
        <Button
          label="Test3"
          style={ButtonStyle.Primary}
          onClick={(interaction, ctx) => {
            setTimeout(() => {
              interaction.showModal(SimpleModal());
              ctx.dispose();
            }, 500);
          }}
        />
      </ActionRow>
    </>
  );
};
