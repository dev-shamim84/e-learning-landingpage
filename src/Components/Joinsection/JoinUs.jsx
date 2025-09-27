import halfimg from "../../assets/halfimg.png";
import Animation from "../Motion/Animation";
const JoinUs = () => {
  return (
    <section className="bg-amber-600">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div>
            <Animation delay={0.2} direction="left">
              <h2 className="text-[30px] font-extrabold font-lexend text-white mb-2 md:w-1/3">
                Join Us & Spread Experiences
              </h2>
              <p className="text-white font-lexend md:w-1/2 mb-4">
                Join our community and become a part of a vibrant network where
                experiences are shared, celebrated, and amplified.
              </p>
              <button className="bg-white text-amber-600 px-4 py-2 rounded-xl">
                Become An Instructors
              </button>
            </Animation>
          </div>
          <div>
            <Animation delay={0.2} direction="right">
              <img src={halfimg} alt="halfimg.png" />
            </Animation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
