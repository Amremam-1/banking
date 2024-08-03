import Image from "next/image"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="w-full h-screen flex items-center justify-end sticky top-0 bg-sky-1 max-lg:hidden">
        <div>
          <Image
            src="/icons/auth-image.svg"
            alt="auth"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  )
}
