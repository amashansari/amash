import { forwardRef } from "react";
function Headline({ text }, ref) {
  return <div ref={ref}>{text}</div>;
}
export default forwardRef(Headline);
