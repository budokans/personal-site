import { render, fireEvent } from "test-utils";
import matchMediaPolyfill from "mq-polyfill";
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

describe("<Portfolio.Inner />", () => {
  test("<Portfolio.Inner /> renders with a border-bottom if viewport width < 768px and projectsCount is 1", () => {
    matchMediaPolyfill(global);
    global.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event("resize"));
    };
    global.resizeTo(767, 1000);

    const numberOfProjects = 1;
    const indexInArray = 0;

    const { container } = render(
      <Portfolio.Inner
        idx={indexInArray}
        projectsCount={numberOfProjects}
      ></Portfolio.Inner>
    );

    expect(container.firstChild).toHaveStyle(
      `border-bottom: 1px solid lightgrey`
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("<Portfolio.Inner /> renders without a border-bottom if viewport width < 768px, projectsCount is 2 and it is the last project", () => {
    matchMediaPolyfill(global);
    global.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event("resize"));
    };
    global.resizeTo(767, 1000);

    const numberOfProjects = 2;
    const indexInArray = 1;

    const { container } = render(
      <Portfolio.Inner
        idx={indexInArray}
        projectsCount={numberOfProjects}
      ></Portfolio.Inner>
    );

    expect(container.firstChild).not.toHaveStyle(
      `border-bottom: 1px solid lightgrey`
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("<Portfolio.Inner /> renders with a border-bottom if viewport width < 768px, projectsCount is 2 and it is not the last project", () => {
    matchMediaPolyfill(global);
    global.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event("resize"));
    };
    global.resizeTo(767, 1000);

    const numberOfProjects = 2;
    const indexInArray = 0;

    const { container } = render(
      <Portfolio.Inner
        idx={indexInArray}
        projectsCount={numberOfProjects}
      ></Portfolio.Inner>
    );

    expect(container.firstChild).toHaveStyle(
      `border-bottom: 1px solid lightgrey`
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("<Portfolio.Inner /> renders with a border-bottom if viewport width > 768px and projectsCount is < 3", () => {
    matchMediaPolyfill(global);
    global.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event("resize"));
    };
    global.resizeTo(768, 1000);

    const numberOfProjects = 2;
    const indexInArray = 0;

    const { container } = render(
      <Portfolio.Inner
        idx={indexInArray}
        projectsCount={numberOfProjects}
      ></Portfolio.Inner>
    );

    expect(container.firstChild).toHaveStyle(
      `border-bottom: 1px solid lightgrey`
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("<Portfolio.Inner /> renders without a border-bottom if viewport width > 768px, projectsCount is 3 and it is on the bottom row", () => {
    matchMediaPolyfill(global);
    global.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event("resize"));
    };
    global.resizeTo(768, 1000);

    const numberOfProjects = 3;
    const indexInArray = 2;

    const { container } = render(
      <Portfolio.Inner
        idx={indexInArray}
        projectsCount={numberOfProjects}
      ></Portfolio.Inner>
    );

    expect(container.firstChild).not.toHaveStyle(
      `border-bottom: 1px solid lightgrey`
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("<Portfolio.Inner /> renders with a border-bottom if viewport width > 768px, it is not in the first row, and it is the last one to be rendered before wrapping to a new row", () => {
    matchMediaPolyfill(global);
    global.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event("resize"));
    };
    global.resizeTo(768, 1000);

    const numberOfProjects = 5;
    const indexInArray = 3;

    const { container } = render(
      <Portfolio.Inner
        idx={indexInArray}
        projectsCount={numberOfProjects}
      ></Portfolio.Inner>
    );

    expect(container.firstChild).toHaveStyle(
      `border-bottom: 1px solid lightgrey`
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
