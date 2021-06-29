import { Img } from "@chakra-ui/image";
import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import { ImageProps } from "../../interfaces";

interface Compound {
  Image: React.FC<ImageProps>;
  Inner: React.FC;
  Text: React.FC;
  Subtext: React.FC;
}

type HeaderCC = React.FC & Compound;

export const Header: HeaderCC = ({ children }) => {
  return <Container>{children}</Container>;
};

Header.Image = ({ src, alt }) => {
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

Header.Inner = ({ children }) => {
  return <Box maxW="350px">{children}</Box>;
};

Header.Text = ({ children }) => {
  return (
    <Heading as="h2" fontSize="2xl" fontWeight={600} mb={[0, 0, 1]}>
      {children}
    </Heading>
  );
};

Header.Subtext = ({ children }) => {
  return (
    <Text color="gray.500" fontSize="clamp(12px, 10.8px + 0.25vw, 14px)">
      {children}
    </Text>
  );
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
