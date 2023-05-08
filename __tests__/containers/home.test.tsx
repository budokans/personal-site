import { render, screen } from "test-utils";
import { testProjects, testSiteMetadata } from "../testData";
import { HomeContainer } from "../../containers";

describe("<HomeContainer />", () => {
  test("Renders with populated data", () => {
    render(
      <HomeContainer
        metadata={testSiteMetadata}
        projects={testProjects}
        onPortfolioClick={jest.fn()}
        blur={false}
      />
    );

    expect(
      screen.getByText(
        /Hi, I'm Steve and I'm a full-stack developer who cares about scalability, performance, and intuitive UIs./
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Please use the links below to chat with me about how I can help build your project./
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Story Typer/)).toBeInTheDocument();
    expect(
      screen.getByText(
        /A race-the-clock, retro-themed speed-typing game for desktop browsers with context scraped daily from fiftywordstories.com/
      )
    ).toBeInTheDocument();
    expect(screen.getByAltText(/Story Typer/)).toBeInTheDocument();
    expect(screen.getByText(/stevenwebster.co/)).toBeInTheDocument();
    expect(
      screen.getByText(
        /You're here right now! My personal site with a perfect Google Lighthouse score!/
      )
    ).toBeInTheDocument();
    expect(screen.getByAltText(/stevenwebster.co/)).toBeInTheDocument();
  });
});
