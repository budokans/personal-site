import { Img } from "@chakra-ui/image";
import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import { ImageProps } from "../../interfaces";

const FeatureHeader: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container: React.FC = ({ children }) => {
  return (
    <Stack
      display="flex"
      direction="row"
      alignItems="center"
      paddingTop={[4, 9]}
      px={[4, 9]}
      spacing={4}
    >
      {children}
    </Stack>
  );
};

const HeaderImage: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <Img
      src={src}
      alt={`${alt} Icon`}
      borderRadius="xl"
      width={["65px", "90px"]}
      height={["65px", "90px"]}
    />
  );
};

const HeaderInner: React.FC = ({ children }) => {
  return <Box maxW="350px">{children}</Box>;
};

const HeaderText: React.FC = ({ children }) => {
  return (
    <Heading as="h2" fontSize="2xl" fontWeight={600} mb={[0, 0, 1]}>
      {children}
    </Heading>
  );
};

const HeaderSubtext: React.FC = ({ children }) => {
  return (
    <Text color="gray.500" fontSize="clamp(12px, 10.8px + 0.25vw, 14px)">
      {children}
    </Text>
  );
};

export { FeatureHeader, HeaderImage, HeaderInner, HeaderText, HeaderSubtext };
