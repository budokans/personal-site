import { render, within, screen } from "test-utils";
import matchMediaPolyfill from "mq-polyfill";
import { Header } from "../../../components/home";

const metadata = {
  description:
    "Steven Webster is a full-stack developer who cares about scalability, performance and elegant, intuitive UIs. Working remotely from Auckland, NZ.",
  contacts: [
    { type: "Email", value: "contact@stevenwebster.co" },
    { type: "Github", value: "https://github.com/budokans" },
    {
      type: "LinkedIn",
      value: "https://www.linkedin.com/in/steven-webster-developer/",
    },
  ],
};

describe("<Header />", () => {
  test("renders <Header.Text /> with data from props", () => {
    const { container } = render(
      <Header>
        <Header.Text>{metadata.description}</Header.Text>
      </Header>
    );
    expect(
      screen.getByText(/Steven Webster is a full-stack/i)
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders <Header.Links /> with data from props", () => {
    const { container } = render(
      <Header>
        <Header.Links contacts={metadata.contacts} />
      </Header>
    );

    const listItems = screen.getAllByRole(/listitem/i);
    expect(listItems).toHaveLength(3);

    listItems.forEach((item, idx) => {
      const { getByText } = within(item);
      expect(getByText(metadata.contacts[idx].type)).toBeInTheDocument();
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders <Header.TooltipBtn /> if viewport width >= 930px", () => {
    matchMediaPolyfill(global);
    global.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event("resize"));
    };
    global.resizeTo(930, 1000);

    const { container } = render(<Header.Links contacts={metadata.contacts} />);

    expect(screen.getByTestId(/Tooltip/i)).toBeInTheDocument();
    expect(screen.queryByTestId(/mailto/i)).not.toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders <Header.Link /> instead of <Header.TooltipBtn /> for the email link if viewport width < 930px", () => {
    matchMediaPolyfill(global);
    global.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event("resize"));
    };
    global.resizeTo(929, 1000);

    const { container } = render(<Header.Links contacts={metadata.contacts} />);

    expect(screen.queryByTestId(/Tooltip/i)).not.toBeInTheDocument();
    expect(screen.getByTestId(/mailto/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
