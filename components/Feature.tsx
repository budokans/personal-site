import { Box } from "@chakra-ui/layout";
import { MotionBox } from "./MotionBox";

type FeatureProps = {
  project: number,
}

const containerVariants = {
  hidden: {
    y: "100vh"
  },
  visible: {
    y: "5vh",
    transition: {
      type: "spring",
      mass: 0.3,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    y: "100vh",
    transition: {
      type: "spring",
      mass: 0.3,
      damping: 8,
    }
  }
}

const Feature = ({project}: FeatureProps) => {
  return (
    <>
      <Box position="absolute" top={0} right={0} bottom={0} left={0} bg="gray.100" />

      <MotionBox position="fixed" left={0} right={0} bottom={0} maxWidth="930px" marginY="0" marginX="auto" zIndex={2} height="100vh" bg="white" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
        Something
      </MotionBox>
    </>
  )
}

export default Feature;
