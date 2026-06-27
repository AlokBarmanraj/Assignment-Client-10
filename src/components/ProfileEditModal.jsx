import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaEdit } from "react-icons/fa";

const ProfileEditModal = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.toUpperCase();
    const image = e.target.image.value;
    await authClient.updateUser({
      name,
      image,
    });
  };
  return (
    <Modal>
      <Button variant="secondary">
        <FaEdit></FaEdit> Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaEdit className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Now</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input name="name" placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="url">
                    <Label>Image Url</Label>
                    <Input name="image" placeholder="Enter your image url" />
                  </TextField>
                  <div className="flex gap-2.5 justify-end pt-10">
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">
                      Save
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default ProfileEditModal;
