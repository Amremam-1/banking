"use client"

import Link from "next/link"
import React from "react"
import Image from "next/image"
import { useState } from "react"
import { z } from "zod"
import { FieldValue, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomInput from "./CustomInput"
import { Loader2 } from "lucide-react"

const schame = z.object({
  // Sign up
  firstname: z.string().min(3),
  lastName: z.string().min(3),
  address1: z.string().min(3),
  state: z.string().max(2).min(2),
  postalcode: z.string().min(3).max(6),
  dataofbirth: z.string().min(3),
  ssn: z.string().min(3),

  // Both
  email: z.string().email(),
  password: z.string().min(8),
})

export type formData = z.infer<typeof schame>

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<formData>({
    resolver: zodResolver(schame),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (data: FieldValue<formData>) => {
    setIsLoading(true)
    console.log(data)
    setIsLoading(false)
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex cursor-pointer gap-1">
          <Image
            src={"/icons/logo.svg"}
            alt="horizon logo"
            width={34}
            height={34}
          />

          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Log In" : "Sign Up"}
          </h1>

          <p>
            {user
              ? "Link your account to get started"
              : "Welcome back! Please enter your details."}
          </p>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col">{/* Plaid Link*/}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      label="First Name"
                      name="firstname"
                      placeholder="Enter your first name"
                    />
                    <CustomInput
                      control={form.control}
                      label="Last Name"
                      name="lastName"
                      placeholder="Enter your last name"
                    />
                  </div>

                  <CustomInput
                    control={form.control}
                    label="Address"
                    name="address1"
                    placeholder="Enter your specific address"
                  />

                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      label="State"
                      name="state"
                      placeholder="ex: NY"
                    />
                    <CustomInput
                      control={form.control}
                      label="Postal Code"
                      name="postalcode"
                      placeholder="ex: 11101"
                    />
                  </div>

                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      label="Date of Birth"
                      name="dataofbirth"
                      placeholder="YYYY-MM-DD"
                    />
                    <CustomInput
                      control={form.control}
                      label="SSN"
                      name="ssn"
                      placeholder="ex: 1234"
                    />
                  </div>
                </>
              )}

              <CustomInput
                control={form.control}
                label="Email"
                name="email"
                placeholder="Enter your email"
              />
              <CustomInput
                control={form.control}
                label="Password"
                name="password"
                placeholder="Enter your password"
              />

              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      &nbsp;Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Login"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>

              <div className="flex gap-1 justify-center">
                <p className="text-14 text-normal text-gray-600">
                  {type === "sign-in"
                    ? "Don’t have an account?"
                    : "Already have an account?"}
                </p>
                <Link
                  href={type === "sign-in" ? "/sign-up" : "/sign-in"}
                  className="form-link"
                >
                  {type === "sign-in" ? "Login" : "Sign Up"}
                </Link>
              </div>
            </form>
          </Form>
        </>
      )}
    </section>
  )
}

export default AuthForm
