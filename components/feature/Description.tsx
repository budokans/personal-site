import { ReactElement } from "react";
import { Box, Text } from "@chakra-ui/react";
import { ChildrenProps } from "types";

export const Description = ({ children }: ChildrenProps): ReactElement => (
  <Box px={[4, 9]} maxW={["100%", "100%", "70%"]}>
    {children}
  </Box>
);

export const Paragraph = ({ children }: ChildrenProps): ReactElement => (
  <Text my={[3, 5]}>{children}</Text>
);
