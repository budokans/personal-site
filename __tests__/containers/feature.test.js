import { render } from "test-utils";
import { FeatureContainer } from "../../containers/feature";
import userEvent from "@testing-library/user-event";

const project = {
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
  description: [
    "The foundations of the project were laid while completing Wes Bos's huge <a href='https://advancedreact.com/' rel='noreferrer noopener' target='_blank' style='font-weight: 500'>Advanced React with GraphQL</a> course, but the final result was buggy and impossible to deploy in its finished state.",
    "To fix this, I added much more robust error-handling throughout the application, rebuilt the app with the latest version of Keystone JS, rebuilt the database in postgreSQL as Keystone had now dropped support for Mongoose and moved to Prisma, and successfully deployed to Heroku.",
  ],
  links: [
    { type: "Visit", url: "https://gretsch.stevenwebster.co" },
    { type: "GitHub", url: "https://github.com/budokans/gretsch-geeks" },
  ],
};

describe("<FeatureContainer", () => {
  test("renders with populated data", () => {
    const closeFeature = jest.fn();
    const { getByText, getByAltText } = render(
      <FeatureContainer project={project} onCloseClick={closeFeature} />
    );

    expect(getByText(/Gretsch Geeks/i)).toBeInTheDocument();
    expect(getByText(/An example E-commerce/i)).toBeInTheDocument();

    expect(getByAltText(/Icon/i)).toBeInTheDocument();

    expect(getByAltText(/Store/i)).toBeInTheDocument();
    expect(getByAltText(/Cart Open/i)).toBeInTheDocument();

    expect(getByText(/Next.js/i)).toBeInTheDocument();
    expect(getByText(/styled-components/i)).toBeInTheDocument();

    expect(getByText(/The foundations of the/i)).toBeInTheDocument();
    expect(getByText(/To fix this, I added/i)).toBeInTheDocument();

    expect(getByText(/Visit/i)).toBeInTheDocument();
    expect(getByText(/GitHub/i)).toBeInTheDocument();
  });

  test("closeFeature is not called when clicking inside of the FeatureContainer", () => {
    const closeFeature = jest.fn();
    const { getByTestId } = render(
      <FeatureContainer project={project} onCloseClick={closeFeature} />
    );

    userEvent.click(getByTestId("inside-click"));
    expect(closeFeature).not.toHaveBeenCalled();
  });

  test("closeFeature is called when Close button is clicked", () => {
    const closeFeature = jest.fn();
    const { getByTestId } = render(
      <FeatureContainer project={project} onCloseClick={closeFeature} />
    );

    userEvent.click(getByTestId("close-feature"));
    expect(closeFeature).toHaveBeenCalledTimes(1);
  });

  test("closeFeature is called when clicking the outside of the <Feature.Container />", () => {
    const closeFeature = jest.fn();
    const { container } = render(
      <FeatureContainer project={project} onCloseClick={closeFeature} />
    );

    userEvent.click(container.firstChild);
    expect(closeFeature).toHaveBeenCalledTimes(1);
  });
});
