import { screen, render } from "@testing-library/react";
import App from "./App";

describe("<ExplanationDotGroup/>", () => {
  it("renders label of index 0", () => {
    const button = "button";
    const btn = screen.getByTestId(button);
    render(<App data-testid={button} />);
    expect(btn).toBeInTheDocument();
  });
});

// test('renders label of index 2', () => {
//     const id = 'group'
//     render(
//         <ExplanationDotGroup labels={labels} colors={colors} data-testid={id} />
//     )
//     // const group = screen.getByTestId(id)
//     // expect(group).toHaveStyle('display: flex;')
//     const dotGroupElement = screen.getByTestId(id)
//     const styles = window.getComputedStyle(dotGroupElement)

//     expect(styles.display).toBe('flex')
// })
