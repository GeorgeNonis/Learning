import { useRef } from "react";
import ForwardingRef2 from "./components/forwardRef";

const App = ({ ...rest }) => {
  const thisRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <button
        onClick={() => thisRef.current?.focus()}
        style={{ padding: "1" }}
        {...rest}
      >
        focusing input
      </button>
      {/* <ForwardingRef ref={thisRef} text="x" /> */}
      <ForwardingRef2 xx={thisRef} text="x" />
    </>
  );
};
export default App;
