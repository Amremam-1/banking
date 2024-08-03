"use client"

import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Footer from "./Footer"

//  const sidebarLinks = [
//   {
//     imgURL: "/icons/home.svg",
//     route: "/",
//     label: "Home",
//   },
//   {
//     imgURL: "/icons/dollar-circle.svg",
//     route: "/my-banks",
//     label: "My Banks",
//   },
//   {
//     imgURL: "/icons/transaction.svg",
//     route: "/transaction-history",
//     label: "Transaction History",
//   },
//   {
//     imgURL: "/icons/money-send.svg",
//     route: "/payment-transfer",
//     label: "Transfer Funds",
//   },
// ];

const SideBar = ({ user }: SiderbarProps) => {
  // function for change className

  // import { type ClassValue, clsx } from "clsx";
  // import { twMerge } from "tailwind-merge";

  // export function cn(...inputs: ClassValue[]) {
  //   return twMerge(clsx(inputs));
  // }

  const pathname = usePathname()

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="flex items-center mb-12 cursor-pointer gap-2">
          <Image
            src={"/icons/logo.svg"}
            width={34}
            height={34}
            alt="horizon logo"
            className="size-[24px] max-xl:size-14"
          />

          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`)

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", {
                "bg-bank-gradient": isActive,
              })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          )
        })}
        USER
      </nav>
      <Footer user={user} type="mobile" />
    </section>
  )
}

export default SideBar
