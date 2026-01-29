import { ActionRow, Button, TextDisplay, type CommandKitButtonBuilderInteractionCollectorDispatch } from "commandkit";
import { ButtonStyle } from "discord.js";
import { SimpleModal } from "./modal";

export const simpleShowModalHandler: CommandKitButtonBuilderInteractionCollectorDispatch = async (interaction, ctx) => {
    await interaction.showModal(SimpleModal());
    ctx.dispose();
}

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
    )
}

