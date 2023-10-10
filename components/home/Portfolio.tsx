import { ReactElement, useEffect, useState } from "react";
import {
  Img,
  SimpleGrid,
  Box,
  Flex,
  Heading,
  Text as ChakraText,
  Button as ChakraButton,
  useMediaQuery,
} from "@chakra-ui/react";
import { ChildrenProps, ImageProps } from "types";

interface PortfolioInnerProps {
  readonly idx: number;
  readonly projectsCount: number;
}

export const Portfolio = ({ children }: ChildrenProps): ReactElement => (
  <SimpleGrid
    columns={[1, 1, 2]}
    w={["full", "90%", "80%", "900px"]}
    mt={[4, 0]}
    columnGap={10}
    rowGap={4}
    as="main"
  >
    {children}
  </SimpleGrid>
);

interface ItemProps {
  readonly id: string;
  readonly onPortfolioClick: (id: string) => void;
}

export const Item = ({
  id,
  onPortfolioClick,
  children,
}: ItemProps & ChildrenProps): ReactElement => (
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

export const Image = ({ src, alt }: ImageProps): ReactElement => (
  <Img
    src={src}
    alt={`${alt} icon`}
    boxSize="64px"
    objectFit="cover"
    rounded="xl"
    mr={[3, 4]}
  />
);

export const bottomRowItemsCount = (
  itemsCount: number,
  columnsCount: number
): number => itemsCount % columnsCount || columnsCount;

export const Inner = ({
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
      <Button />
    </Flex>
  );
};

export const Title = ({ children }: ChildrenProps): ReactElement => (
  <Heading as="h3" fontSize="md" fontWeight="normal" lineHeight="tall">
    {children}
  </Heading>
);

export const Text = ({ children }: ChildrenProps): ReactElement => (
  <ChakraText
    fontSize="clamp(12px, 10.8px + 0.25vw, 14px)"
    color="#595959"
    noOfLines={2}
  >
    {children}
  </ChakraText>
);

export const Button = (): ReactElement => (
  <ChakraButton
    rounded="xl"
    fontSize="sm"
    w={8}
    px={3}
    h={7}
    minW={16}
    ml="auto"
  >
    View
  </ChakraButton>
);
