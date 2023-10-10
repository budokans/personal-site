import { ReactElement } from "react";
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

export const renderItemBorder = (
  itemNumber: number,
  totalItemsCount: number,
  columnsCount: number
): boolean =>
  // Render border if
  // 1. There is only one row
  totalItemsCount <= columnsCount ||
  // 2. There are multiple rows and the item is not in the last
  itemNumber <=
    totalItemsCount + (totalItemsCount % columnsCount) - columnsCount;

export const Inner = ({
  idx,
  projectsCount,
  children,
}: PortfolioInnerProps & ChildrenProps): ReactElement => {
  const [is768OrLarger] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex
      position="relative"
      alignItems="center"
      borderBottom={
        renderItemBorder(idx + 1, projectsCount, is768OrLarger ? 2 : 1)
          ? "1px solid lightgrey"
          : ""
      }
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
