import React, { Suspense, lazy } from "react";
import { Box, Flex, Spinner, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getAllTasks } from "../apis/getAllTasks";
import TaskCard from "../components/TaskCard";
const CreateTaskModal = lazy(() => import("../components/AddTaskModal"));

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
      <Flex justifyContent="end" m="10px auto" w="70dvw">
        <Suspense fallback={<Spinner />}>
          <CreateTaskModal />
        </Suspense>
      </Flex>
      <Box
        p={4}
        m="auto"
        w="70dvw"
        maxH="70dvh"
        overflowY="scroll"
        border="0.5px solid gray"
        borderRadius="md"
        sx={{
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            bg: "blue.400",
            borderRadius: "sm",
          },
        }}
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
