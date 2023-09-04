import { render, screen, waitForElementToBeRemoved } from "test-utils";
import userEvent from "@testing-library/user-event";
import matchMediaPolyfill from "mq-polyfill";
import IndexPage from "../../pages";
import { testProjects, testSiteMetadata } from "../testData";

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
    render(<IndexPage metadata={testSiteMetadata} projects={testProjects} />);

    expect(
      screen.getByText(
        /Hi, I'm Steve and I'm a full-stack developer who cares about scalability, performance, and intuitive UIs./i
      )
    ).toBeInTheDocument();
  });

  test("clicking a <Portfolio.Item /> renders the relevant <FeatureContainer />", async () => {
    render(<IndexPage metadata={testSiteMetadata} projects={testProjects} />);

    userEvent.click(screen.getByText(/Story Typer/i));
    const testElement1 = await screen.findByText(
      testProjects[0].description[3]
    );
    expect(testElement1).toBeInTheDocument();

    userEvent.click(screen.getByTestId("close-feature"));
    await waitForElementToBeRemoved(testElement1);
    expect(testElement1).not.toBeInTheDocument();

    userEvent.click(screen.getByText(/stevenwebster.co/i));
    const testElement2 = await screen.findByText(
      testProjects[1].description[3]
    );
    expect(testElement2).toBeInTheDocument();

    userEvent.click(screen.getByTestId("close-feature"));
    await waitForElementToBeRemoved(testElement2);
    expect(testElement2).not.toBeInTheDocument();
  });

  test("<Portfolio.TooltipBtn /> renders the correct text", async () => {
    window.resizeTo(930, 1000);

    render(<IndexPage metadata={testSiteMetadata} projects={testProjects} />);
    expect(screen.queryByText(/Click to copy!/i)).not.toBeInTheDocument();

    userEvent.hover(screen.getByTestId(/Tooltip/i));
    expect(await screen.findByText(/Click to copy!/i)).toBeInTheDocument();
  });
});
