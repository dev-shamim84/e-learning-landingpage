import { useEffect, useState } from "react";
import CourseGrid from "../Coursegrid/CourseGrid";
import Animation from "../Motion/Animation";
const OurCourse = () => {
  const [courses, setCourses] = useState([]);
  const [filter, setFilter] = useState("All");
  const [visiable, setVisiable] = useState(3);
  // fetched data form public folder
  useEffect(() => {
    fetch("/course.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  // filterd course categorywise
  const filterCourse =
    filter === "All"
      ? courses
      : courses.filter((course) => course.category === filter);
  const categories = ["All", "Design", "Marketing", "Web"];
  const handleMore = () => {
    setVisiable((prev) => prev + 4);
  };
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 py-6">
        <Animation delay={0.2} direction="up">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <h2 className="mb-3 text-2xl md:text-4xl font-lexend font-bold">
              Our Featured Courses
            </h2>
            <div className="space-y-3 space-x-4 font-lexend flex flex-col justify-between items-center md:flex-row">
              {categories.map((category, index) => (
                <button
                  className={`border rounded border-amber-500 px-4 py-2 cursor-pointer ${
                    filter === category
                      ? "bg-amber-600 text-white transition duration-500"
                      : ""
                  }`}
                  onClick={() => {
                    setFilter(category);
                    setVisiable(3);
                  }}
                  key={index}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Animation>
        {/* Course Grid Here*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {filterCourse.slice(0, visiable).map((course) => (
            <Animation delay={0.2} direction="up">
              <CourseGrid key={course.id} course={course} />
            </Animation>
          ))}
        </div>
        {/* visiable button */}
        {visiable < filterCourse.length && (
          <div className="flex justify-center mt-6">
            <button
              className="px-6 py-2  border border-amber-600 text-amber-600 font-bold hover:bg-amber-600 hover:text-white transition"
              onClick={handleMore}
            >
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
export default OurCourse;
