import { Img } from "@chakra-ui/image";
import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import { ProjectInterface } from "../interfaces";

interface FeatureHeaderProps {
  project: ProjectInterface;
}

const FeatureHeader: React.FC<FeatureHeaderProps> = ({ project }) => {
  return (
    <Stack
      display="flex"
      direction="row"
      alignItems="center"
      paddingTop={[4, 9]}
      px={[4, 9]}
      spacing={4}
    >
      <Img
        src={project.icon}
        alt={`${project.title} Icon`}
        borderRadius="xl"
        width={["65px", "90px"]}
        height={["65px", "90px"]}
      />

      <Box maxW="350px">
        <Heading as="h2" fontSize="2xl" fontWeight={600} mb={[0, 0, 1]}>
          {project.title}
        </Heading>

        <Text color="gray.500" fontSize="clamp(12px, 10.8px + 0.25vw, 14px)">
          {project.shortBlurb}
        </Text>
      </Box>
    </Stack>
  );
};

export default FeatureHeader;
