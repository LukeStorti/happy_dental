import heroIcon1 from "../assets/heroIcon1.png";
import heroIcon2 from "../assets/heroIcon2.png";

import doctors from "../assets/doctors.svg";

const About = () => {
  return (
    <section id="about-us">
      <div className="flex justify-evenly md:flex-row flex-col items-center ss:gap-2 gap-10 my-8">
        <div className="w-full  sm:w-1/2 md:flex  ml-0 sm:ml-16 justify-center relative select-none">
          <img
            src={doctors}
            alt="man at the dentist"
            className="w-[456px] h-[552px] object-contain "
          />
        </div>
        <div className="flex  flex-col font-poppins  sm:justify-start gap-2 w-full ss:w-1/2 select-none">
          <h2 className="text-xl">About us</h2>
          <h1 className="text-6xl leading-[72px]">
            Your Trusted Partner <br className="hidden sm:block" /> For Dental Health
          </h1>
          <p className="text-gray-400 w-3/4">
            Purus turpis vivamus sem est blandit. In at egestas id sollicitudin mattis integer
            aliquet ut tempor. Risus enim nisi ipsum imperdiet. Sed turpis tellus quisque tellus
            ipsum malesuada fringilla amet elit.
          </p>
          <div className="flex flex-row  mt-14">
            <div className="flex flex-col gap-3 justify-between w-1/2">
              <img src={heroIcon1} alt="hero icon" className="w-[100px] h-[100px]" />
              <h4 className="font-poppins text-xl font-semibold">Experienced Dentists</h4>
              <p className="text-gray-600">Purus turpis vivamus sem est blandit in at egestas.</p>
            </div>
            <div className="flex flex-col gap-3 justify-between w-1/2">
              <img src={heroIcon2} alt="hero icon" className="w-[100px] h-[100px]" />
              <h4 className="font-poppins text-xl font-semibold">Affordable Pricing</h4>
              <p className="text-gray-600">Purus turpis vivamus sem est blandit in at egestas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
