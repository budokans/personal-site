import { SimpleGrid } from "@chakra-ui/layout"
import { ProjectDataProps, ProjectInterface } from "../interfaces"
// import PortfolioItem from "./PortfolioItem"

const Portfolio = ({data}: ProjectDataProps) => {

  return (
    <SimpleGrid columns={[1, 1, 2]} spacing="40px">
      {/* {data.map((project: ProjectInterface, idx: number) => {
        return <PortfolioItem project={project} key={idx} />
      })} */}
      Test
    </SimpleGrid>
  )
}

export default Portfolio;