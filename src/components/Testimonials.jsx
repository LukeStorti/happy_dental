import quotes from "../assets/quotes.png";
import heroImg from "../assets/heroImg.jpg";
import testimonial from "../assets/testimonial.svg";
const Testimonials = () => {
  return (
    <section id="testimonials" className="select-none">
      <div className="flex justify-evenly lg:flex-row flex-col items-center ss:gap-2 gap-10 my-8">
        <div className="flex  flex-col font-poppins  sm:justify-start gap-4 w-full ss:w-1/2 select-none">
          <h2 className="text-xl">Testimonials</h2>
          <h1 className="text-6xl leading-[72px] font-medium">
            What Our Patients <br className="hidden sm:block" /> Say About Us
          </h1>
          <img src={quotes} alt="" className="w-[84px] h-[67px] object-contain my-6" />
          <p className="text-gray-400 w-3/4">
            Purus turpis vivamus sem est blandit. In at egestas id sollicitudin mattis integer
            aliquet ut tempor. Risus enim nisi ipsum imperdiet. Sed turpis tellus quisque tellus
            ipsum malesuada fringilla amet elit.
          </p>
          <div className="flex flex-row items-center gap-8 my-8">
            <img src={heroImg} alt="" className="w-[111px] h-[111px] object-fill rounded-full" />
            <div className="flex flex-col gap-4">
              <h4 className="font-poppins text-xl font-semibold">Jose Turner</h4>
              <p className="text-gray-400">Customer</p>
            </div>
          </div>
        </div>

        <img src={testimonial} alt="" className="w-[456px] h-[552px] select-none" />
      </div>
    </section>
  );
};

export default Testimonials;
