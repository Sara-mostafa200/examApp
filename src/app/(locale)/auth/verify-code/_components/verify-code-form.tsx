"use client";

import {
  Form,
  FormControl,
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
import ContinueWith from "../../_components/continue-with";
import { TverifySchema, verifySchema } from "@/lib/schemes/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useVerifyCode from "../_hooks/use-verify-code";

export default function VerifyCodeForm() {
  // Form & Validation
  const form = useForm<TverifySchema>({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      resetCode:'',
    }
  });

  const { isPending , verifyCode } = useVerifyCode()

  // onSubmit Function
  const onSubmit: SubmitHandler<TverifySchema> = (values) => {
    verifyCode(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Inputs */}
        <div className="flex flex-col gap-8">
          {/* Code */}
          <FormField
            control={form.control}
            name="resetCode"
            render={({ field }) => (
              <FormItem>
                {/* Verify code Label  */}
                <FormLabel className="sr-only">Enter Code</FormLabel>
                {/* Verify code input */}
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter Code"
                    {...field}
                    className={`login-btn ${
                      form.formState.errors.resetCode && `!border-error`
                    }`}
                  />
                </FormControl>

                {/* Input Message */}
                <FormMessage />
              </FormItem>
            )}
          />

        </div>

        {/* Link */}
        <span
          className="text-gray-900 text-base text-end mt-4 block"
        >
          Didn’t receive a code? <Link href="/auth/login" className="text-custom-main">Resend</Link>
        </span>

        {/* Button */}
        <Button className="w-full rounded-2xl h-14 mt-10" disabled={isPending || (form.formState.isSubmitted && !form.formState.isValid)}>
          Verify
        </Button>

        {/* Continue with */}
        <ContinueWith/>
      </form>
    </Form>
  );
}
