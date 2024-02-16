const Statistics = () => {
  return (
    <section>
      <div className="flex  md:flex-row flex-col items-center ss:gap-2 gap-10 my-8 mb-[150px]">
        <h1 className="font-poppins text-6xl text-white leading-[80px] ss:leading-[100px] w-1/2 sm:text-center text-left">
          Happy Dental <br />
          Statistics
        </h1>
        <p className="text-gray-400 font-poppins w-2/3 sm:w-1/3 text-left mt-[50px]">
          Purus turpis vivamus sem est blandit. In at egestas id sollicitudin mattis integer aliquet
          ut tempor. Risus enim nisi ipsum imperdiet. Sed turpis tellus quisque tellus ipsum
          malesuada fringilla amet elit.Purus turpis vivamus sem est blandit. In at egestas id
          sollicitudin mattis integer aliquet ut tempor. Risus enim nisi ipsum imperdiet. Sed turpis
          tellus quisque tellus ipsum malesuada fringilla amet elit
        </p>
      </div>
      <div className="w-[80%] h-[0.4px] bg-primary mx-auto " />
      <div className="flex md:flex-row flex-col justify-around items-center ss:gap-16 gap-10 my-10 mt-[100px]">
        <div className="flex flex-col gap-2">
          <h2 className="text-poppins text-6xl font-semibold text-primary">780+</h2>
          <p className="text-poppins text-white text-lg">Happy Patients</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-poppins text-6xl font-semibold text-primary">560+</h2>
          <p className="text-poppins text-white text-lg">Online Appointments</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-poppins text-6xl font-semibold text-primary">340+</h2>
          <p className="text-poppins text-white text-lg">Awards</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
