"use client";
import { CreateATask } from "@/lib/actions";
import {
    Button,
    Input,
    Label,
    Modal,
    TextField,
    ListBox,
    Select,
    Form,
    FieldError,
} from "@heroui/react";

const NewTask = () => {
    return (
        <div className="w-1/2 mx-auto">
            <h2 className="tetx-3xl text-center">Add A New Task</h2>
            <div>
                <Form action={CreateATask} className="flex flex-col gap-4">
                    <TextField
                        className="w-full"
                        name="title"
                        type="text"
                        variant="secondary"
                           minLength={8}
                        isRequired
                        validate={(value) => {
                            if (value.length < 8) {
                                return "task must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "task must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "task must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Task Name</Label>
                        <Input placeholder="Enter task name" />
                               <FieldError />
                    </TextField>
                    <TextField
                        className="w-full"
                        name="description"
                        type="text"
                        variant="secondary"
                    >
                        <Label>Description</Label>
                        <Input placeholder="Enter your Description" />
                    </TextField>
                    <Select
                        name="priority"
                        className="w-[256px]"
                        placeholder="Select one"
                    >
                        <Label>Priority</Label>
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
                                <ListBox.Item id="high" textValue="high">
                                    High
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <Select
                        name="status"
                        className="w-[256px]"
                        placeholder="Select one"
                    >
                        <Label>Status</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="InProgress" textValue="InProgress">
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

                    <TextField
                        className="w-full"
                        name="assignedTo"
                        variant="secondary"
                    >
                        <Label>Assigned To</Label>
                        <Input placeholder="Task assigned To" />
                    </TextField>
                    <Modal.Footer>
                        <Button slot="close" variant="secondary">
                            Cancel
                        </Button>
                        <Button type="submit">Submit Task</Button>
                    </Modal.Footer>
                </Form>
            </div>
        </div>
    );
};

export default NewTask;