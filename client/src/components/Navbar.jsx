import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex justifyContent="space-between" shadow="md" p={4}>
      <Image src={`/vite.svg`} alt="logo" width={30} />
      <Text fontWeight="500" fontStyle="oblique">Task Manager</Text>
    </Flex>
  );
};

export default Navbar;
