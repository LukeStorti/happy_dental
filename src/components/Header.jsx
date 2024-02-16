import pin from "../assets/pin.png";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

const Header = () => {
  return (
    <section className="w-full  py-6 justify-between items-center hidden sm:flex">
      <div className="hidden flex-row justify-center items-center md:flex md:text-lg text-sm">
        <img src={pin} alt="pin" className=" object-contain" />
        <h2 className="font-poppins">Jl Danau Bratan, Malang City, East Java 65139</h2>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <div className="flex flex-row justify-center items-center sm:text-lg text-sm">
          <img src={phone} alt="pin" className=" object-contain mr-2" />
          <h2 className="font-poppins">+62 864 6444 2222</h2>
        </div>
        <div className="bg-black h-[20px] w-[1.8px] md:block hidden" />
        <div className="flex flex-row justify-center items-center md:text-lg text-sm">
          <img src={mail} alt="pin" className=" object-contain mr-2" />
          <h2 className="font-poppins">hi@happydental.com</h2>
        </div>
      </div>
    </section>
  );
};

export default Header;
