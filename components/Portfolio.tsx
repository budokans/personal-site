import { SimpleGrid } from "@chakra-ui/layout"
import { ProjectInterface } from "../interfaces"
import projectsData from "../projectsData.json"
import PortfolioItem from "./PortfolioItem"

const Portfolio = () => {
  return (
    <SimpleGrid columns={[1, 1, 2]} spacing="40px">
      {projectsData.map((project: ProjectInterface, idx: number) => {
        <PortfolioItem project={project} key={idx} />
      })}
    </SimpleGrid>
  )
}

export default Portfolio;