import { render, screen, waitForElementToBeRemoved } from "test-utils";
import userEvent from "@testing-library/user-event";
import matchMediaPolyfill from "mq-polyfill";
import IndexPage from "../../pages";
import { testSiteMetadata } from "../testData";
import { projects } from "../../data/projectsData";

describe("./index", () => {
  beforeAll(() => {
    matchMediaPolyfill(window);
    window.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event("resize"));
    };
  });

  test("renders the <HomeContainer />", () => {
    render(<IndexPage metadata={testSiteMetadata} />);

    expect(
      screen.getByText(testSiteMetadata.location, { exact: false })
    ).toBeInTheDocument();
  });

  test("clicking a <Portfolio.Item /> renders the relevant <FeatureContainer />", async () => {
    render(<IndexPage metadata={testSiteMetadata} />);
    const project1 = projects[0];

    userEvent.click(screen.getByTestId(project1.id));
    const testElement1 = await screen.findByAltText(
      project1.featureMedia[0].alt
    );
    expect(testElement1).toBeInTheDocument();

    userEvent.click(screen.getByTestId("close-feature"));
    await waitForElementToBeRemoved(testElement1);
    expect(testElement1).not.toBeInTheDocument();

    const project2 = projects[2];

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
    window.resizeTo(930, 1000);

    render(<IndexPage metadata={testSiteMetadata} />);
    expect(screen.queryByText(/Click to copy!/i)).not.toBeInTheDocument();

    userEvent.hover(screen.getByTestId(/Tooltip/i));
    expect(await screen.findByText(/Click to copy!/i)).toBeInTheDocument();
  });
});
