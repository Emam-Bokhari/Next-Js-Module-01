import { blogs } from "@/app/data/blogs";
import { Fragment } from "react";

// static vabe jeno generate hoi tai aita use kora hoise
export function generateStaticParams() {
  return blogs?.map((blog) => ({
    id: blog.id,
  }));
}

export default function BlogDetails({ params }) {
  const { id } = params;
  const blog = blogs?.find((blog) => blog.id ===id);
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
