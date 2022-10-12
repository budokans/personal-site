import { Box, Text } from "@chakra-ui/react";
import { ChildrenProps } from "interfaces";
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
  return (
    <Text
      fontSize="clamp(14px, 11.6px + 0.5vw, 18px)"
      my={[3, 5]}
      lineHeight={1.7}
    >
      {children}
    </Text>
  );
};
