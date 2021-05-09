import { Box, Divider, Stack } from "@chakra-ui/layout";
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
import FeatureCarousel from "./FeatureCarousel";
import { useMediaQuery } from "@chakra-ui/media-query";

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

const containerVariantsLg = {
  hidden: {
    y: "100vh"
  },
  visible: {
    y: "5vh",
    transition: {
      type: "spring",
      mass: 0.3,
      damping: 10,
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

const containerVariantsSm = {
  hidden: {
    height: "0%"
  },
  visible: {
    height: "95%",
    transition: {
      type: "spring",
      mass: 0.3,
      damping: 10,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    height: "0%",
    transition: {
      type: "spring",
      mass: 0.3,
      damping: 8,
    }
  }
}

const Feature = ({project}: FeatureProps) => {
  const {showFeature, closeFeature, node} = useFeatureContext();
  const [isLargerThan930] = useMediaQuery("(min-width: 930px)");

  return (
    
      <AnimatePresence >
        { showFeature && (
          <>
            {/* Overlay */}
            <MotionBox 
              position="absolute" 
              top={0} 
              right={0} 
              bottom={0} 
              left={0} 
              bg="gray.400" 
              variants={overlayVariants} 
              initial="hidden" 
              animate="visible" 
              exit="hidden"  
            />

            {/* Container */}
            <MotionBox 
              position="fixed" 
              left={0} 
              right={0} 
              bottom={0} 
              maxWidth="930px" 
              marginY="0" 
              marginX="auto" 
              height="100vh" 
              variants={isLargerThan930 ? containerVariantsLg : containerVariantsSm} 
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
                
                <SimpleBar style={{ maxHeight: '100%' }}>
                  
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
                    onClick={closeFeature}  
                  />
                  
                    <FeatureHeader project={project} />

                    <Box py={4} px={[4, 9]}>
                      <Divider orientation="horizontal" />
                    </Box>

                    <Stack spacing={6} mb={12}>

                      <FeatureTech project={project} />

                      <FeatureCarousel media={project.featureMedia} />

                      <FeatureDescription project={project} />
                      
                      {project.url && (
                        <FeatureVisit url={project.url} />
                      )}

                    </Stack>
                    
                </SimpleBar>
              </Box>
            </MotionBox> 
          </>
        )}
      </AnimatePresence>

  )
}

export default Feature;
