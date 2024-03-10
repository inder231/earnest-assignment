import React from "react";
import {
  Button,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { createTask } from "../apis/createTask";
import { queryClient } from "../main";

const AddTaskModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [task, setTask] = React.useState({ title: "", description: "" });

  const addNewTaskMutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      toast({
        title: "Task created successfully!",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      queryClient.invalidateQueries({ queryKey: ["all_todos"] });
    },
    onError: () => {
      toast({
        title: "Something went wrong, please try again later!",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    },
    onSettled: () => {
        onClose();
    }
  });

  const handleTaskValueChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleAddNewTask = (e) => {
    e.preventDefault();
    addNewTaskMutation.mutate(task);
  };
  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" isTruncated size="sm">
        Add Task
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleAddNewTask}>
              <Flex gap={4} flexDir="column">
                <FormControl isRequired>
                  <FormLabel>Enter task title</FormLabel>
                  <Input
                    name="title"
                    placeholder="task title here.."
                    required
                    value={task.title}
                    onChange={handleTaskValueChange}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Enter task description</FormLabel>
                  <Input
                    name="description"
                    placeholder="task title here.."
                    required
                    value={task.description}
                    onChange={handleTaskValueChange}
                  />
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="green"
                  size="sm"
                >
                  Create
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTaskModal;
