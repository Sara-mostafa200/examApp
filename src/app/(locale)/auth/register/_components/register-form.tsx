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
import { PasswordInput } from "../../_components/password-input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContinueWith from "../../_components/continue-with";
import { registerSchema, TregisterInputs } from "@/lib/schemes/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useRegister from "../_hooks/use-register";


export default function RegisterForm() {
  // hook
  const form = useForm<TregisterInputs>({
    
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
  });

  const {isPending , register}= useRegister()


  


  // function
  const onSubmit: SubmitHandler<TregisterInputs> = (values) => {
    
   register(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Inputs */}
        <div className="flex flex-col gap-8">
          {/*  Username */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                {/* UserName label */}
                <FormLabel className="sr-only"> UserName </FormLabel>

                {/* UserName input */}
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="UserName"
                    className={`login-btn ${
                      form.formState.errors.username && `!border-error`
                    }`}
                  />
                </FormControl>

                {/* Input Message */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* First name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                {/* FirstName label */}
                <FormLabel className="sr-only"> First Name </FormLabel>

                {/* FirstName input */}
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="First Name"
                    className={`login-btn ${
                      form.formState.errors.firstName && `!border-error`
                    }`}
                  />
                </FormControl>

                {/* Input Message */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                {/* LastName label */}
                <FormLabel className="sr-only"> Last Name </FormLabel>

                {/* LastName input */}
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Last Name"
                    className={`login-btn ${
                      form.formState.errors.lastName && `!border-error`
                    }`}
                  />
                </FormControl>

                {/* Input Message */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* Email label */}
                <FormLabel className="sr-only"> Email </FormLabel>

                {/* Email input */}
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Email"
                    className={`login-btn ${
                      form.formState.errors.email && `!border-error`
                    }`}
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
                {/* password label */}
                <FormLabel className="sr-only"> password </FormLabel>

                {/* Password input */}
                <FormControl>
                  <PasswordInput
                    {...field}
                    placeholder={"Password"}
                    className={`${
                      form.formState.errors.password && "!border-error"
                    }`}
                  />
                </FormControl>

                {/* Message */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm password */}
          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                {/* Confirm password label */}
                <FormLabel className="sr-only"> Confirm password </FormLabel>

                {/* ConfirmPassword input */}
                <FormControl>
                  <PasswordInput
                    {...field}
                    placeholder={"Confirm Password"}
                    className={`${
                      form.formState.errors.password && "!border-error"
                    }`}
                  />
                </FormControl>

                {/* Message */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                {/* phone label */}
                <FormLabel className="sr-only"> phone </FormLabel>

                {/* phone input */}
                <FormControl>
                  <Input
                    {...field}
                    className={`login-btn ${
                      form.formState.errors.phone && `!border-error`
                    }`}
                    type="tel"
                    placeholder={"Phone Number"}
                  />
                </FormControl>

                {/* Message */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Link */}
        <span className="text-[#313131] text-base text-center mt-4 block">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-main">
            Login
          </Link>
        </span>

        

        {/* Submit Button */}
        <Button
          className="w-full rounded-[1.25rem] h-[56px] mt-10 "
          disabled={isPending ||(form.formState.isSubmitted && !form.formState.isValid)}
        >
          Create Account
        </Button>

        <ContinueWith />
      </form>
    </Form>
  );
}
