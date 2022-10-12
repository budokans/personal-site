import { ReactElement, useRef } from "react";
import { Box, Stack, CloseButton } from "@chakra-ui/react";
import { Variants } from "framer-motion";
import SimpleBar from "simplebar-react";
import { MotionBox } from "../Motion";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { ChildrenProps } from "interfaces";

interface CloseButtonProps {
  readonly onCloseClick: () => void;
}

interface FeatureContainerProps {
  readonly variants: Variants;
  readonly onCloseClick: () => void;
}

const Overlay = (): ReactElement => {
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

export const Feature = ({ children }: ChildrenProps): ReactElement => {
  return (
    <>
      <Overlay />
      {children}
    </>
  );
};

export const FeatureContainer = ({
  variants,
  onCloseClick,
  children,
}: FeatureContainerProps & ChildrenProps): ReactElement => {
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, onCloseClick);

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
        borderX="1px solid gray.300"
        borderTop="1px solid gray.300"
        borderTopRadius="xl"
        ref={node}
        data-testid="inside-click"
      >
        <SimpleBar style={{ maxHeight: "100%" }}>{children}</SimpleBar>
      </Box>
    </MotionBox>
  );
};

export const FeatureCloseButton = ({
  onCloseClick,
}: CloseButtonProps): ReactElement => {
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
      onClick={onCloseClick}
      data-testid="close-feature"
    />
  );
};

export const FeatureInner = ({ children }: ChildrenProps): ReactElement => {
  return (
    <Stack spacing={6} mb={20}>
      {children}
    </Stack>
  );
};
