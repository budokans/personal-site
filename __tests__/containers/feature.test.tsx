import { ReactElement } from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "test-utils";
import { FeatureContainer } from "../../containers";
import { Project } from "types";

const project: Project = {
  title: "Gretsch Geeks",
  shortBlurb:
    "An example E-commerce buy-sell platform built with modern React, Apollo 3 and Keystone.js as a headless CMS.",
  icon: "/images/gretsch-logo.jpg",
  tech: ["React", "Next.js", "styled-components"],
  featureMedia: [
    {
      path: "/images/gretsch-geeks-store-screenshot.png",
      bg: "#ff0000",
      alt: "Gretsch Geeks Store Screenshot",
    },
    {
      path: "/images/gretsch-geeks-cart-open-screenshot.png",
      bg: "#393939",
      alt: "Gretsch Geeks with Cart Open Screenshot",
    },
  ],
  description: function testDescription(): ReactElement {
    return <>Test description</>;
  },
  links: [
    { type: "Visit", url: "https://gretsch.stevenwebster.co" },
    { type: "GitHub", url: "https://github.com/budokans/gretsch-geeks" },
  ],
};

describe("<FeatureContainer", () => {
  test("renders with populated data", () => {
    const closeFeature = jest.fn();
    render(<FeatureContainer project={project} onCloseClick={closeFeature} />);

    expect(screen.getByText(/Gretsch Geeks/i)).toBeInTheDocument();
    expect(screen.getByText(/An example E-commerce/i)).toBeInTheDocument();

    expect(screen.getByAltText(/Icon/i)).toBeInTheDocument();

    expect(screen.getByAltText(/Store/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Cart Open/i)).toBeInTheDocument();

    expect(screen.getByText(/Next.js/i)).toBeInTheDocument();
    expect(screen.getByText(/styled-components/i)).toBeInTheDocument();

    expect(screen.getByText(/Test description/i)).toBeInTheDocument();

    expect(screen.getByText(/Visit/i)).toBeInTheDocument();
    expect(screen.getByText(/GitHub/i)).toBeInTheDocument();
  });

  test("closeFeature is not called when clicking inside of the FeatureContainer", () => {
    const closeFeature = jest.fn();
    render(<FeatureContainer project={project} onCloseClick={closeFeature} />);

    userEvent.click(screen.getByTestId("inside-click"));
    expect(closeFeature).not.toHaveBeenCalled();
  });

  test("closeFeature is called when Close button is clicked", () => {
    const closeFeature = jest.fn();
    render(<FeatureContainer project={project} onCloseClick={closeFeature} />);

    userEvent.click(screen.getByTestId("close-feature"));
    expect(closeFeature).toHaveBeenCalledTimes(1);
  });

  test("closeFeature is called when clicking the outside of the <Feature.Container />", () => {
    const closeFeature = jest.fn();
    const { container } = render(
      <FeatureContainer project={project} onCloseClick={closeFeature} />
    );

    userEvent.click(container);
    expect(closeFeature).toHaveBeenCalledTimes(1);
  });
});
