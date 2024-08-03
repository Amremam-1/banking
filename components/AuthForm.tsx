"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import CustomInput from "./CustomInput"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Loader2 } from "lucide-react"
import { schame } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { signUp, signIn } from "@/lib/actions/user.actions"

interface IProps {
  type: string
}

const AuthForm = ({ type }: IProps) => {
  const router = useRouter()

  const [user, setUser] = useState(null)

  const [isLoading, setIsLoading] = useState(false)

  const formSchame = schame(type)

  //  Define form
  const form = useForm<z.infer<typeof formSchame>>({
    resolver: zodResolver(formSchame),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchame>) => {
    setIsLoading(true)

    try {
      // Sign up with appWrite && create plain link token

      if (type === "sign-up") {
        const newUser = await signUp(data)
        setUser(newUser)
      }

      if (type === "sign-in") {
        const response = await signIn({
          email: data.email,
          password: data.password,
        })

        if (response) router.push("/")
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex items-center mb-12 cursor-pointer gap-1">
          <Image
            src={"/icons/logo.svg"}
            width={35}
            height={35}
            alt="horizon logo"
          />

          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Log in" : "Sign up"}
          </h1>

          <p className="text-16 font-normal text-gray-600">
            {user === "sign-in"
              ? "Welcome back! Please enter your details."
              : "Please enter your details."}
          </p>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col gap-4">{/* PlaidLink */}</div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {type === "sign-up" && (
              <>
                <div className="flex gap-4">
                  <CustomInput
                    control={form.control}
                    name="firstName"
                    palceholder="ex: name"
                    label="First Name"
                  />
                  <CustomInput
                    control={form.control}
                    name="lastName"
                    palceholder="ex: Doe"
                    label="Last Name"
                  />
                </div>
                <CustomInput
                  control={form.control}
                  name="address1"
                  palceholder="Enter your address"
                  label="Address"
                />
                <CustomInput
                  control={form.control}
                  name="city"
                  palceholder="Enter your city"
                  label="City"
                />

                <div className="flex gap-4">
                  <CustomInput
                    control={form.control}
                    name="state"
                    palceholder="ex: NY"
                    label="State"
                  />

                  <CustomInput
                    control={form.control}
                    name="postalcode"
                    palceholder="ex: 11101"
                    label="Postal Code"
                  />
                </div>
                <div className="flex gap-4">
                  <CustomInput
                    control={form.control}
                    name="dateofbirth"
                    palceholder="YYYY-MM-DD"
                    label="Date of Birth"
                  />
                  <CustomInput
                    control={form.control}
                    name="ssn"
                    palceholder="ex: 1234"
                    label="SSN"
                  />
                </div>
              </>
            )}

            <CustomInput
              control={form.control}
              name="email"
              palceholder="Enter your email"
              label="Email"
            />

            <CustomInput
              control={form.control}
              name="password"
              palceholder="Enter your password"
              label="Password"
            />

            <div className="flex flex-col gap-4">
              <Button type="submit" className="form-btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> &nbsp;
                    Loading...
                  </>
                ) : type === "sign-in" ? (
                  "Login"
                ) : (
                  "Sign Up"
                )}
              </Button>
            </div>
          </form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 text-normal text-gray-600">
              {type === "sign-in"
                ? "Don’t have an account?"
                : "Already have an account?"}
            </p>

            <Link
              href={type === "sign-in" ? "/sign-up" : "sign-in"}
              className="form-link"
            >
              {type === "sign-in" ? "Login" : "Sign Up"}
            </Link>
          </footer>
        </Form>
      )}
    </section>
  )
}

export default AuthForm

// function signin(arg0: { email: string; password: string }) {
//   throw new Error("Function not implemented.")
// }
