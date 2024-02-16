import arrow from "../assets/arrow.png";
import shape from "../assets/shape.png";
import heroImg3 from "../assets/heroImg3.svg";
const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col justify-evenly lg:flex-row">
        <div className="flex flex-col justify-center sm:px-16 sm:py-16 py-6 px-6 w-full lg:w-1/2  my-16">
          <h2 className="text-white text-2xl font-poppins">Happy Dental</h2>
          <h1 className="text-white text-8xl font-poppins leading-[90px] mt-5">
            Your Smile <br /> Our Priority.
          </h1>
          <p className="font-poppins text-gray-400 ss:w-2/3 w-full ss:mt-5 mt-10 ">
            Mauris risus adipiscing cursus consequat. Sit duis lobortis diam non. In in suspendisse
            quam in vestibulum diam scelerisque vulputate id. In tellus nibh volutpat dignissim.
          </p>
          <button
            className={`bg-secondary p-4 text-white font-poppins flex items-center gap-2 px-8 mt-8 w-[300px]`}
          >
            <span>Make Appointment</span>
            <img src={arrow} alt="arrow-right" className="w-5 h-5" />
          </button>
        </div>
        <div className="sm:flex hidden mx-auto ">
          <img src={heroImg3} alt="" className="w-[500px]" />
        </div>
        {/* <img src={shape} alt="" className="absolute right-0 bottom-0 hidden sm:block" /> */}
      </div>
    </section>
  );
};

export default Hero;
