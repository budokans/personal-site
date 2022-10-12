import { Flex } from "@chakra-ui/react";
import { ChildrenProps } from "interfaces";
import { ReactElement } from "react";

interface HomeProps {
  readonly blur: boolean;
}

export const Home = ({
  blur,
  children,
}: HomeProps & ChildrenProps): ReactElement => {
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
