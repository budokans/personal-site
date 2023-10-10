import { render, screen } from "test-utils";
import { testProjects, testSiteMetadata } from "../testData";
import { HomeContainer } from "containers";

describe("<HomeContainer />", () => {
  test("Renders with populated data", () => {
    render(
      <HomeContainer
        metadata={testSiteMetadata}
        projects={testProjects}
        onPortfolioClick={jest.fn()}
      />
    );

    const testProject1 = testProjects[0];
    expect(screen.getByText(testProject1.title)).toBeInTheDocument();
    expect(screen.getByText(testProject1.shortBlurb)).toBeInTheDocument();
    // Icon
    expect(
      screen.getByAltText(testProject1.title, { exact: false })
    ).toBeInTheDocument();

    const testProject2 = testProjects[1];
    expect(screen.getByText(testProject2.title)).toBeInTheDocument();
    expect(screen.getByText(testProject2.shortBlurb)).toBeInTheDocument();
    // Icon
    expect(
      screen.getByAltText(testProject2.title, { exact: false })
    ).toBeInTheDocument();
  });
});
