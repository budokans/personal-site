import { BoxProps, Box, StackProps, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionBox = motion<BoxProps>(Box);
export const MotionStack = motion<StackProps>(Stack);
