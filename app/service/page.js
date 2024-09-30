import { Fragment, Suspense } from "react";
import Posts from "../components/posts";

export default function Service() {
  return (
    <Fragment>
      <p>Service Page</p>
      <Suspense fallback={<p className="text-2xl text-red-500 font-medium" >Loading...</p>} >
        <Posts />
      </Suspense>
    </Fragment>
  );
}
