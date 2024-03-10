import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
const TaskCard = ({task}) => {
  return (
    <Box shadow="outline" m={4} w="80%" borderRadius="md" p={2}>
      <Flex>
        <Heading size="sm">{task.title}</Heading>
      </Flex>
      <Flex>
        <Text>{task.description}</Text>
      </Flex>
    </Box>
  );
};

export default TaskCard;
