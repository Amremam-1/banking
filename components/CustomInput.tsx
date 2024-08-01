import React from "react"
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form"
import { Input } from "@/components/ui/input"
import { Control, FieldPath } from "react-hook-form"
import { schame } from "@/lib/utils"
import { z } from "zod"

const formSchame = schame("sign-up")

interface IProps {
  control: Control<z.infer<typeof formSchame>>
  name: FieldPath<z.infer<typeof formSchame>>
  palceholder: string
  label: string
}

const CustomInput = ({ control, name, palceholder, label }: IProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>

          <div className="flex flex-col w-full">
            <FormControl>
              <Input
                id={name}
                placeholder={palceholder}
                className="input-class"
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>

            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  )
}

export default CustomInput
