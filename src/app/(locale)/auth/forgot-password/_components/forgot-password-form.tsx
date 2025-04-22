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
import { Input } from "@/components/ui/input";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ContinueWith from "../../_components/continue-with";
import {
  forgetPasswordSchema,
  TforgetPasswordSchema,
} from "@/lib/schemes/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useForgotPassword from "../_hooks/use-forgot-password";

export default function ForgotPasswordForm() {
  // hook
  const form = useForm<TforgetPasswordSchema>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const { isPending, ForgotPassword } = useForgotPassword();

  // onSubmit function
  const onSubmit: SubmitHandler<TforgetPasswordSchema> = (values) => {
    ForgotPassword(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Inputs */}
        <div className="flex flex-col gap-8">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* Form Label */}
                <FormLabel className="sr-only">Enter Email</FormLabel>

                {/* Email input */}
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter Email"
                    className={`login-btn ${
                      form.formState.errors.email && `!border-error`
                    }`}
                    {...field}
                  />
                </FormControl>

                {/* Input Message */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Link */}
        <span className="text-main text-base text-end mt-4 block">
          <Link href="/auth/login">Remember Password ?</Link>
        </span>

        {/* Button */}
        <Button
          className="w-full rounded-[1.25rem] h-[56px] mt-10 "
          disabled={
            isPending || (form.formState.isSubmitted && !form.formState.isValid)
          }
        >
          Get Code
        </Button>

        <ContinueWith />
      </form>
    </Form>
  );
}
