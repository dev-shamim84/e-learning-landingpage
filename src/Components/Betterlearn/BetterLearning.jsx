import { Link } from "react-router-dom";
import newImg from "../../assets/Frame 1000005840.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import Animation from "../Motion/Animation";
const BetterLearning = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-6">
        <Animation delay={0.2} direction="down">
          <div className=" pt-24 flex flex-col md:flex-row justify-center gap-y-15 items-center md:justify-between">
            <div className="flex-1">
              <Animation delay={0.2} direction="left">
                <h4 className="text-xl mb-3">
                  Better Learning. Better Results
                </h4>
                <h2 className="font-lexend leading-tight text-4xl md:text-6xl lg:text-4xl xl:text-6xl  mb-3 font-bold ">
                  Online education platform that fits for everyone
                </h2>
                <p className="font-lexend leading-relaxed mb-4 text-left text-xl ">
                  Welcome to an inclusive online education platform that caters
                  to learners of all backgrounds, levels, and aspirations. Our
                  platform is designed to be accessible, flexible, and
                  adaptable, making it the perfect choice for everyone,
                  regardless of age or prior educational experience.
                </p>
                <Link to={"/"}>
                  <button className="bg-amber-600 px-4 py-2 flex items-center rounded text-white font-semibold">
                    Explore more about us <IoIosArrowRoundForward />
                  </button>
                </Link>
              </Animation>
            </div>
            <div className="flex-1 relative items-start">
              <Animation delay={0.2} direction="right">
                <div className="absolute -top-5 md:-top-10 left-15 bg-orange-400 text-white rounded-xl px-4 py-10 justify-center items-center">
                  <h2 className="text-3xl font-bold">12+</h2>
                  <p className="text-xl w-1/2">Years of Experience</p>
                </div>
                <img src={newImg} alt="" />
              </Animation>
            </div>
          </div>
        </Animation>
      </div>
    </section>
  );
};
export default BetterLearning;
