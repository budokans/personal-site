import { render } from "test-utils";
import { Home } from "../../../components/home";

describe("<Home />", () => {
  test("<Home /> blurs on blur prop evaluating to true", () => {
    const { container } = render(<Home blur={true} />);
    expect(container.firstChild).toHaveStyle("filter: blur(5px)");
  });

  test("<Home /> doesn't on blur prop evaluating to false", () => {
    const { container } = render(<Home blur={false} />);
    expect(container.firstChild).toHaveStyle("filter: blur(0px)");
  });
});
