import { ReactElement, useEffect, useState } from "react";
import {
  Img,
  SimpleGrid,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { ChildrenProps, ImageProps } from "../../types";

interface PortfolioItemProps {
  readonly id: string;
  readonly onPortfolioClick: (id: string) => void;
}

interface PortfolioInnerProps {
  readonly idx: number;
  readonly projectsCount: number;
}

export const Portfolio = ({ children }: ChildrenProps): ReactElement => {
  return (
    <SimpleGrid
      columns={[1, 1, 2]}
      w={["full", "90%", "80%", "900px"]}
      mt={[4, 0]}
      columnGap={10}
      rowGap={4}
    >
      {children}
    </SimpleGrid>
  );
};

export const PortfolioItem = ({
  id,
  onPortfolioClick,
  children,
}: PortfolioItemProps & ChildrenProps): ReactElement => {
  return (
    <Box
      role="button"
      position="relative"
      onClick={() => onPortfolioClick(id)}
      data-testid={id}
    >
      <Flex role="group" direction="row">
        {children}
      </Flex>
    </Box>
  );
};

export const PortfolioImage = ({ src, alt }: ImageProps): ReactElement => {
  return (
    <Img
      src={src}
      alt={`${alt} icon`}
      boxSize="64px"
      objectFit="cover"
      rounded="xl"
      mr={[3, 4]}
    />
  );
};

export const bottomRowItemsCount = (
  itemsCount: number,
  columnsCount: number
): number => itemsCount % columnsCount || columnsCount;

export const PortfolioInner = ({
  idx,
  projectsCount,
  children,
}: PortfolioInnerProps & ChildrenProps): ReactElement => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [columnsCount, setColumnCount] = useState(1);
  const [renderBottomBorder, setRenderBottomBorder] = useState(true);
  const projectNumber = idx + 1;

  useEffect(() => {
    if (isLargerThan768) {
      setColumnCount(2);
    } else {
      setColumnCount(1);
    }
  }, [isLargerThan768]);

  const bottomRowProjectsCount = bottomRowItemsCount(
    projectsCount,
    columnsCount
  );

  useEffect(() => {
    // If there is only a single row, render a bottom border
    if (projectNumber <= columnsCount) {
      setRenderBottomBorder(true);
    }
    // If there are multiple rows, don't render a border if the project
    // is on the bottom row
    else if (projectNumber > projectsCount - bottomRowProjectsCount) {
      setRenderBottomBorder(false);
    } else {
      setRenderBottomBorder(true);
    }
  }, [columnsCount, bottomRowProjectsCount, projectNumber, projectsCount]);

  return (
    <Flex
      position="relative"
      alignItems="center"
      borderBottom={renderBottomBorder ? "1px solid lightgrey" : ""}
      paddingBottom={4}
      w="100%"
    >
      <Box mr={4}>{children}</Box>
      <PortfolioButton />
    </Flex>
  );
};

export const PortfolioTitle = ({ children }: ChildrenProps): ReactElement => {
  return (
    <Heading as="h3" fontSize="md" fontWeight="normal" lineHeight="tall">
      {children}
    </Heading>
  );
};

export const PortfolioText = ({ children }: ChildrenProps): ReactElement => {
  return (
    <Text
      fontSize="clamp(12px, 10.8px + 0.25vw, 14px)"
      color="#595959"
      noOfLines={2}
    >
      {children}
    </Text>
  );
};

export const PortfolioButton = (): ReactElement => {
  return (
    <Button rounded="xl" fontSize="sm" w={8} px={3} h={7} minW={16} ml="auto">
      View
    </Button>
  );
};
