import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { id, title, coverImage, publishedDate, category } = blog;
  return (
    <article className="flex flex-col h-full shadow-md rounded-bl-xl rounded-br-xl">
      <div>
        <img className="w-full" src={coverImage} alt="coverImage" />
      </div>
      <div className="px-4 py-2">
        <div>
          <h2 className="font-lexend font-extrabold text-[20] mb-3 flex-grow">
            {title}
          </h2>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[16px] font-semibold">{category}</p>
          </div>
          <div>
            <p className="text-[16px] font-semibold">
              {new Date(publishedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
        <Link to={`/blog/${id}`}>
          <button className="bg-amber-600 text-[15px] font-lexend rounded my-4 text-white px-4 py-2 w-full hover:bg-amber-700 transition duration-500 cursor-pointer">
            See More
          </button>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
