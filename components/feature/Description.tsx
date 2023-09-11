import { Box, Text } from "@chakra-ui/react";
import { ChildrenProps } from "types";
import { ReactElement } from "react";

export const Description = ({ children }: ChildrenProps): ReactElement => {
  return (
    <Box px={[4, 9]} maxW={["100%", "100%", "70%"]}>
      {children}
    </Box>
  );
};

export const DescriptionParagraph = ({
  children,
}: ChildrenProps): ReactElement => {
  return <Text my={[3, 5]}>{children}</Text>;
};
