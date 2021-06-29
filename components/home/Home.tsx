import { Flex } from "@chakra-ui/layout";

const Home: React.FC<{ blur: boolean }> = ({ blur, children }) => {
  return (
    <Flex
      direction="column"
      justifyContent={["space-between", "center"]}
      alignItems="center"
      minHeight="100vh"
      py={8}
      px={4}
      maxW={["100%", "930px"]}
      marginY="0"
      marginX="auto"
      sx={
        blur
          ? {
              filter: "blur(5px)",
              transition: "filter 0.5s ease-out 0.5s",
            }
          : { filter: "blur(0px)", transition: "filter" }
      }
    >
      {children}
    </Flex>
  );
};

export { Home };
