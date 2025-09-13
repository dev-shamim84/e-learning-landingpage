import bgImg from "../../assets/Slider.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      className="bg-center bg-cover h-screen"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="bg-black/70 absolute inset-0 z-20"></div>
      <div className="container mx-auto px-4 py-6">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="text-white h-screen">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                aut autem quia sequi asperiores quam enim eligendi quis iusto
                rerum blanditiis harum corporis animi, natus quidem itaque
                adipisci assumenda dicta!
              </h3>
            </div>
            <div className="text-white h-screen pt-48">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                aut autem quia sequi asperiores quam enim eligendi quis iusto
                rerum blanditiis harum corporis animi, natus quidem itaque
                adipisci assumenda dicta!
              </h3>
            </div>
            <div className="text-white h-screen">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                aut autem quia sequi asperiores quam enim eligendi quis iusto
                rerum blanditiis harum corporis animi, natus quidem itaque
                adipisci assumenda dicta!
              </h3>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Benner;
