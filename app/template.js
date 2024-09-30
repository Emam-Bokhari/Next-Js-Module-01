import { Fragment } from "react";

export default function Template({ children }) {
  return (
    <Fragment>
      <div>{children}</div>
    </Fragment>
  );
}
