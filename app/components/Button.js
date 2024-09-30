"use client";

import { useRouter } from "next/navigation";
import { Fragment } from "react";

export default function Button({ children }) {
  const router = useRouter();

  function handleClick() {
    router.push("/dashboard/analytics");
  }

  return (
    <Fragment>
      <button
        onClick={handleClick}
        className="bg-violet-500 hover:bg-violet-600 transition-all duration-200 px-3 py-2 rounded-md text-white my-4"
      >
        {children}
      </button>
    </Fragment>
  );
}
