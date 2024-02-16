import About from "./components/About";
import Footer from "./components/Footer";
import FooterPromo from "./components/FooterPromo";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import OurDoctors from "./components/OurDoctors";
import Services from "./components/Services";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex  justify-center items-center sm:px16 px-6 bg-primary">
        <div className="xl:max-w-[1280px] w-full">
          <Header />
        </div>
      </div>

      <div className="flex justify-center items-center sm:px16 px-6 ">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div className="flex justify-center items-center bg-black ">
        <div className=" w-full">
          <Hero />
        </div>
      </div>

      <div className="flex justify-center items-center sm:px16 px-6 ">
        <div className=" w-full">
          <About />
        </div>
      </div>

      <div className="flex justify-center items-center bg-secondary ">
        <div className=" w-full">
          <Statistics />
        </div>
      </div>

      <div className="flex justify-center items-center sm:px16 px-6 ">
        <div className=" w-full">
          <Services />
        </div>
      </div>

      <div className="flex justify-center items-center bg-secondary ">
        <div className=" w-full">
          <OurDoctors />
        </div>
      </div>

      <div className="flex justify-center items-center sm:px16 px-6 ">
        <div className=" w-full">
          <Testimonials />
          <HowItWorks />
        </div>
      </div>

      <div className="flex justify-center items-center bg-secondary ">
        <div className="mx-8 w-full">
          <Footer />
        </div>
      </div>

      <div className="flex  justify-center items-center sm:px16 px-6 bg-primary">
        <div className="xl:max-w-[1280px] w-full">
          <FooterPromo />
        </div>
      </div>
    </div>
  );
}

export default App;
