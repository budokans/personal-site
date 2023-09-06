import { Flex } from "@chakra-ui/react";
import { ChildrenProps } from "types";
import { ReactElement } from "react";

export const Home = ({ children }: ChildrenProps): ReactElement => (
  <Flex
    direction="column"
    justifyContent={["space-between", "center"]}
    alignItems="center"
    minHeight="100vh"
    py={8}
    px={4}
    maxW={["100%", "930px"]}
    marginY="0"
    marginX="auto"
  >
    {children}
  </Flex>
);
