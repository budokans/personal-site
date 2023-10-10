import { ReactElement } from "react";
import { Flex } from "@chakra-ui/react";
import { ChildrenProps } from "types";

export const Container = ({ children }: ChildrenProps): ReactElement => (
  <Flex
    direction="column"
    justifyContent={["space-between", "center"]}
    alignItems="center"
    height="100%"
    py={8}
    px={4}
    maxW={["100%", "930px"]}
    marginY="0"
    marginX="auto"
  >
    {children}
  </Flex>
);
