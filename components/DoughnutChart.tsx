"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
ChartJS.register(ArcElement, Tooltip, Legend)

interface DoughnutChartProps {
  accounts: Account[]
}

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Accounts",
        data: [800, 6000, 1250, 2500],
        backgroundColor: ["#0179FE", "#4893FF", "#85B7FF", "#BED9FF"],
      },
    ],
    labels: [
      "Banque Misr",
      "QNB Al Ahli",
      "Banque Du Caire",
      "National Bank",
    ],
  }
  return (
    <Doughnut
      data={data}
      options={{
        cutout: "70%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  )
}

export default DoughnutChart
