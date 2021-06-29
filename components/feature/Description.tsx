import { Box, Text } from "@chakra-ui/layout";

interface Description {
  Paragraph: React.FC;
}

type DescriptionCC = Description & React.FC;

export const Description: DescriptionCC = ({ children }) => {
  return (
    <Box px={[4, 9]} maxW={["100%", "100%", "70%"]}>
      {children}
    </Box>
  );
};

Description.Paragraph = ({ children }) => {
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
