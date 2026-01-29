import { ActionRow, Button, Label, Modal, ShortInput, TextDisplay, type CommandKitButtonBuilderInteractionCollectorDispatch, type CommandKitModalBuilderInteractionCollectorDispatch } from "commandkit";
import { ButtonStyle } from "discord.js";

export const simpleSubmitHandler: CommandKitModalBuilderInteractionCollectorDispatch = async (interaction, ctx) => {
    console.log(interaction.fields.fields.get('name'));
    ctx.dispose();
}

export const SimpleModal = () => {
    return (
        <Modal title="Simple Modal" onSubmit={simpleSubmitHandler}>
            <Label label="Simple Label">
                <ShortInput
                    customId="name"
                    placeholder="Enter your name"
                    required
                />
            </Label>
        </Modal>
    )
}

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

