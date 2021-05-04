import { SimpleGrid } from "@chakra-ui/layout"
import { ProjectDataProps, ProjectInterface } from "../interfaces"
import PortfolioItem from "./PortfolioItem"

const Portfolio = ({data}: ProjectDataProps) => {
  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={3} w="100%" mt={14} columnGap={10} rowGap={8}>
      {data.map((project: ProjectInterface, idx: number) => {
        return <PortfolioItem project={project} idx={idx} key={idx} />
      })}
    </SimpleGrid>
  )
}

export default Portfolio;