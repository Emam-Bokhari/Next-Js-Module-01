import Button from "@/app/components/Button";
import { Fragment } from "react";

export const metadata = {
  title: "Settings Page",
  description: "This is our Settings Page",
};

export default function Settings() {
  return (
    <Fragment>
      <h1 className="text-2xl mt-3">Settings Page</h1>
      <p className="mt-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <Button>Go To Analytics Page</Button>
    </Fragment>
  );
}
