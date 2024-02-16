import arrow from "../assets/arrow.png";

const Button = ({ label, color }) => {
  return (
    <button className={`bg-${color} p-4 text-white font-poppins flex items-center gap-2 px-8`}>
      <span>{label}</span>
      <img src={arrow} alt="arrow-right" className="w-5 h-5" />
    </button>
  );
};

export default Button;
