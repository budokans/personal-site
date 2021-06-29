import { Badge, Box, Heading, Stack } from "@chakra-ui/layout";

const FeatureTech: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container: React.FC = ({ children }) => {
  return (
    <Box overflow="hidden" px={[4, 9]}>
      {children}
    </Box>
  );
};

const TechHeader: React.FC = ({ children }) => {
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

const TechInner: React.FC = ({ children }) => {
  const hideScrollbar = {
    "&::-webkit-scrollbar": {
      width: "0 !important",
      display: "none",
    },
  };

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

const TechBadge: React.FC = ({ children }) => {
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
      >
        {children}
      </Badge>
    </Box>
  );
};

export { FeatureTech, TechHeader, TechInner, TechBadge };