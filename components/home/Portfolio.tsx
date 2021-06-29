import { SimpleGrid } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { useEffect, useState } from "react";
import { ImageProps } from "../../interfaces";

interface PortFolioItemProps {
  onPortfolioClick: () => void;
}

interface Compound {
  Item: React.FC<PortFolioItemProps>;
  Image: React.FC<ImageProps>;
  Inner: React.FC<{ idx: number }>;
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

Portfolio.Inner = ({ idx, children }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [afterStyle, setAfterStyle] = useState({});

  useEffect(() => {
    if (isLargerThan768 && idx > 1) {
      setAfterStyle({});
    } else if (idx > 2) {
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
