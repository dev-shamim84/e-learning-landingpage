import { Link } from "react-router-dom";
import Rating from "../Review/Rating";

const CourseGrid = ({ course }) => {
  const { id, instructor, coverImage, title, rating, price, studentsJoined } =
    course;
  return (
    <article className="shadow-md  px-7 py-3 rounded flex flex-col h-full">
      <div>
        <img
          className="w-full rounded-t-[15px]"
          src={coverImage}
          alt="coverImage"
        />
      </div>
      <div className="flex items-center justify-between mt-3">
        <img
          className="h-[40px] w-[40px] rounded-full "
          src={
            instructor.image
              ? instructor.image
              : "https://i.ibb.co.com/vrsfx3J/blank-profile-picture-973460-1280.png"
          }
          alt="image"
        />
        <span className="font-semibold font-lexend text-[14px]">
          Instructor: {instructor.name}
        </span>
      </div>
      <div className="my-3 flex-grow">
        <h5 className="text-[20px] font-semibold font-lexend">{title}</h5>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3 font-semibold font-lexend text-[#b3abab]">
          <Rating rating={rating} />
          <h4>Reviews {rating}K</h4>
        </div>
        <div>
          <p className="font-semibold font-lexend text-[#b3abab]">
            {studentsJoined} Student
          </p>
        </div>
      </div>
      <div className="mt-3">
        <p className="font-lexend text-[17px] font-semibold">
          Course Fee {price} BDT
        </p>
      </div>
      <div className="flex justify-center items-center ">
        <Link className="w-full mt-3 mb-4" to={`/course/${id}`}>
          <button className="w-full cursor-pointer font-lexend text-[16px] font-semibold bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded transition duration-500 ease-in">
            Course Details
          </button>
        </Link>
      </div>
    </article>
  );
};

export default CourseGrid;
