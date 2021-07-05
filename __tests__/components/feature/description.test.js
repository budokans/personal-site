import { render, screen } from "test-utils";
import { Description } from "../../../components/feature/Description";

describe("<Description />", () => {
  test("renders a <Description.Paragraph> with populated data", () => {
    render(
      <Description>
        <Description.Paragraph>
          The foundations of the project were laid while completing Wes Bos's
          huge Advanced React with GraphQL course, but the final result was
          buggy and impossible to deploy in its finished state.
        </Description.Paragraph>
      </Description>
    );
    expect(screen.getByText(/The foundations/)).toBeInTheDocument();
  });
});
