import teaching from "../../assets/teaching 1.png";
import onlinelearning from "../../assets/online-learning 1.png";
import student from "../../assets/students 1.png";
import videoediting from "../../assets/video-edition 1.png";

const MaxiMIze = () => {
  return (
    <section className="bg-[#FFF2E5]">
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-[34px] font-bold font-lexend mt-4">
          Maximize Your Potentials & Possibilities
        </h2>
        <h5 className="text-[16px]">
          Learn the secrets to Life Success, these people have got the key.
        </h5>
        <div className="shadow mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 items-center py-5">
          <div className="text-center">
            <img className="block mx-auto" src={teaching} alt="teaching" />
            <h3 className="font-semibold text-[24px] font-lexend">10000</h3>
            <h5 className="font-semibold font-lexend text-[16px]">
              Expert Tutors
            </h5>
          </div>
          <div className="text-center">
            <img
              className="block mx-auto"
              src={onlinelearning}
              alt="onlinelearning"
            />
            <h3 className="font-semibold text-[24px] font-lexend">1500</h3>
            <h5 className="font-semibold font-lexend text-[16px]">
              Top Lessons
            </h5>
          </div>
          <div className="text-center">
            <img className="block mx-auto" src={student} alt="student" />
            <h3 className="font-semibold text-[24px] font-lexend">19000</h3>
            <h5 className="font-semibold font-lexend text-[16px]">
              Over Students
            </h5>
          </div>
          <div className="text-center">
            <img
              className="block mx-auto"
              src={videoediting}
              alt="videoediting"
            />
            <h3 className="font-semibold text-[24px] font-lexend">4300</h3>
            <h5 className="font-semibold font-lexend text-[16px]">
              Pro Videos
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaxiMIze;
