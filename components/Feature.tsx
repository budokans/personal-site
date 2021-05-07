import { Box, Divider } from "@chakra-ui/layout";
import { MotionBox } from "./MotionBox";
import SimpleBar from 'simplebar-react';
import { CloseButton } from "@chakra-ui/close-button";
import { useFeatureContext } from "../lib/featureContext";
import { AnimatePresence } from "framer-motion";
import { ProjectInterface } from "../interfaces";
import FeatureHeader from "./FeatureHeader";
import FeatureTech from "./FeatureTech";
import FeatureDescription from "./FeatureDescription";
import FeatureVisit from "./FeatureVisit";

type FeatureProps = {
  project: ProjectInterface
}

const overlayVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.2,
  },
  exit: {
    opacity: 0,
  }
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
  const {showFeature, closeFeature} = useFeatureContext();

  return (
    <AnimatePresence>
      { showFeature && (
        <>
          <MotionBox position="absolute" top={0} right={0} bottom={0} left={0} bg="gray.100" variants={overlayVariants} initial="hidden" animate="visible" exit="hidden" />
      
          <MotionBox position="fixed" left={0} right={0} bottom={0} maxWidth="930px" marginY="0" marginX="auto" height="100vh"  variants={containerVariants} initial="hidden" animate="visible" exit="exit">
            
            <Box height="full" bg="white" borderWidth="1px" borderColor="gray.300" borderStyle="solid" borderRadius="xl">
              
              <SimpleBar style={{ maxHeight: '100%' }}>
                <CloseButton w="28px" h="28px" fontSize="14px" borderRadius="full" color="gray.900" bg="gray.100" p={0} position="absolute" top="10px" right="10px" onClick={closeFeature}  />
                
                  <FeatureHeader project={project} />

                  <Box paddingTop={4} paddingBottom={4}>
                    <Divider orientation="horizontal" />
                  </Box>

                  <FeatureTech project={project} />

                  <FeatureDescription project={project} />
                  
                  {project.url && (
                    <FeatureVisit url={project.url} />
                  )}
                  
              </SimpleBar>
            </Box>
          </MotionBox> 
        </>
      )}
    </AnimatePresence>
  )
}

export default Feature;
