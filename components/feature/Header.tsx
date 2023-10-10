import {
  Box,
  Heading as ChakraHeading,
  Stack,
  Text,
  Img,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { ChildrenProps, ImageProps } from "types";

export const Header = ({ children }: ChildrenProps): ReactElement => (
  <header>
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
  </header>
);

export const Image = ({ src, alt }: ImageProps): ReactElement => (
  <Img
    src={src}
    alt={`${alt} Icon`}
    borderRadius="xl"
    boxSize={["65px", "90px"]}
  />
);

export const Inner = ({ children }: ChildrenProps): ReactElement => (
  <Box maxW="350px">{children}</Box>
);

export const Heading = ({ children }: ChildrenProps): ReactElement => (
  <ChakraHeading as="h2" fontSize="2xl" fontWeight={600} mb={[0, 0, 1]}>
    {children}
  </ChakraHeading>
);

export const Subheading = ({ children }: ChildrenProps): ReactElement => (
  <Text color="gray.500" fontSize="clamp(12px, 10.8px + 0.25vw, 14px)">
    {children}
  </Text>
);
