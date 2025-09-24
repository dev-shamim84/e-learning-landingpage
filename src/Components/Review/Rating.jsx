import { GoStarFill } from "react-icons/go";
import { TiStarHalfOutline } from "react-icons/ti";

const Rating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, index) => {
        const starIndex = index + 1;
        return starIndex <= rating ? (
          <GoStarFill key={index} className="text-yellow-500" />
        ) : (
          <TiStarHalfOutline key={index} className="text-yellow-500" />
        );
      })}
    </div>
  );
};

export default Rating;
