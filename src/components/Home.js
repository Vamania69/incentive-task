import React, { useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { InputForm } from "./InputForm";
import { WealthChart } from "./WealthChart";
import { FAQ } from "./FAQ";
import { DisplayWealth } from "./DisplayWealth";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const Home = () => {
  // total worth of the ESOPs
  const [totalWorth, setTotalWorth] = useState(100);

  // salary component without ESOPs
  const [salaryComponentWithoutESOPs, setSalaryComponentWithoutESOPs] =
    useState(50000);

  return (
    <>
      <div className="Hero-section xs:m-5 p-6 ">
        <h1 className="text-xl uppercase tracking-wide xs:text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7545FF] to-[#96A1FF] ">
          Scenario Calculator (For Employees)
        </h1>
        <p className="text-[#A0A0A0] text-sm sm:text-base  md:text-lg leading-4 sm:leading-6 mt-4 md:max-w-[80vw]">
          ESOPs scenario Calculator is an interactive tool designed to assist
          employees in making more informed decisions regarding their
          compensation packages.
        </p>
        <div className="container md:flex justify-around p-4 sm:p-8 border gap-10 mt-5 bg-[#111111] border-border rounded-md min-w-full ">
          {
            // Input form container for the user to enter the values
          }
          <InputForm
            totalWorth={totalWorth}
            setTotalWorth={setTotalWorth}
            salaryComponentWithoutESOPs={salaryComponentWithoutESOPs}
            setSalaryComponentWithoutESOPs={setSalaryComponentWithoutESOPs}
          />
          {
            // Result based on the calculation of the ESOP worth in addition to salary component
          }
          <div className="result-container text-center space-y-8">
            <DisplayWealth
              heading={"Total salary component including ESOP"}
              value={totalWorth}
            />
            <DisplayWealth
              heading={"ESOP total worth before infilation"}
              value={totalWorth}
            />
            {
              // Graph container
            }
            <WealthChart
              totalWorth={totalWorth}
              salaryComponentWithoutESOPs={salaryComponentWithoutESOPs}
            />
          </div>
        </div>
      </div>
      <FAQ />
    </>
  );
};

export default Home;
