import { Badge as ChakraBadge, Box, Heading, Flex } from "@chakra-ui/react";
import { ReactElement } from "react";
import { ChildrenProps } from "types";
import { hideScrollbar } from "styles/utilStyles";

export const Tech = ({ children }: ChildrenProps): ReactElement => (
  <Box overflow="hidden" padding={[4, 9]}>
    {children}
  </Box>
);

export const Header = ({ children }: ChildrenProps): ReactElement => (
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

export const Inner = ({ children }: ChildrenProps): ReactElement => (
  <Flex
    direction="row"
    whiteSpace="nowrap"
    sx={{ ...hideScrollbar, gap: ".5rem" }}
    // On small viewports presumably with touch events,
    // let the Tech badges overflow because they can be scrolled
    // by dragging. On larger devices with more screen real estate,
    // we'll just display them.
    overflowX={["auto", "visible"]}
    flexWrap={["nowrap", "wrap"]}
    py={1}
  >
    {children}
  </Flex>
);

export const Badge = ({ children }: ChildrenProps): ReactElement => (
  <Box>
    <ChakraBadge
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
    </ChakraBadge>
  </Box>
);
