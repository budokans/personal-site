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
import { ChildrenProps, ImageProps } from "../../interfaces";

interface PortfolioItemProps {
  readonly onPortfolioClick: () => void;
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
      mt={20}
      columnGap={10}
      rowGap={4}
    >
      {children}
    </SimpleGrid>
  );
};

export const PortfolioItem = ({
  onPortfolioClick,
  children,
}: PortfolioItemProps & ChildrenProps): ReactElement => {
  return (
    <Box
      role="button"
      position="relative"
      onClick={onPortfolioClick}
      data-testid="portfolio-item"
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
  const borderStyle = "1px solid lightgrey";

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
    // If the project is on the bottom row, don't render a bottom border
    if (projectNumber > projectsCount - bottomRowProjectsCount) {
      setRenderBottomBorder(false);
    } else {
      setRenderBottomBorder(true);
    }
  }, [columnsCount, bottomRowProjectsCount, projectNumber, projectsCount]);

  return (
    <Flex
      position="relative"
      alignItems="center"
      borderBottom={renderBottomBorder ? borderStyle : ""}
      paddingBottom={4}
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
    <Button rounded="xl" fontSize="sm" w={8} px={3} h={7} minW={16}>
      View
    </Button>
  );
};
