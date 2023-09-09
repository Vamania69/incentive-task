import React, { useEffect, useState } from 'react'
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
  } from "chart.js";
  
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement
  );
export const WealthChart = ({totalWorth, salaryComponentWithoutESOPs}) => {

    const [chartData, setChartData] = useState({
        labels: ["ESOP", "Salary"],
        datasets: [
          {
            label: "Total value",
            data: [totalWorth, salaryComponentWithoutESOPs],
            backgroundColor: ["#6751BE", "#6744CC", "#4F30AC"],
            barThickness: 35,
          },
        ],
      });

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

  // updating the chart data when the total worth changes
  useEffect(() => {
    // set updated data to chart
    setChartData(updatedChartData);
  }, [totalWorth, salaryComponentWithoutESOPs]);

  return (
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
    <div className="p-2 md:p-4 bg-[#6744CC]   rounded-lg text-white text-xs sm:text-base xl:text-2xl font-semibold w-full">
      {
        // Display which is better based on the calulations
      }
      {totalWorth > salaryComponentWithoutESOPs
        ? "ESOPs are better choice"
        : "You are better off without ESOPs"}
    </div>
  </div>
  )
}
