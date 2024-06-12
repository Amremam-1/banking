import CountUp from "react-countup"
import AnimatedCounter from "./AnimatedCounter"
import DoughnutChart from "./DoughnutChart"

interface TotlaBalanceBoxProps {
  accounts: Account[]
  totalBanks: number
  totalCurrentBalance: number
}

// function to formating Currency  !!! important

// function formatingAmount(amount: number): string {
//   const formatter = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "EGP",
//     minimumFractionDigits: 2,
//   })

//   return formatter.format(amount)
// }

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounds: {totalBanks}</h2>

        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>
          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TotalBalanceBox
