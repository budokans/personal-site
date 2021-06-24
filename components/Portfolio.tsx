import { SimpleGrid } from "@chakra-ui/layout";
import { ProjectDataProps } from "../interfaces";
import PortfolioItem from "./PortfolioItem";

const Portfolio: React.FC<ProjectDataProps> = ({ data }) => {
  return (
    <SimpleGrid
      columns={[1, 1, 2]}
      spacing={3}
      w={["full", "90%", "80%", "900px"]}
      mt={20}
      columnGap={10}
      rowGap={8}
    >
      {data.map((project, idx) => {
        return <PortfolioItem project={project} idx={idx} key={idx} />;
      })}
    </SimpleGrid>
  );
};

export default Portfolio;
