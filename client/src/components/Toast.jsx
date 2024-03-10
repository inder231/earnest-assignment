import React from "react";
import { useToast } from "@chakra-ui/react";

const Toast = () => {
  const toast = useToast();
  const AddToast = (message, status) =>
    toast({
      title: message,
      status: status,
      duration: 1000,
      isClosable: true,
    });
  return { AddToast };
};

export default Toast;
