import { useState } from "react";
import { instructors } from "../../Utils/instructor";
import InstructorCard from "../Instructorcard/InstructorCard";
import Animation from "../Motion/Animation";
const Instructor = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleInstructors = showAll ? instructors : instructors.slice(0, 4);
  const handleShowMore = () => {
    setShowAll(!showAll);
  };
  return (
    <section>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between mb-5 ">
          <div>
            <h2 className="text-3xl  md:text-4xl font-lexend font-bold mb-4">
              Top Class Instructor
            </h2>
          </div>
          <div>
            <button
              onClick={handleShowMore}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition "
            >
              {showAll ? "Show Less" : "All Instructor"}
            </button>
          </div>
        </div>
        {/* Instructor Gird */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6">
          {visibleInstructors.map((instructor) => (
            <Animation>
              <InstructorCard key={instructor.id} instructor={instructor} />
            </Animation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructor;
