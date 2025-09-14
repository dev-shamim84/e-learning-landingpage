import bgImg from "../../assets/Slider.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
// import "./index.css";
const Benner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section
      className="bg-center bg-cover h-screen mt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="slider-container">
          <Slider {...settings}>
            <div className=" w-full">
              <div className="text-white flex items-center justify-center h-screen">
                <div className="md:w-1/2">
                  <h3 className="text-center md:text-5xl mb-4 md:leading-tight font-extrabold">
                    Learn Skills From Our Top Instructors
                  </h3>
                  <p className="text-center mb-4">
                    Discover a world of knowledge and expertise as you embark on
                    your learning journey with us. Our platform offers you the
                    opportunity to learn from the best in the field, with
                    top-tier instructors who are passionate about sharing their
                    skills and insights.
                  </p>
                  <div className="flex justify-center items-center">
                    <Link
                      to={"/"}
                      className="flex items-center gap-2 rounded bg-amber-600 px-3 py-2 font-semibold"
                    >
                      Explore Courses <IoIosArrowRoundForward />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full">
              <div className="text-white flex items-center justify-center h-screen">
                <div className="md:w-1/2">
                  <h3 className="text-center md:text-5xl mb-4 md:leading-tight font-extrabold">
                    Learn Skills From Our Top Instructors
                  </h3>
                  <p className="text-center mb-4">
                    Discover a world of knowledge and expertise as you embark on
                    your learning journey with us. Our platform offers you the
                    opportunity to learn from the best in the field, with
                    top-tier instructors who are passionate about sharing their
                    skills and insights.
                  </p>
                  <div className="flex justify-center items-center">
                    <Link
                      to={"/"}
                      className="flex items-center gap-2 rounded bg-amber-600 px-3 py-2 font-semibold"
                    >
                      Explore Courses <IoIosArrowRoundForward />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Benner;
