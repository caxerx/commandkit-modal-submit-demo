import { Label, Modal, ShortInput, type CommandKitModalBuilderInteractionCollectorDispatch } from "commandkit";

export const simpleSubmitHandler: CommandKitModalBuilderInteractionCollectorDispatch = async (interaction, ctx) => {
    console.log(interaction.fields.fields.get('name'));
    await interaction.deferUpdate();
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
