import { Box, Heading, Stack, Text, Img } from "@chakra-ui/react";
import { ReactElement } from "react";
import { ChildrenProps, ImageProps } from "../../types";

const Container = ({ children }: ChildrenProps): ReactElement => {
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

export const Header = ({ children }: ChildrenProps): ReactElement => {
  return <Container>{children}</Container>;
};

export const HeaderImage = ({ src, alt }: ImageProps): ReactElement => {
  return (
    <Img
      src={src}
      alt={`${alt} Icon`}
      borderRadius="xl"
      boxSize={["65px", "90px"]}
    />
  );
};

export const HeaderInner = ({ children }: ChildrenProps): ReactElement => {
  return <Box maxW="350px">{children}</Box>;
};

export const HeaderText = ({ children }: ChildrenProps): ReactElement => {
  return (
    <Heading as="h2" fontSize="2xl" fontWeight={600} mb={[0, 0, 1]}>
      {children}
    </Heading>
  );
};

export const HeaderSubtext = ({ children }: ChildrenProps): ReactElement => {
  return (
    <Text color="gray.500" fontSize="clamp(12px, 10.8px + 0.25vw, 14px)">
      {children}
    </Text>
  );
};
