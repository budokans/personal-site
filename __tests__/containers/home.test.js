import { render, screen } from "test-utils";
import { HomeContainer } from "../../containers/home";

const metadata = {
  description:
    "Steven Webster is a full-stack developer who cares about scalability, performance and elegant, intuitive UIs. Working remotely from Auckland, NZ.",
  canonical: "https://stevenwebster.co",
  contacts: [
    { type: "Email", value: "mailto:contact@stevenwebster.co" },
    { type: "Github", value: "https://github.com/budokans" },
    {
      type: "LinkedIn",
      value: "https://www.linkedin.com/in/steven-webster-developer/",
    },
  ],
};

const projects = [
  {
    title: "Gretsch Geeks",
    shortBlurb:
      "An example E-commerce buy-sell platform built with modern React, Apollo 3 and Keystone.js as a headless CMS.",
    icon: "/images/gretsch-logo.jpg",
  },
  {
    title: "Netflix Clone",
    shortBlurb:
      "A clone of the late-2020 Netflix front-end experience, with Firebase for authorization and server.",
    icon: "/images/netflix-logo.jfif",
  },
];

describe("<HomeContainer />", () => {
  test("Renders with populated data", () => {
    render(
      <HomeContainer
        metadata={metadata}
        projects={projects}
        onPortfolioClick={jest.fn()}
        blur="false"
      />
    );

    expect(
      screen.getByText(/Steven Webster is a full-stack developer/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Gretsch Geeks/i)).toBeInTheDocument();
    expect(
      screen.getByText(/An example E-commerce buy-sell/i)
    ).toBeInTheDocument();
    expect(screen.getByAltText(/Gretsch Geeks/i)).toBeInTheDocument();
    expect(screen.getByText(/Netflix Clone/i)).toBeInTheDocument();
    expect(screen.getByText(/A clone of the late-2020/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Netflix Clone/i)).toBeInTheDocument();
  });
});
