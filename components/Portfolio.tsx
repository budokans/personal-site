import { SimpleGrid } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { useEffect, useState } from "react";
import { useFeatureContext } from "../lib/featureContext";

interface PortFolioItemProps {
  idx: number;
}

interface PortfolioImageProps {
  src: string;
  alt: string;
}

const Portfolio: React.FC = ({ children }) => {
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

const PortfolioItem: React.FC<PortFolioItemProps> = ({ idx, children }) => {
  const { openFeature } = useFeatureContext();

  const handleClick = () => {
    openFeature(idx);
  };

  return (
    <Box role="button" position="relative" onClick={handleClick}>
      <Flex role="group" direction="row">
        {children}
      </Flex>
    </Box>
  );
};

const PortfolioItemImage: React.FC<PortfolioImageProps> = ({ src, alt }) => {
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

const PortfolioItemInner: React.FC<PortFolioItemProps> = ({
  idx,
  children,
}) => {
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
      <PortfolioViewButton />
    </Flex>
  );
};

const PortfolioItemTitle: React.FC = ({ children }) => {
  return (
    <Heading as="h3" fontSize="md" fontWeight="normal" lineHeight="tall">
      {children}
    </Heading>
  );
};

const PortfolioItemText: React.FC = ({ children }) => {
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

const PortfolioViewButton: React.FC = () => {
  return (
    <Button rounded="xl" fontSize="sm" w={8} px={3} h={7} minW={16}>
      View
    </Button>
  );
};

export {
  Portfolio,
  PortfolioItem,
  PortfolioItemImage,
  PortfolioItemInner,
  PortfolioItemTitle,
  PortfolioItemText,
};
