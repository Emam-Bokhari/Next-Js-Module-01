"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function CustomLink({ path, children,prefetch=true }) {
  const pathname = usePathname();
  // console.log(pathname)
  const active = pathname === path;
  return (
    <Fragment>
      <Link prefetch={prefetch} href={path} className={`${active && "text-[#f3971b] font-medium"}`}>
        {children}
      </Link>
    </Fragment>
  );
}
