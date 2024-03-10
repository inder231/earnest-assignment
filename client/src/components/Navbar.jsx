import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex justifyContent="space-between" shadow="md" p={4}>
      <Text>TM</Text>
      <Text>Task Manager</Text>
    </Flex>
  );
};

export default Navbar;
