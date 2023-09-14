import { Badge, Box, Heading, Flex } from "@chakra-ui/react";
import { ChildrenProps } from "types";
import { ReactElement } from "react";
import { hideScrollbar } from "../../styles/utilStyles";

const Container = ({ children }: ChildrenProps): ReactElement => {
  return (
    <Box overflow="hidden" padding={[4, 9]}>
      {children}
    </Box>
  );
};

export const Tech = ({ children }: ChildrenProps): ReactElement => {
  return <Container>{children}</Container>;
};

export const TechHeader = ({ children }: ChildrenProps): ReactElement => {
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

// On small viewports, presumably with touch events, we
// will let the tech badges overflow because they can be scrolled
// by dragging. On larger devices with more screen real estate,
// we'll just display them.
export const TechInner = ({ children }: ChildrenProps): ReactElement => (
  <Flex
    direction="row"
    whiteSpace="nowrap"
    sx={{ ...hideScrollbar, gap: ".5rem" }}
    overflowX={["auto", "visible"]}
    flexWrap={["nowrap", "wrap"]}
    py={1}
  >
    {children}
  </Flex>
);
export const TechBadge = ({ children }: ChildrenProps): ReactElement => {
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
