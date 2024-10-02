import { Fragment } from "react";
import { blogs } from "../data/blogs";
import BlogItem from "../components/BlogItem";
import Link from "next/link";

export default function Blogs() {
  return (
    <Fragment>
      <p className="mb-5">Blog Page</p>
      {blogs.map((blog) => (
        <Link href={`/blogs/${blog.id}`} key={blog.id}>
          <BlogItem title={blog.title} />
        </Link>
      ))}
    </Fragment>
  );
}
