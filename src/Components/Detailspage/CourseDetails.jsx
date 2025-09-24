import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
import Rating from "../Review/Rating";
import Animation from "../Motion/Animation";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = useLoaderData();
  const course = data.find((item) => item.id === id);
  const {
    coverImage,
    title,
    instructor,
    details,
    lessons,
    assignments,
    projects,
    studentsJoined,
    rating,
    price,
  } = course;
  return (
    <section>
      {/* Course Details Layout */}
      <div className="container mx-auto px-4 py-6">
        <Animation delay={0.2} direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-24">
            {/* Left Side - Cover Image */}
            <div>
              <img
                src={coverImage}
                alt={title}
                className="w-full h-full rounded-xl shadow-md"
              />
            </div>

            {/* Right Side - Details */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold font-lexend">{title}</h1>
              <p className="text-gray-600">{details}</p>

              {/* Instructor Info */}
              <div className="flex items-center gap-4 mt-4 ">
                <img
                  src={
                    instructor.image
                      ? instructor.image
                      : "https://i.ibb.co.com/vrsfx3J/blank-profile-picture-973460-1280.png"
                  }
                  alt={instructor.name}
                  className="h-16 w-16 rounded-full object-cover ring-4 ring-transparent bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 p-[2px]"
                />
                <div>
                  <h4 className="font-semibold">{instructor.name}</h4>
                  <p className="text-sm text-gray-500">
                    {instructor.designation} @ {instructor.company}
                  </p>
                </div>
              </div>

              {/* Course Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-gray-100 rounded-lg flex flex-col text-center items-center">
                  <p className="text-xl font-bold">{lessons}</p>
                  <p className="text-sm text-gray-500">Lessons</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex flex-col text-center items-center">
                  <p className="text-xl font-bold">{assignments}</p>
                  <p className="text-sm text-gray-500">Assignments</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex flex-col text-center items-center">
                  <p className="text-xl font-bold">{projects}</p>
                  <p className="text-sm text-gray-500">Projects</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex flex-col text-center items-center">
                  <p className="text-xl font-bold">{studentsJoined}</p>
                  <p className="text-sm text-gray-500">Students</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex flex-col text-center items-center">
                  <p className="text-xl font-bold">{rating}k</p>
                  <p className="text-xl font-bold ">
                    <Rating rating={rating} />
                  </p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex flex-col text-center items-center">
                  <p className="text-xl font-bold">{price} ৳</p>
                  <p className="text-sm text-gray-500">Price</p>
                </div>
              </div>

              {/* Enroll Button */}
              <button className=" mt-6 px-4 py-2 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition">
                Enroll Now
              </button>
              {/* Back Button */}
              <Link
                className="mt-6 ms-5 px-4 py-2 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition"
                to={navigate("/")}
              >
                Go Back
              </Link>
            </div>
          </div>
        </Animation>
      </div>
    </section>
  );
};

export default CourseDetails;
