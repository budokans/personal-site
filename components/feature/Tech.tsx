import { Badge, Box, Heading, Stack } from "@chakra-ui/react";
import { ChildrenProps } from "interfaces";
import { ReactElement } from "react";
import { hideScrollbar } from "../../styles/utilStyles";

interface TechBadgeProps {
  readonly isLast: boolean;
}

const Container = ({ children }: ChildrenProps): ReactElement => {
  return (
    <Box overflow="hidden" paddingLeft={[4, 9]}>
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

export const TechInner = ({ children }: ChildrenProps): ReactElement => {
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

export const TechBadge = ({
  isLast,
  children,
}: TechBadgeProps & ChildrenProps): ReactElement => {
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
        marginRight={isLast ? "1rem !important" : "0"}
      >
        {children}
      </Badge>
    </Box>
  );
};
