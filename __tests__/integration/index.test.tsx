import { render, screen, waitFor } from "test-utils";
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
      screen.getByText(/Steven Webster is a full-stack/i)
    ).toBeInTheDocument();
  });

  test("clicking a <Portfolio.Item /> renders the relevant <FeatureContainer />", async () => {
    render(<IndexPage metadata={testSiteMetadata} projects={testProjects} />);

    userEvent.click(screen.getByText(/Story Typer/i));
    expect(
      screen.getByText(testProjects[0].description[3])
    ).toBeInTheDocument();

    userEvent.click(screen.getByTestId("close-feature"));
    await waitFor(() =>
      expect(
        screen.queryByText(testProjects[0].description[3])
      ).not.toBeInTheDocument()
    );

    userEvent.click(screen.getByText(/stevenwebster.co/i));
    expect(
      screen.getByText(testProjects[1].description[3])
    ).toBeInTheDocument();

    userEvent.click(screen.getByTestId("close-feature"));
    await waitFor(() =>
      expect(
        screen.queryByText(testProjects[1].description[3])
      ).not.toBeInTheDocument()
    );
  });

  test("<Portfolio.TooltipBtn /> renders the correct text", async () => {
    window.resizeTo(930, 1000);

    render(<IndexPage metadata={testSiteMetadata} projects={testProjects} />);
    expect(screen.queryByText(/Click to copy!/i)).not.toBeInTheDocument();

    userEvent.hover(screen.getByTestId(/Tooltip/i));
    await waitFor(() =>
      expect(screen.getByText(/Click to copy!/i)).toBeInTheDocument()
    );
  });
});
