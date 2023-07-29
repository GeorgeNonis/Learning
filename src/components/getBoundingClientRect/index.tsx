import { useRef } from "react";
import { StyledGetBoundingClientRect, Wrapper } from "./styles";

const GetBoundingClientRect = () => {
  const ref = useRef<HTMLDivElement>(null);

  console.log(ref.current?.getBoundingClientRect().bottom);
  return (
    <Wrapper>
      <StyledGetBoundingClientRect
        ref={ref}
        onClick={() => {
          console.log(ref.current?.getBoundingClientRect().bottom);
        }}
      >
        <h1>GetBoundingClientRect</h1>
      </StyledGetBoundingClientRect>
    </Wrapper>
  );
};
export default GetBoundingClientRect;
