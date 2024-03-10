import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Button,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useMutation } from "@tanstack/react-query";
import { deleteTask } from "../apis/deleteTask";
import { queryClient } from "../main";
import { changeCompleteStatus } from "../apis/changeCompleteStatus";

const TaskCard = ({ task }) => {
  const toast = useToast();
  const deleteTaskMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      toast({
        title: "Task deleted successfully!",
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
  });

  const changeTaskStatus = useMutation({
    mutationFn: () => changeCompleteStatus(task.id, task.completed),
    onSuccess: () => {
      toast({
        title: "Task deleted successfully!",
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
  });
  return (
    <Card w="80%" m={4} p={4} size="sm" fontSize="sm">
      <CardHeader>
        <Heading size="md">{task.title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{task.description}</Text>
      </CardBody>
      <CardFooter display="flex" justifyContent="space-between">
        <Button
          size="sm"
          colorScheme={task.completed ? "green" : "orange"}
          onClick={() => changeTaskStatus.mutate()}
        >
          {task.completed ? "Set not completed" : "Set completed"}
        </Button>
        <IconButton
          size="sm"
          variant="solid"
          colorScheme="red"
          aria-label="Delete"
          icon={<DeleteIcon />}
          onClick={() => deleteTaskMutation.mutate(task.id)}
        />
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
