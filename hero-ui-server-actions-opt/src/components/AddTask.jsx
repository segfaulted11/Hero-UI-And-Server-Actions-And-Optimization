"use client";
import {CirclePlus, PlusShape} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField, ListBox, Select} from "@heroui/react";

const AddTask = ({AddATask}) => {
    return (
    <Modal>
      <Button variant="secondary"><PlusShape/>Add A Task</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CirclePlus className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Add The Task</Modal.Heading>
        
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={AddATask} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text" variant="secondary">
                    <Label>Task Name</Label>
                    <Input placeholder="Enter task name" />
                  </TextField>
                  <TextField className="w-full" name="description" type="text" variant="secondary">
                    <Label>Description</Label>
                    <Input placeholder="Enter your Description" />
                  </TextField>
     <Select  name="priority" className="w-[256px]" placeholder="Select one">
      <Label>Priotiy</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="mid" textValue="mid">
            Mid
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="low" textValue="low">
            Low
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="hig" textValue="high">
            High
            <ListBox.ItemIndicator />
          </ListBox.Item>

        </ListBox>
      </Select.Popover>
    </Select>
    
     <Select name="status" className="w-[256px]" placeholder="Select one">
      <Label>Status</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id=" InProgress" textValue="InProgress">
            In Progress
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="Pending" textValue="Pending">
            Pending
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="Completed" textValue="Completed">
            Completed
            <ListBox.ItemIndicator />
          </ListBox.Item>

        </ListBox>
      </Select.Popover>
    </Select>
    
                  <TextField className="w-full" name="assignee" variant="secondary">
                    <Label>Assigned To</Label>
                    <Input placeholder="Task assigned To" />
                  </TextField>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit">Submit Task</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    );
};

export default AddTask;