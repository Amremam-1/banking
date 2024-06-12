"use client"

import CountUp from "react-countup"

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <CountUp
      className="w-full"
      duration={2}
      decimals={2}
      decimal=","
      prefix="EGP "
      end={amount}
    />
  )
}

export default AnimatedCounter
