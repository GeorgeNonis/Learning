import { ComponentProps, HTMLAttributes } from "react";

type PassingAllProps1 = ComponentProps<"div">;
type PassingAllProps2 = HTMLAttributes<HTMLDivElement>;

const PassingAllProps = ({ children, ...props }: PassingAllProps2) => {
  return <div {...props}>{children}</div>;
};
export default PassingAllProps;
