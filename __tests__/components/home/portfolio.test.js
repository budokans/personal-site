import { render, fireEvent } from "test-utils";
import { Portfolio } from "../../../components/home/Portfolio";

describe("<Portfolio />", () => {
  test("<Portfolio.Item /> renders a button and calls openFeature() on click", () => {
    const openFeature = jest.fn();
    const { getByRole, container } = render(
      <Portfolio.Item onPortfolioClick={openFeature}>Children</Portfolio.Item>
    );

    expect(getByRole("button")).toBeInTheDocument();
    fireEvent.click(getByRole("button"));
    expect(openFeature).toHaveBeenCalled();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("<Porfolio.Image /> renders an image with populated data from props", () => {
    const project = {
      title: "Gretsch Geeks",
      icon: "/images/gretsch-logo.jpg",
    };

    const { getByAltText, container } = render(
      <Portfolio.Image src={project.icon} alt={project.title} />
    );

    expect(getByAltText(/Gretsch Geeks icon/i)).toBeInTheDocument();
    expect(container.querySelector("img").getAttribute("src")).toBe(
      "/images/gretsch-logo.jpg"
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("<Portfolio.Title /> renders with populated data from props", () => {
    const project = {
      title: "Gretsch Geeks",
    };

    const { getByText, container } = render(
      <Portfolio.Title>{project.title}</Portfolio.Title>
    );

    expect(getByText(/Gretsch Geeks/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("<Portfolio.Text /> renders with populated data from props", () => {
    const project = {
      shortBlurb:
        "An example E-commerce buy-sell platform built with modern React, Apollo 3 and Keystone.js as a headless CMS.",
    };

    const { getByText, container } = render(
      <Portfolio.Text>{project.shortBlurb}</Portfolio.Text>
    );

    expect(getByText(/Apollo 3/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("<Portfolio.Button /> renders a button with text", () => {
    const { getByRole, getByText, container } = render(<Portfolio.Button />);

    expect(getByRole("button")).toBeInTheDocument();
    expect(getByText(/View/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
