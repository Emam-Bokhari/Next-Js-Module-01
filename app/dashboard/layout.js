import Link from "next/link";
import { Fragment } from "react";

export default function DashboardLayout({ children }) {
  return (
    <Fragment>
      <div className="p-4">
        <ul className="flex gap-5">
          <li><Link href="/" >Home</Link></li>
          <li><Link href="/dashboard/settings" >Settings</Link></li>
          <li><Link href="/dashboard/analytics" >Analytics</Link></li>
        </ul>
      </div>
      {children}
    </Fragment>
  );
}
