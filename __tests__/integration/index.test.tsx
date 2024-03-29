import userEvent from "@testing-library/user-event";
import {
  render,
  screen,
  setDeviceWidth,
  waitForElementToBeRemoved,
} from "test-utils";
import IndexPage from "pages";
import { projectsData, siteMetadata } from "data";

describe("./index", () => {
  setDeviceWidth(930);

  test("renders the <HomeContainer />", () => {
    render(<IndexPage />);

    expect(
      screen.getByText(siteMetadata.location, { exact: false })
    ).toBeInTheDocument();
  });

  test("clicking a <Portfolio.Item /> renders the relevant <FeatureContainer />", async () => {
    render(<IndexPage />);
    const project1 = projectsData[0];

    userEvent.click(screen.getByTestId(project1.id));
    const testElement1 = await screen.findByAltText(
      project1.featureMedia[0].alt
    );
    expect(testElement1).toBeInTheDocument();

    userEvent.click(screen.getByTestId("close-feature"));
    await waitForElementToBeRemoved(testElement1);
    expect(testElement1).not.toBeInTheDocument();

    const project2 = projectsData[1];

    userEvent.click(screen.getByTestId(project2.id));
    const testElement2 = await screen.findByAltText(
      project2.featureMedia[0].alt
    );
    expect(testElement2).toBeInTheDocument();

    userEvent.click(screen.getByTestId("close-feature"));
    await waitForElementToBeRemoved(testElement2);
    expect(testElement2).not.toBeInTheDocument();
  });

  test("<Portfolio.TooltipBtn /> renders the correct text", async () => {
    render(<IndexPage />);
    expect(screen.queryByText(/Click to copy!/i)).not.toBeInTheDocument();

    userEvent.hover(screen.getByTestId(/Tooltip/i));
    expect(await screen.findByText(/Click to copy!/i)).toBeInTheDocument();
  });
});
