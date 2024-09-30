"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function CustomLink({ path, children }) {
  const pathname = usePathname();
  // console.log(pathname)
  const active = pathname === path;
  return (
    <Fragment>
      <Link href={path} className={`${active && "text-[#f3971b] font-medium"}`}>
        {children}
      </Link>
    </Fragment>
  );
}
