import { useEffect, useState } from "react";
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
import { ImageProps } from "../../interfaces";
import { getBottomRowCount } from "../../lib/getBottomRowCount";

interface PortFolioItemProps {
  onPortfolioClick: () => void;
}

interface Compound {
  Item: React.FC<PortFolioItemProps>;
  Image: React.FC<ImageProps>;
  Inner: React.FC<{ idx: number; projectsCount: number }>;
  Title: React.FC;
  Text: React.FC;
  Button: React.FC;
}

type PortfolioCC = Compound & React.FC;

export const Portfolio: PortfolioCC = ({ children }) => {
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

Portfolio.Item = ({ onPortfolioClick, children }) => {
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

Portfolio.Image = ({ src, alt }) => {
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

Portfolio.Inner = ({ idx, projectsCount, children }) => {
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

  const bottomRowCount = getBottomRowCount(projectsCount, columnsCount);

  useEffect(() => {
    if (projectNumber <= columnsCount) {
      setRenderBottomBorder(true);
    } else if (projectNumber > projectsCount - bottomRowCount) {
      setRenderBottomBorder(false);
    } else {
      setRenderBottomBorder(true);
    }
  }, [columnsCount]);

  return (
    <Flex
      position="relative"
      alignItems="center"
      borderBottom={renderBottomBorder ? borderStyle : ""}
      paddingBottom={4}
    >
      <Box mr={4}>{children}</Box>
      <Portfolio.Button />
    </Flex>
  );
};

Portfolio.Title = ({ children }) => {
  return (
    <Heading as="h3" fontSize="md" fontWeight="normal" lineHeight="tall">
      {children}
    </Heading>
  );
};

Portfolio.Text = ({ children }) => {
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

Portfolio.Button = () => {
  return (
    <Button rounded="xl" fontSize="sm" w={8} px={3} h={7} minW={16}>
      View
    </Button>
  );
};
