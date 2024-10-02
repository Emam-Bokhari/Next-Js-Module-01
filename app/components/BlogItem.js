import { Fragment } from "react";

export default function BlogItem({ title }) {
  return (
    <Fragment>
      <div>
        <p>{title}</p>
      </div>
    </Fragment>
  );
}
