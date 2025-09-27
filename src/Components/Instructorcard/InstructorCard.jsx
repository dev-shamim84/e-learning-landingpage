import facebook from "../../assets/Facebook.png";
import linkedin from "../../assets/linkedin.png";
import Instagram from "../../assets/Instagram.png";
import twitter from "../../assets/twitter.png";
import { Link } from "react-router-dom";
const InstructorCard = ({ instructor }) => {
  const { name, image, position } = instructor;
  return (
    <article className="shadow-md rounded-2xl">
      <div className="flex gap-6">
        <div>
          <img src={image} alt={name} />
        </div>
        <div>
          <div className="mt-5">
            <h5 className="font-semibold text-[18px] font-lexend mb-2">
              {name}
            </h5>
            <p className="font-semibold text-[16px] font-lexend">{position}</p>
          </div>
          <div className="flex gap-3 items-center mt-10">
            <Link to={"/"}>
              <img src={facebook} alt="facebookicon" />
            </Link>
            <Link to={"/"}>
              <img src={twitter} alt="facebookicon" />
            </Link>
            <Link to={"/"}>
              <img src={Instagram} alt="facebookicon" />
            </Link>
            <Link to={"/"}>
              <img src={linkedin} alt="facebookicon" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
export default InstructorCard;
