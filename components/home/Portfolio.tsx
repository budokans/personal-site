import { useEffect, useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { SimpleGrid, Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { ImageProps } from "../../interfaces";

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
      spacing={3}
      w={["full", "90%", "80%", "900px"]}
      mt={20}
      columnGap={10}
      rowGap={8}
    >
      {children}
    </SimpleGrid>
  );
};

Portfolio.Item = ({ onPortfolioClick, children }) => {
  return (
    <Box role="button" position="relative" onClick={onPortfolioClick}>
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
      w="64px"
      h="64px"
      objectFit="cover"
      rounded="xl"
      mr={[3, 4]}
    />
  );
};

Portfolio.Inner = ({ idx, projectsCount, children }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [afterStyle, setAfterStyle] = useState({});
  const projectNumber = idx + 1;
  const isPenultimateProject = !!(projectsCount - projectNumber === 1);
  const isLastProject = !!(projectsCount - projectNumber === 0);

  useEffect(() => {
    // On large viewports, render a bottom border if the portfolio item is on the bottom row, except in the case where there are 2 or fewer projects; in that case, render the bottom border for those 1-2 projects.
    if (
      isLargerThan768 &&
      isPenultimateProject &&
      projectsCount % 2 === 0 &&
      projectsCount > 2
    ) {
      setAfterStyle({});
    } else if (isLastProject && projectsCount > 2) {
      setAfterStyle({});
    } else {
      setAfterStyle({
        background: "gray.300",
        position: "absolute",
        content: `""`,
        bottom: "-17px",
        width: "100%",
        height: "1px",
        display: "block",
      });
    }
  }, [isLargerThan768]);

  return (
    <Flex position="relative" alignItems="center" _after={afterStyle}>
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
