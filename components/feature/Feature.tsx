import { Box, Stack } from "@chakra-ui/layout";
import SimpleBar from "simplebar-react";
import { CloseButton } from "@chakra-ui/close-button";
import { Variants } from "framer-motion";
import { MotionBox } from "../Motion";
import { RefObject } from "react";

interface CloseButtonProps {
  onClick(): void;
}

interface ContainerProps {
  node: RefObject<HTMLDivElement>;
  variants: Variants;
}

interface Compound {
  CloseButton: React.FC<CloseButtonProps>;
  Container: React.FC<ContainerProps>;
  Inner: React.FC;
}

type FeatureCC = React.FC & Compound;

export const Feature: FeatureCC = ({ children }) => {
  return (
    <>
      <Overlay />
      {children}
    </>
  );
};

Feature.CloseButton = ({ onClick }) => {
  return (
    <CloseButton
      w={["28px", "34px"]}
      h={["28px", "34px"]}
      fontSize="14px"
      borderRadius="full"
      color="gray.900"
      bg="gray.100"
      p={0}
      position="absolute"
      top={["10px", "30px"]}
      right={["10px", "30px"]}
      onClick={onClick}
    />
  );
};

Feature.Inner = ({ children }) => {
  return (
    <Stack spacing={6} mb={20}>
      {children}
    </Stack>
  );
};

Feature.Container = ({ variants, node, children }) => {
  return (
    <MotionBox
      position="fixed"
      left={0}
      right={0}
      bottom={0}
      maxWidth="930px"
      marginY="0"
      marginX="auto"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Box
        height="full"
        bg="white"
        borderWidth="1px"
        borderColor="gray.300"
        borderStyle="solid"
        borderRadius="xl"
        ref={node}
      >
        <SimpleBar style={{ maxHeight: "100%" }}>{children}</SimpleBar>
      </Box>
    </MotionBox>
  );
};

const Overlay: React.FC = () => {
  return (
    <MotionBox
      position="absolute"
      top={0}
      right={0}
      bottom={0}
      left={0}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
      bg="blackAlpha.600"
    />
  );
};
