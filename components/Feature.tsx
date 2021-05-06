import { Box } from "@chakra-ui/layout";
import { MotionBox } from "./MotionBox";
import SimpleBar from 'simplebar-react';
import { CloseButton } from "@chakra-ui/close-button";
import { useFeatureContext } from "../lib/featureContext";
import { AnimatePresence } from "framer-motion";

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
      duration: 5
    }
  }
}

const Feature = () => {
  const {projectToFeature, showFeature, closeFeature} = useFeatureContext();

  return (
    <AnimatePresence>
      { showFeature && (
        <>
          <Box position="absolute" top={0} right={0} bottom={0} left={0} bg="gray.100" />
      
          <MotionBox position="fixed" left={0} right={0} bottom={0} maxWidth="930px" marginY="0" marginX="auto" height="100vh"  variants={containerVariants} initial="hidden" animate="visible" exit="exit">
            
            <Box height="full" bg="white" borderWidth="1px" borderColor="gray.300" borderStyle="solid" borderRadius="xl">
              
              <SimpleBar style={{ maxHeight: '100%' }}>
                <CloseButton size="md" fontSize="16px" borderRadius="full" color="gray.900" bg="gray.100" p={0} top="10px" right="10px" onClick={closeFeature}  />
              </SimpleBar>
            </Box>
          </MotionBox> 
        </>
      )}
    </AnimatePresence>
  )
}

export default Feature;
