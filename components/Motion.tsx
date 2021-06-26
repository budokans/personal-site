import { BoxProps, Box, StackProps, Stack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

export const MotionBox = motion<BoxProps>(Box);
export const MotionStack = motion<StackProps>(Stack);

export const AnimateContainer: React.FC = ({ children }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};
