import Image from "next/image"
import Link from "next/link"
import BankCard from "./BankCard"

// declare type User = {
//   $id: string
//   email: string
//   userId: string
//   dwollaCustomerUrl: string
//   dwollaCustomerId: string
//   firstName: string
//   lastName: string
//   name: string
//   address1: string
//   city: string
//   state: string
//   postalCode: string
//   dateOfBirth: string
//   ssn: string
// }

interface sideBarProps {
  user: User
  transactions: Transaction[]
  banks: Account[] & Bank[]
}

const RightSideBar = ({ user, transactions, banks }: sideBarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />

        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500 ">
              {user.name[0]}
            </span>
          </div>

          <div className="profile-details">
            <h1 className="profile-name">{user.name}</h1>

            <p className="profile-email">{user.email}</p>
          </div>
        </div>
      </section>

      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">MyBanks</h2>

          <Link href="/" className="flex gap-2">
            <Image src={"/icons/plus.svg"} width={20} height={20} alt="plus" />

            <h2 className="text-14 font-semibold text-gray-600">Add Bank</h2>
          </Link>
        </div>

        {banks.length > 0 && (
          <div className="relative flex flex-1 flex-col justify-center items-center gap-5">
            <div className="relative z-10">
              <BankCard
                key={banks[0].$id}
                account={banks[0]}
                userName={user.name}
                showBalance={false}
              />
            </div>

            {banks[1] && (
              <div className="absolute top-8 right-0 w-[90%] z-0">
                <BankCard
                  key={banks[1].$id}
                  account={banks[1]}
                  userName={user.name}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  )
}

export default RightSideBar
