import { Badge, Box, Heading, Stack } from "@chakra-ui/react";
import { hideScrollbar } from "../../styles/utilStyles";

interface Compound {
  Header: React.FC;
  Inner: React.FC;
  Badge: React.FC<{ last: boolean }>;
}

type TechCC = Compound & React.FC;

const Container: React.FC = ({ children }) => {
  return (
    <Box overflow="hidden" paddingLeft={[4, 9]}>
      {children}
    </Box>
  );
};

export const Tech: TechCC = ({ children }) => {
  return <Container>{children}</Container>;
};

Tech.Header = ({ children }) => {
  return (
    <Heading
      as="h5"
      fontSize="clamp(11px, 10.4px + 0.13vw, 12px);"
      fontWeight="400"
      opacity="0.75"
      textTransform="uppercase"
      mb={3}
    >
      {children}
    </Heading>
  );
};

Tech.Inner = ({ children }) => {
  return (
    <Stack
      direction="row"
      overflowX="auto"
      whiteSpace="nowrap"
      sx={hideScrollbar}
    >
      {children}
    </Stack>
  );
};

Tech.Badge = ({ last, children }) => {
  return (
    <Box>
      <Badge
        variant="outline"
        borderWidth="0px"
        borderRadius="xl"
        border="1px solid"
        borderColor="gray.300"
        boxShadow="0"
        px={5}
        py={4}
        textTransform="none"
        color="gray.800"
        fontSize="sm"
        fontWeight="normal"
        marginRight={last ? "1rem !important" : "0"}
      >
        {children}
      </Badge>
    </Box>
  );
};
