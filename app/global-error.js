"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <html>
      <body>
        <div>
          <h2>Something went wrong in global error boundary!</h2>
          <button onClick={() => reset}>Try again</button>
        </div>
      </body>
    </html>
  );
}

{
  /*
<GlobalErrorBoundary>
  <RootLayout>
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<DashboardLoading />}>
        <DashboardLayout>
          <ErrorBoundary fallback={Error}>
            <Analytics />
          </ErrorBoundary>
        </DashboardLayout>
      </Suspense>
      <Suspense fallback={<HeavyLoading />}>
        <Heavy />
      </Suspense>
    </ErrorBoundary>
  </RootLayout>
</GlobalErrorBoundary>; 
*/
}
