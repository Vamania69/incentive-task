import React, { useEffect, useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const Home = () => {
  // getting the input values from the user
  const [ESOPworth, setESOPworth] = useState(10000);
  const [growthRate, setGrowthRate] = useState(10);
  const [vestingPeriod, setVestingPeriod] = useState(4);
  const [salaryComponent, setSalaryComponent] = useState(15000);
  const [totalWorth, setTotalWorth] = useState(100);

  // salary component without ESOPs
  const [salaryComponentWithoutESOPs, setSalaryComponentWithoutESOPs] =
    useState(50000);
  // chart initial state
  const [chartData, setChartData] = useState({
    labels: ["ESOP", "Salary"],
    datasets: [
      {
        label: "Total value",
        data: [totalWorth, salaryComponentWithoutESOPs],
        backgroundColor: ["#6751BE", "#6744CC"],
        barThickness: 35,
      },
    ],
  });
  
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

  // updating the chart data
  const updatedChartData = {
    ...chartData, // Copy the existing chart data
    datasets: [
      {
        ...chartData.datasets[0], // Copy the existing dataset
        data: [totalWorth, salaryComponentWithoutESOPs], // set updated values
      },
    ],
  };


  useEffect(() => {
    // calculating the total worth of ESOPs
    const growthFactor = 1 + growthRate / 100;
    const totalWorth =
      ESOPworth * Math.pow(growthFactor, vestingPeriod) +
      parseInt(salaryComponent);
    setTotalWorth(parseInt(totalWorth));
  }, [ESOPworth, growthRate, vestingPeriod, salaryComponent]);

  // updating the chart data when the total worth changes
  useEffect(() => {
    setChartData(updatedChartData);
  }, [totalWorth, salaryComponentWithoutESOPs]);

  return (
    <div className="Hero-section xs:m-5 p-6 ">
      <h1 className="text-xl uppercase tracking-wide xs:text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7545FF] to-[#96A1FF] ">
        Scenario Calculator (For Employees)
      </h1>
      <p className="text-[#A0A0A0] text-sm sm:text-base md:text-lg leading-4 sm:leading-6 mt-4 md:max-w-[80vw]">
        ESOPs scenario Calculator is an interactive tool designed to assist
        employees in making more informed decisions regarding their compensation
        packages.
      </p>
      <div className="container md:flex justify-around p-4 sm:p-8 border gap-10 mt-5 bg-[#111111] border-border rounded-md min-w-full ">
        <div className="input-container">
          <h3 className="text-sm xs:text-lg  sm:text-xl font-semibold text-[#926DFE]">
          ESOP Worth in additon for Salary Component
          </h3>
          {
            // calculate the ESOP worth in addition to salary component
          }
          <form
            action="submit"
            className="ESOP-calculator text-sm flex flex-col "
          >
            <label htmlFor="ESOP's Worth" className="mt-4 sm:mt-8 mb-2 text-xs sm:font-base">
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

            <label htmlFor="Salary Component " className="mb-2 text-xs sm:font-base">
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
            <h3 className="text-[#926DFE] text-sm xs:text-lg sm:text-xl font-semibold">
              Only Salary component without ESOPs
            </h3>
            <label htmlFor="number" className="mt-6 block mb-2  text-xs sm:font-base">
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
        {
          // Result based on the calculation of the ESOP worth in addition to salary component
        }
        <div className="result-container text-center ">
          <div className="include-esop bg-[#1F1F1F] rounded-md  border-border border-2 p-5  ">
            <h3 className="text-[#AB9BFF] text-sm xs:text-lg sm:text-xl">
              Total salary component including ESOP
            </h3>
            <h1 className="p-2 md:p-4 text-xl xs:text-2xl sm:text-3xl">
              &#8377; {totalWorth}
            </h1>
          </div>
          <div className="before-infilation bg-[#1F1F1F] rounded-md border-border border-2 mt-6 md:mt-8 p-5">
            <h3 className="text-[#AB9BFF] text-sm xs:text-lg sm:text-xl">
              ESOP total worth before infilation
            </h3>
            <h1 className="p-2 md:p-4 text-xl xs:text-2xl sm:text-3xl">
              &#8377; 10000
            </h1>
          </div>
          {
            // Graph container
          }
          <div className="graph-container bg-[#1F1F1F] rounded-md border-border border-2 mt-6 md:mt-8 p-2 md:p-5">
            <div className="flex justify-between items-center">
              <h4 className="text-sm xs:text-base sm:text-lg text-[#926DFE]">
                Wealth Scenario{" "}
              </h4>
              <div className="text-sm sm:text-base">
                <span className="rounded-sm bg-gradient-to-r from-[#926DFE] to-[#6744CC] inline-block h-3 w-3 mr-1 "></span>
                Salary
              </div>
              <div className=" text-sm sm:text-base">
                <span className="rounded-sm bg-gradient-to-r from-[#4f30ac] to-[#6744CC] inline-block h-3 w-3 mr-1 "></span>
                ESOP
              </div>
            </div>

            {chartData ? <Bar data={chartData}></Bar> : null}
            <div className="p-2 md:p-4 bg-[#6744CC] rounded-lg text-white text-xs sm:text-xl xl:text-2xl font-semibold w-full">
              {
                // Display which is better based on the calulations
              }
              {totalWorth > salaryComponentWithoutESOPs
                ? "ESOPs are better choice"
                : "You are better off without ESOPs"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
