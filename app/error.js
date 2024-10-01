"use client";

import { Fragment, useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <Fragment>
      <h2>Something went wrong in root boundary!</h2>
      <button onClick={() => reset}>Try again</button>
    </Fragment>
  );
}


/* 
<RootLayout>
  <ErrorBoundary fallback={<Error/>} >
    <Suspense fallback={<DashboardLoading/>} >
      <DashboardLayout>
        <ErrorBoundary fallback={Error} >
          <Analytics/>
        </ErrorBoundary>
      </DashboardLayout>
    </Suspense>
  <Suspense fallback={<HeavyLoading/>} >
    <Heavy/>
  </Suspense>
  </ErrorBoundary>
</RootLayout>
*/