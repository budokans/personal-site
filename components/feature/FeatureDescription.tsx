import { Box, Text } from "@chakra-ui/layout";

const Description: React.FC = ({ children }) => {
  return (
    <Box px={[4, 9]} maxW={["100%", "100%", "70%"]}>
      {children}
    </Box>
  );
};

const Paragraph: React.FC = ({ children }) => {
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

export { Description, Paragraph };
