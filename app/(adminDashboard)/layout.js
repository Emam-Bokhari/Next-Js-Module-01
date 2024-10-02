import Link from "next/link";
import { Fragment } from "react";

export default function AdminDashboardLayout({children}) {
  return (
    <Fragment>
      <ul className="flex gap-5 p-4 border-b border-gray-400">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard/settings">Settings</Link>
        </li>
        <li>
          <Link href="/dashboard/analytics">Analytics</Link>
        </li>
        <li>
          <Link href="/manageProducts">Manage Products</Link>
        </li>
        <li>
          <Link href="/manageUsers">Manage Users</Link>
        </li>
      </ul>
      {children}
    </Fragment>
  );
}
