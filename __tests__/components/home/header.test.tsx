import { render, within, screen, setDeviceWidth } from "test-utils";
import { Header } from "components/home";
import { testSiteMetadata } from "../../testData";

describe("<Header />", () => {
  test("renders <Header.Contact /> with data from props", () => {
    const { container } = render(
      <Header.Header>
        <Header.Location>{testSiteMetadata.location}</Header.Location>
        <Header.Links contacts={testSiteMetadata.contacts} />
      </Header.Header>
    );

    const location = screen.getByText(testSiteMetadata.location);
    expect(location).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(testSiteMetadata.contacts.length);

    listItems.forEach((item, idx) => {
      const queries = within(item);
      const contact = testSiteMetadata.contacts[idx];

      switch (contact.type) {
        case "email":
          expect(queries.getByText("Email")).toBeInTheDocument();
          return;
        case "website":
          expect(queries.getByText(contact.name)).toBeInTheDocument();
          return;
      }
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders <Header.TooltipBtn /> if viewport width >= 930px", () => {
    setDeviceWidth(930);

    const { container } = render(
      <Header.Links contacts={testSiteMetadata.contacts} />
    );

    expect(screen.getByTestId(/Tooltip/i)).toBeInTheDocument();
    expect(screen.queryByTestId(/mailto/i)).not.toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders <Header.Link /> instead of <Header.TooltipBtn /> for the email link if viewport width < 930px", () => {
    setDeviceWidth(929);

    const { container } = render(
      <Header.Links contacts={testSiteMetadata.contacts} />
    );

    expect(screen.queryByTestId(/Tooltip/i)).not.toBeInTheDocument();
    expect(screen.getByTestId(/mailto/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
