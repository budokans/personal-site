import { useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MetadataInterface, ProjectInterface } from "../interfaces";
import { Home } from "../components/home/Home";
import { Header } from "../components/home/Header";
import {
  Portfolio,
  PortfolioItem,
  PortfolioItemImage,
  PortfolioItemInner,
  PortfolioItemTitle,
  PortfolioItemText,
} from "../components/home/Portfolio";

interface HomeContainerProps {
  projects: ProjectInterface[];
  metadata: MetadataInterface;
  onPortfolioClick: (id: number) => void;
  blur: boolean;
}

export const HomeContainer: React.FC<HomeContainerProps> = ({
  projects,
  metadata,
  onPortfolioClick,
  blur,
}) => {
  const [isLargerThan930] = useMediaQuery("(min-width: 930px)");
  const [isLargeDevice, setIsLargeDevice] = useState(false);

  useEffect(() => {
    isLargerThan930 ? setIsLargeDevice(true) : setIsLargeDevice(false);
  }, [isLargerThan930]);

  return (
    <Home blur={blur}>
      <Header>
        <Header.Text>{metadata.description}</Header.Text>
        <Header.Links>
          {isLargeDevice ? (
            <Header.Tooltip href={metadata.contact.email}>Email</Header.Tooltip>
          ) : (
            <Header.Link href={`mailto:${metadata.contact.email}`}>
              Email
            </Header.Link>
          )}

          <Header.Link href={metadata.contact.github}>Github</Header.Link>

          <Header.Link href={metadata.contact.linkedIn}>LinkedIn</Header.Link>
        </Header.Links>
      </Header>

      <Portfolio>
        {projects.map((project, idx) => {
          return (
            <PortfolioItem
              onPortfolioClick={onPortfolioClick}
              idx={idx}
              key={idx}
            >
              <PortfolioItemImage src={project.icon} alt={project.title} />
              <PortfolioItemInner idx={idx}>
                <PortfolioItemTitle>{project.title}</PortfolioItemTitle>
                <PortfolioItemText>{project.shortBlurb}</PortfolioItemText>
              </PortfolioItemInner>
            </PortfolioItem>
          );
        })}
      </Portfolio>
    </Home>
  );
};
