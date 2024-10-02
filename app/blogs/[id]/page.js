import { blogs } from "@/app/data/blogs";
import { Fragment } from "react";

export default function BlogDetails({ params }) {
  const { id } = params;
  const blog = blogs?.find((blog) => blog.id === Number(id));
  console.log(blog);
  const { title, description } = blog;

  return (
    <Fragment>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Fragment>
  );
}
