import MobileNavbar from "@/components/MobileNavbar"
import SideBar from "@/components/SideBarCompoant"
import Image from "next/image"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const loggedIn = { firstName: "Amr", lastName: "Emam" }
  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />

      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image
            src={"/icons/logo.svg"}
            alt="logo"
            width={30}
            height={30}
          />

          <div>
            <MobileNavbar user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  )
}
