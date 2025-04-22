"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PasswordInput } from "../../_components/password-input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContinueWith from "../../_components/continue-with";
import { Input } from "@/components/ui/input";
import { setPasswordSchema, TsetPasswordSchema } from "@/lib/schemes/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useSetPassword from "../_hooks/use-set-password";

export default function SetPasswordForm() {
  // hook
  const form = useForm<TsetPasswordSchema>({
    resolver:zodResolver(setPasswordSchema),
    defaultValues:{
      email:'',
      newPassword:''
    }
  });

  const {isPending , setPassword} = useSetPassword()

  // onSubmit function
  const onSubmit:SubmitHandler<TsetPasswordSchema> = (values) => {
    
    setPassword(values)

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Inputs */}
        <div className="flex flex-col gap-8">
          {/* email  */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* email label */}
                <FormLabel className="sr-only">Enter Email</FormLabel>

                {/* email input */}
                <FormControl>
                  <Input
                    placeholder="Enter Email"
                    type="email"
                    {...field}
                    className={`login-btn ${
                      form.formState.errors.email && `!border-error`
                    }`}
                  />
                </FormControl>

                {/* Message */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Re-set Password */}
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                {/* Password label */} 
                <FormLabel className="sr-only">Reset Password</FormLabel>

                {/* Password input */}
                <FormControl>
                  <PasswordInput
                    placeholder={"Reset Password"}
                    {...field}
                    className={`${
                      form.formState.errors.newPassword && "!border-error"
                    }`}
                  />
                </FormControl>

                {/* Message */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Button */}
        <Button className="w-full rounded-[1.25rem] h-[56px] mt-10 " disabled={isPending||(form.formState.isSubmitted && !form.formState.isValid)}>
          <Link href="/auth/login">Sign in</Link>
        </Button>

        {/* Continue With  */}
        <ContinueWith />
      </form>
    </Form>
  );
}
