import { SimpleGrid } from "@chakra-ui/layout"
// import { ProjectInterface } from "../interfaces"
// import PortfolioItem from "./PortfolioItem"

const Portfolio = ({data}) => {
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