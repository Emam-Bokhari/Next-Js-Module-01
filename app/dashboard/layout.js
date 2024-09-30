import Link from "next/link";
import { Fragment } from "react";
import CustomLink from "../components/CustomLink";

export default function DashboardLayout({ children }) {
  return (
    <Fragment>
      <div className="p-4">
        <ul className="flex gap-5">
          <li>
            <CustomLink path="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink path="/dashboard/settings">Settings</CustomLink>
          </li>
          <li>
            <CustomLink path="/dashboard/analytics">Analytics</CustomLink>
          </li>
        </ul>
      </div>
      {children}
    </Fragment>
  );
}
