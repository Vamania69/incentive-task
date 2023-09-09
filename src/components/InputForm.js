import React, { useEffect, useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

export const InputForm = ({
  setTotalWorth,
  salaryComponentWithoutESOPs,
  setSalaryComponentWithoutESOPs,
}) => {
  // getting the input values from the user
  const [ESOPworth, setESOPworth] = useState(10000);
  const [growthRate, setGrowthRate] = useState(10);
  const [vestingPeriod, setVestingPeriod] = useState(4);
  const [salaryComponent, setSalaryComponent] = useState(15000);

 

  const calculateTotalWorth = (e) => {
    // setting the input values to the state variables
    if (e.target.name === "ESOP'sWorth") {
      setESOPworth(e.target.value);
    }
    if (e.target.name === "GrowthRate") {
      setGrowthRate(e.target.value);
    }
    if (e.target.name === "VestingPeriod") {
      setVestingPeriod(e.target.value);
    }
    if (e.target.name === "SalaryComponent") {
      setSalaryComponent(e.target.value);
    }
  };

  useEffect(() => {
    // calculating the total worth of ESOPs
    const growthFactor = 1 + growthRate / 100;
    const totalWorth =
      ESOPworth * Math.pow(growthFactor, vestingPeriod) +
      parseInt(salaryComponent);
    setTotalWorth(parseInt(totalWorth));
  }, [ESOPworth, growthRate, vestingPeriod, salaryComponent]);

  return (
    <div className="input-container">
      <h3 className="text-sm xs:text-lg  sm:text-xl md:text-3xl font-semibold text-[#926DFE]">
        ESOP Worth in additon for Salary Component
      </h3>
      <form action="submit" className="ESOP-calculator text-sm flex flex-col ">
        <label
          htmlFor="ESOP's Worth"
          className="mt-4 sm:mt-8 mb-2 text-xs sm:font-base"
        >
          Worth of ESOP's{" "}
          <span className="inline-block text-[#A0A0A0]">
            <IoInformationCircleOutline></IoInformationCircleOutline>
          </span>
        </label>
        <input
          required
          name="ESOP'sWorth"
          type=""
          value={ESOPworth}
          onChange={calculateTotalWorth}
          placeholder="&#8377;  input"
          className="p-3 rounded-md  border border-border bg-[#1F1F1F] active:border-none mb-4 sm:mb-5"
        />

        <label htmlFor="Growth" className="mb-2 text-xs sm:font-base">
          Expecte annual growth rate{" "}
          <span className="inline-block text-[#A0A0A0]">
            {" "}
            <IoInformationCircleOutline></IoInformationCircleOutline>
          </span>
        </label>
        <input
          required
          type=""
          name="GrowthRate"
          value={growthRate}
          onChange={calculateTotalWorth}
          placeholder="Enter growth rate of the company's share price"
          className=" p-3 rounded-md  border-none bg-[#1F1F1F] active:border-none mb-4  sm:mb-6"
        />

        <label htmlFor="period" className="mb-2  text-xs sm:font-base">
          Vesting Period{" "}
          <span className="inline-block text-[#A0A0A0]">
            {" "}
            <IoInformationCircleOutline></IoInformationCircleOutline>
          </span>
        </label>
        <input
          required
          type=""
          name="VestingPeriod"
          value={vestingPeriod}
          onChange={calculateTotalWorth}
          placeholder="Enter vesting period in years"
          className="p-3 rounded-md  border-none bg-[#1F1F1F] active:border-none mb-4 sm:mb-6"
        />

        <label
          htmlFor="Salary Component "
          className="mb-2 text-xs sm:font-base"
        >
          Salary Component with ESOPs{" "}
          <span className="inline-block text-[#A0A0A0]">
            <IoInformationCircleOutline></IoInformationCircleOutline>
          </span>
        </label>
        <input
          required
          name="SalaryComponent"
          value={salaryComponent}
          onChange={calculateTotalWorth}
          placeholder="&#8377;  input"
          className="p-3 rounded-md  border-none bg-[#1F1F1F] active:border-none mb-6"
        />
        <span className="border-b-2 border-border mb-5"></span>
        <h3 className="text-[#926DFE] text-sm xs:text-lg sm:text-xl md:text-3xl font-semibold">
          Only Salary component without ESOPs
        </h3>
        <label
          htmlFor="number"
          className="mt-6 block mb-2  text-xs sm:font-base"
        >
          Salary offered insted of ESOPs
        </label>
        <input
          placeholder="&#8377;  input"
          value={salaryComponentWithoutESOPs}
          onChange={(e) => setSalaryComponentWithoutESOPs(e.target.value)}
          className="p-3 rounded-md  border-none bg-[#1F1F1F] active:border-none mb-5"
        />
      </form>
    </div>
  );
};
