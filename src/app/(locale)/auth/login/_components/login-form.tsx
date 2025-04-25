"use client";
import { useForm, SubmitHandler } from "react-hook-form";
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
import { PasswordInput } from "../../_components/password-input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContinueWith from "../../_components/continue-with";
import { loginSchema, TloginSchema } from "@/lib/schemes/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { toast } from "sonner";


export default function LoginForm() {
  // hook
  const form = useForm<TloginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // submit handler
  const onSubmit: SubmitHandler<TloginSchema> = async (values) => {
    try{
      const response = await signIn("credentials" , {
      callbackUrl:'/dashboard',
      redirect:false,
      email:values.email,
      password:values.password,
    })

    if(response?.ok){
      window.location.href = response.url || "/dashbord"
    }

    
    if(response?.error){
      throw new Error(response.error)  
      
    }
    }catch(error){
      toast((error as Error).message ,{
        className:"!text-error !text-lg !font-medium"
      })
    }
    
    
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
                {/* Email Label */}
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

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                {/* Password Label */}
                <FormLabel className="sr-only">Enter Password</FormLabel>

                {/* Password input */}
                <FormControl>
                  <PasswordInput
                    className={`${
                      form.formState.errors.password && "!border-error"
                    }`}
                    placeholder={"Password"}
                    {...field}
                  />
                </FormControl>

                {/* Message */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Link */}
        <span className="text-main text-base text-end mt-4 block">
          <Link href="/auth/forgot-password">Recover Password ?</Link>
        </span>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full rounded-[1.25rem] h-[56px] mt-10 "
          disabled={form.formState.isSubmitted && !form.formState.isValid}
        >
          Sign in
        </Button>

        <ContinueWith />
      </form>
    </Form>
  );
}
