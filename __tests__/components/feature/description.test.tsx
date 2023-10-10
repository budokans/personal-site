import { render, screen } from "test-utils";
import { Description } from "components/feature";

describe("<Description />", () => {
  test("renders a <Description.Paragraph> with populated data", () => {
    const { container } = render(
      <Description.Description>
        <Description.Paragraph>
          The foundations of the project were laid while completing Wes
          Bos&apos;s huge Advanced React with GraphQL course, but the final
          result was buggy and impossible to deploy in its finished state.
        </Description.Paragraph>
      </Description.Description>
    );
    expect(screen.getByText(/The foundations/)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
