import { RefObject } from "react";

interface ForwardProps {
  text: string;
  xx?: RefObject<HTMLInputElement>;
}

// const ForwardingRef = forwardRef<HTMLInputElement, ForwardProps>(
//   ({ text }, ref) => {
//     text;
//     return <input type="text" ref={ref} placeholder="focus me" />;
//   }
// );
const ForwardingRef2 = ({ text, xx }: ForwardProps) => {
  text;
  return <input type="text" ref={xx} placeholder="focus me" />;
};

export default ForwardingRef2;
