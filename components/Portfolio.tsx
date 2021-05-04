import { SimpleGrid } from "@chakra-ui/layout"
import { ProjectDataProps } from "../interfaces"
// import PortfolioItem from "./PortfolioItem"

const Portfolio = ({data}: ProjectDataProps) => {
  console.log(data)
  
  return (
    <SimpleGrid columns={[1, 1, 2]} spacing="40px">
      {/* {projectsData.map((project: ProjectInterface, idx: number) => {
        <PortfolioItem project={project} key={idx} />
      })} */}
      something

    </SimpleGrid>
  )
}

export default Portfolio;