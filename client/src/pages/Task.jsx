import React from "react";
import {
  Box,
  Flex,
  Spinner,
  Button,
  Text,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getAllTasks } from "../apis/getAllTasks";
import TaskCard from "../components/TaskCard";

const Task = () => {
  const {
    isLoading: isLoadingAllTasks,
    error: errorAllTasks,
    isError: isErrorAllTasks,
    data: allTasksData,
  } = useQuery({
    queryKey: ["all_todos"],
    queryFn: getAllTasks,
  });
  return (
    <Box p={4}>
      <Flex justifyContent="end">
        <Button colorScheme="teal">Add Task</Button>
      </Flex>
      <Box
        p={4}
        m="auto"
        w="70dvw"
        maxH="70dvh"
        overflowY="scroll"
        shadow={"base"}
        borderRadius="md"
      >
        {/* Rendering task list here... */}
        {isLoadingAllTasks ? (
          <Flex w="full" justifyContent="center">
            <Spinner />
          </Flex>
        ) : isErrorAllTasks ? (
          <Text>{errorAllTasks.response.data.error}</Text>
        ) : (
          allTasksData && (
            <VStack>
              {allTasksData?.data?.tasks?.map((task, index) => {
                return <TaskCard key={`${index}-${task.title}`} task={task} />;
              })}
            </VStack>
          )
        )}
      </Box>
    </Box>
  );
};

export default Task;
