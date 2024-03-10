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
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useMutation } from "@tanstack/react-query";
import { deleteTask } from "../apis/deleteTask";
import { queryClient } from "../main";
import { changeCompleteStatus } from "../apis/changeCompleteStatus";
import Toast from "./Toast";

const TaskCard = ({ task }) => {
  const { AddToast } = Toast();
  const deleteTaskMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      AddToast("Task deleted successfully!", "success");
      queryClient.invalidateQueries({ queryKey: ["all_todos"] });
    },
    onError: () => {
      AddToast("Something went wrong, please try again later!", "error");
    },
  });

  const changeTaskStatus = useMutation({
    mutationFn: () => changeCompleteStatus(task.id, task.completed),
    onSuccess: () => {
      AddToast("Task status updated!", "success");
      queryClient.invalidateQueries({ queryKey: ["all_todos"] });
    },
    onError: () => {
      AddToast("Something went wrong, please try again later!", "error");
    },
  });
  return (
    <Card w="80%" m={4} p={0} size="sm" fontSize="sm" bg="lightblue">
      <CardHeader p={2}>
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
