import Benner from "../Components/Benar/Benner";
import BetterLearning from "../Components/Betterlearn/BetterLearning";
import BlogSection from "../Components/Blogsection/BlogSection";
import Exprience from "../Components/Exprience/Exprience";
import Instructor from "../Components/Instructure/Instructor";
import JoinUs from "../Components/Joinsection/JoinUs";
import MaxiMIze from "../Components/Maximize/MaxiMIze";
import OurCourse from "../Components/Ourcourse/OurCourse";
import TestimonialSlider from "../Components/Testomonial/TestimonialSlider";
const Home = () => {
  return (
    <>
      <Benner />
      <Exprience />
      <BetterLearning />
      <MaxiMIze />
      <OurCourse />
      <TestimonialSlider />
      <Instructor />
      <JoinUs />
      <BlogSection />
    </>
  );
};

export default Home;
