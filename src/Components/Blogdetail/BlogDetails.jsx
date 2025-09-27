import { useLoaderData, useParams, useNavigate, Link } from "react-router-dom";
import { CalendarDays, Tag } from "lucide-react";
import Animation from "../Motion/Animation";

const BlogDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const blogData = data.find((blog) => blog.id === id);
  const { title, coverImage, publishedDate, details, category } = blogData;

  return (
    <article className="container px-4 py-6 mx-auto lg:px-12 pt-30 ">
      {/* Blog Title */}
      <Animation delay={0.2} direction="up">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 mb-4">
          {title}
        </h1>
      </Animation>

      {/* Meta Info */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
        <Animation delay={0.2} direction="up">
          <span className="flex items-center gap-1">
            <CalendarDays size={16} />
            {new Date(publishedDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </Animation>
        <Animation delay={0.2} direction="up">
          <span className="flex items-center gap-1">
            <Tag size={16} />
            {category}
          </span>
        </Animation>
      </div>

      {/* Cover Image */}
      <div className="w-full overflow-hidden rounded-2xl shadow-md mb-8">
        <Animation delay={0.2} direction="up">
          <img
            src={coverImage}
            alt={title}
            className="w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </Animation>
      </div>

      {/* Blog Content */}
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        <Animation delay={0.2} direction="up">
          <p>{details}</p>
        </Animation>
      </div>

      {/* Back Button */}
      <div className="mt-10">
        <Animation delay={0.2} direction="up">
          <Link
            to={navigate("/")}
            className="inline-block px-4 py-2 bg-amber-600 text-white rounded-lg shadow hover:bg-amber-700 transition"
          >
            ← Back to Blogs
          </Link>
        </Animation>
      </div>
    </article>
  );
};

export default BlogDetails;
