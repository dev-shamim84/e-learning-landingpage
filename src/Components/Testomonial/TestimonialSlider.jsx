import Slider from "react-slick";
import { testimonials } from "../../Utils/testomonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowRight } from "react-icons/hi";
import Animation from "../Motion/Animation";

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
    >
      <HiArrowRight className="text-white text-2xl" />
    </div>
  );
};

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: null,
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 py-6 relative">
        <Animation>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
            See how our visitors & members made their #Success Stories
          </h2>

          <Slider {...settings}>
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="flex justify-center items-center " // solve for align
              >
                <div className="grid grid-cols-12 gap-9 max-w-4xl w-full bg-white rounded-lg shadow-lg p-6 mx-auto">
                  <div className="col-span-12 lg:col-span-6 flex justify-center items-center">
                    <img
                      className="w-full block mx-auto md:object-cover"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>

                  <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
                    <p className=" font-semibold font-lexend mb-3">
                      {item.recomed}
                    </p>
                    <p className="text-gray-700 italic mb-4 text-normal">
                      “{item.feedback}”
                    </p>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="font-bold">{item.position}</p>
                    <p className="font-bold">{item.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Animation>
      </div>
    </section>
  );
};

export default TestimonialSlider;
