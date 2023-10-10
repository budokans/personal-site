import userEvent from "@testing-library/user-event";
import { render, screen } from "test-utils";
import { testProjects } from "../testData";
import { FeatureContainer } from "containers";

describe("<FeatureContainer", () => {
  test("renders with populated data", () => {
    const testProject = testProjects[0];
    const closeFeature = jest.fn();
    render(
      <FeatureContainer project={testProjects[0]} onCloseClick={closeFeature} />
    );

    expect(screen.getByText(testProject.title)).toBeInTheDocument();
    expect(screen.getByText(testProject.shortBlurb)).toBeInTheDocument();

    // Alt text is determined by the HeaderImage component but always includes "Icon"
    expect(screen.getByAltText(/Icon/i)).toBeInTheDocument();

    testProject.featureMedia.forEach((mediaItem) =>
      expect(screen.getByAltText(mediaItem.alt)).toBeInTheDocument()
    );

    testProject.tech.forEach((techItem) =>
      expect(screen.getByText(techItem)).toBeInTheDocument()
    );

    expect(screen.getByText(/Test description/i)).toBeInTheDocument();

    testProject.links.forEach((link) =>
      expect(screen.getByText(link.type)).toBeInTheDocument()
    );
  });

  test("closeFeature is not called when clicking inside of the FeatureContainer", () => {
    const closeFeature = jest.fn();
    render(
      <FeatureContainer project={testProjects[0]} onCloseClick={closeFeature} />
    );

    userEvent.click(screen.getByTestId("inside-click"));
    expect(closeFeature).not.toHaveBeenCalled();
  });

  test("closeFeature is called when Close button is clicked", () => {
    const closeFeature = jest.fn();
    render(
      <FeatureContainer project={testProjects[0]} onCloseClick={closeFeature} />
    );

    userEvent.click(screen.getByTestId("close-feature"));
    expect(closeFeature).toHaveBeenCalledTimes(1);
  });

  test("closeFeature is called when clicking the outside of the <Feature.Container />", () => {
    const closeFeature = jest.fn();
    const { container } = render(
      <FeatureContainer project={testProjects[0]} onCloseClick={closeFeature} />
    );

    userEvent.click(container);
    expect(closeFeature).toHaveBeenCalledTimes(1);
  });
});
