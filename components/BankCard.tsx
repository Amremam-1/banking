import { formatAmount } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface CardProps {
  account: Account
  userName: string
  showBalance: Boolean
}

const BankCard = ({ account, userName, showBalance = true }: CardProps) => {
  return (
    <div className="flex felx-col">
      <Link href="/" className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 text-white font-semibold">
              {account.name || userName}
            </h1>

            <p className=" text-white font-ibm-plex-serif font-black">
              {formatAmount(account.currentBalance)}
            </p>
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-white text-12 font-semibold">{userName}</h1>
              <h2 className="text-white text-12 font-semibold">●● / ●●</h2>
            </div>

            <p className="text-14 text-white font-semibold tracking-[1.1px]">
              ●●●● ●●●● ●●●●
              <span className="text-white text-16"> 1234</span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image src={"/icons/Paypass.svg"} alt="pay" width={20} height={24} />

          <Image
            src={"/icons/mastercard.svg"}
            width={45}
            height={32}
            alt="mastercard"
            className="ml-5"
          />
        </div>
        <Image
          src={"/icons/lines.png"}
          width={316}
          height={190}
          alt="lines"
          className="absolute top-0 left-0"
        />
      </Link>
    </div>
  )
}

export default BankCard
