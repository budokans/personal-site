import { render, within, screen } from "test-utils";
import matchMediaPolyfill from "mq-polyfill";
import { Header } from "../../../components/home";
import { testSiteMetadata } from "../../testData";

describe("<Header />", () => {
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

  test("renders <Header.Contact /> with data from props", () => {
    const { container } = render(
      <Header.Header>
        <Header.HeaderLocation>
          {testSiteMetadata.location}
        </Header.HeaderLocation>
        <Header.HeaderLinks contacts={testSiteMetadata.contacts} />
      </Header.Header>
    );

    const location = screen.getByText(testSiteMetadata.location);
    expect(location).toBeInTheDocument();

    const listItems = screen.getAllByRole(/listitem/i);
    expect(listItems).toHaveLength(testSiteMetadata.contacts.length);

    listItems.forEach((item, idx) => {
      const { getByText } = within(item);
      const contact = testSiteMetadata.contacts[idx];

      switch (contact.type) {
        case "email":
          return expect(getByText("Email")).toBeInTheDocument();
        case "website":
          return expect(getByText(contact.name)).toBeInTheDocument();
      }
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders <Header.TooltipBtn /> if viewport width >= 930px", () => {
    window.resizeTo(930, 1000);

    const { container } = render(
      <Header.HeaderLinks contacts={testSiteMetadata.contacts} />
    );

    expect(screen.getByTestId(/Tooltip/i)).toBeInTheDocument();
    expect(screen.queryByTestId(/mailto/i)).not.toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders <Header.Link /> instead of <Header.TooltipBtn /> for the email link if viewport width < 930px", () => {
    window.resizeTo(929, 1000);

    const { container } = render(
      <Header.HeaderLinks contacts={testSiteMetadata.contacts} />
    );

    expect(screen.queryByTestId(/Tooltip/i)).not.toBeInTheDocument();
    expect(screen.getByTestId(/mailto/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
