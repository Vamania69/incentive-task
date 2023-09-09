import React from "react";

const About = () => {
  return (
    <>
      <section className="about-section m-6 md:m-8">
        <h3>Terms you should know</h3>

        <div className="list-container mt-5 space-y-5">
          <div className=" flex justify-between  p-4 md:p-6 bg-[#1F1F1F]  rounded-lg">
            <h3 className="text-sm xs:text-lg sm:text-xl">What is an ESOP?</h3>
            <button className="text-xl">+</button>
          </div>
          <div className=" p-4 md:p-6 bg-[#1F1F1F]  rounded-lg">
            <div className="flex justify-between ">
              <h3 className="text-sm xs:text-lg sm:text-xl">How does the calculator determine ESOP outcomes??</h3>
              <button className="text-xl">-</button>
            </div>
            <p className="text-[#BDBDBD] mt-4 text-sm sm:text-base max-w-[90%]">
              The calculator estimates ESOP outcomes based on several factors,
              including the number of ESOP shares allocated, the company's stock
              performance, and the vesting period. It may also consider your
              contribution to the ESOP plan.
            </p>
          </div>
          <div className=" flex justify-between p-4 md:p-6 bg-[#1F1F1F]  rounded-lg">
            <h3 className="text-sm xs:text-lg sm:text-xl">What is the "Vesting Period" in an ESOP?</h3>
            <button className="text-base md:text-xl">+</button>
          </div>
          <div className=" flex justify-between p-4 md:p-6 bg-[#1F1F1F]  rounded-lg">
            <h3 className="text-sm xs:text-lg sm:text-xl"> Can I use this calculator for any type of ESOP plan?</h3>
            <button className="text-base md:text-xl">+</button>
          </div>
        </div>
        <img src="/assets/explore calculator wider.png" alt="" className=" hidden min-w-full mt-10 md:block" />
        <img src="/assets/explore calculator mobile.png" alt="" className=" block min-w-full mt-10 md:hidden" />

      </section>
      <section className=" flex justify-center">
      </section>
      {
       // <section className="Explor-section m-8 p-8 md:flex justify-around rounded-lg bg-gradient-to-b from-[#5034a0] to-[#0F0921]">
      //   <div className=" md:max-w-[50%]">
      //     <h2 className="text-base font-semibold xs:text-lg text-center sm:text-left sm:text-2xl">
      //       Maximize your ESOP benefits and minimize tax liabilities with our
      //       ESOP Tax Calculator.
      //     </h2>
      //     <button className="rounded-xl p-2 mt-4 font-bold bg-white text-[#5F48A3] w-full sm:w-[2/3] md:w-1/2">
      //       Explore Calculator
      //     </button>
      //   </div>

      //   <div className="bg-primary rounded-lg mt-4 p-5 ">
      //     <div className="left-container ">
      //       <label htmlFor="">Total ESOPs you hold</label>
      //       <input
      //         type="text"
      //         className="p-1 md:p-2 rounded-md md:rounded-xl block  border-none  max-w-full bg-[#1F1F1F] active:border-none mb-6"
      //       />
      //       <label htmlFor="">Options you want to exercise</label>
      //       <h2>100</h2>
      //       <input type="range" className="w-full" />
      //       <span className="flex justify-between mt--2">
      //         <span>10</span>
      //         <span>1000</span>
      //       </span>
      //       <label htmlFor="">Fair price valuation (FPV)</label>
      //       <input
      //         type="text"
      //         className="p-1 md:p-2 rounded-md md:rounded-xl block max-w-full border-none bg-[#1F1F1F] active:border-none mb-6"
      //       />
      //       <label htmlFor="">Exercise price</label>
      //       <input
      //         type="text"
      //         className="p-1 md:p-2 rounded-md md:rounded-xl block  max-w-full border-none bg-[#1F1F1F] active:border-none mb-6"
      //       />
      //     </div>
      //     <div className="representation min-w-[1/2]"></div>
      //   </div>
      // </section>
    }
</>
    
  
  );
};

export default About;
