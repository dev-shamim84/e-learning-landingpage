import Animation from "../Motion/Animation";

const Exprience = () => {
  return (
    <section className="bg-[#FFF2E5] py-10">
      <Animation delay={0.2} direction="up">
        <div className="container mx-auto px-4 py-6 ">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold my-5">
              Trusted by companies of all sizes
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 items-center justify-between ">
            <img src="/src/assets/buffer.png" alt="buffer" />

            <img
              src="/src/assets/amazon-logo-amazon-icon-transparent-free-png 1.png"
              alt="amazon"
            />

            <img src="/src/assets/coursera-logo 1.png" alt="coursera" />

            <img
              src="/src/assets/google-logo-transparent 1.png"
              alt="google2"
            />

            <img src="/src/assets/Stripe-logo 1.png" alt="stripe" />

            <img src="/src/assets/hub.png" alt="hub" />
          </div>
        </div>
      </Animation>
    </section>
  );
};

export default Exprience;
