import { Fragment } from "react";

export default function DashboardLayout({ children }) {
  return (
    <Fragment>
      <div className="p-4">
        <ul className="flex gap-5">
          <li>Settings</li>
          <li>Analytics</li>
        </ul>
      </div>
      {children}
    </Fragment>
  );
}
