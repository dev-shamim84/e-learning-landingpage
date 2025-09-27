import { useEffect, useState } from "react";
import BlogCard from "../Blogcard/BlogCard";
import Animation from "../Motion/Animation";

const BlogSection = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-lexend font-bold mb-3">Latest Blogs</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-8">
          {blog.map((blog) => (
            <Animation delay={0.2} direction="up">
              <BlogCard key={blog.id} blog={blog} />
            </Animation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
