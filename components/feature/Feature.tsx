import { ReactElement, useRef } from "react";
import { Box, Stack, CloseButton } from "@chakra-ui/react";
import { Variants } from "framer-motion";
import SimpleBar from "simplebar-react";
import { MotionBox } from "../Motion";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { ChildrenProps } from "types";

interface CloseButtonProps {
  readonly onCloseClick: () => void;
}

interface FeatureContainerProps {
  readonly variants: Variants;
  readonly onCloseClick: () => void;
}

export const Overlay = (): ReactElement => {
  return (
    <Box
      position="absolute"
      top={0}
      right={0}
      bottom={0}
      left={0}
      bg="blackAlpha.200"
      zIndex={-1}
    />
  );
};

export const Feature = ({
  variants,
  onCloseClick,
  children,
}: FeatureContainerProps & ChildrenProps): ReactElement => {
  const node = useRef<HTMLDivElement>(null);
  const borderStyle = "1px solid";
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
      bg="white"
      borderX={borderStyle}
      borderTop={borderStyle}
      borderTopRadius="xl"
      borderColor="gray.300"
      ref={node}
      data-testid="inside-click"
    >
      <SimpleBar style={{ maxHeight: "100%" }}>{children}</SimpleBar>
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
