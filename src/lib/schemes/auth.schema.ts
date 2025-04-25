import { z } from "zod";

// schemes
export const registerSchema = z
  .object({
    username: z
      .string({ required_error: " Please Enter Your Username " })
      .min(1, " Please Enter Your Username ")
      .min(2, " Username Must Be At Least 2 Characters")
      .max(10, " Username Cannot Exceed 10 Characters"),

    firstName: z
      .string({ required_error: " Please Enter Your Firstname " })
      .min(1, " Please Enter Your Firstname ")
      .min(2, " Firstname Must Be At Least 2 Characters ")
      .max(10, "Firstname Cannot Exceed 10 Characters"),

    lastName: z
      .string({ required_error: " Please Enter Your Lastname " })
      .min(1, " Please Enter Your Lastname ")
      .min(2, " Lastname Must Be At Least 2 Characters ")
      .max(10, " Lastname Cannot Exceed 10 Characters  "),

    email: z
      .string({ required_error: " Please Enter Your Email " })
      .min(1, " Please Enter Your Email ")
      .email(" Please Enter Valid Email "),

    password: z
      .string({ required_error: " Please Enter Password " })
      .min(1, " Please Enter Password ")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "The password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long"
      ),

    rePassword: z
      .string({ required_error: " Please Enter Password Confirmation " })
      .min(1, " Please Enter Password Confirmation "),

    phone: z
      .string({ required_error: " Please Enter Phone Nunmder  " })
      .min(1, " Please Enter Phone Nunmder  ")
      .regex(/^01[0125][0-9]{8}$/,"Please Enter Valid Phone Number")
  })
  .refine((values) => values.password === values.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Please Enter Your Email" })
    .min(1, "Please Enter Your Email"),
  password: z
    .string({ required_error: " Please Enter Password " })
    .min(1, " Please Enter Password "),
});

export const forgetPasswordSchema = loginSchema.pick({ email: true });

export const verifySchema = z.object({
  resetCode: z
    .string({ required_error: " Please Enter Reset Code " })
    .min(1, " Please Enter Reset Code ")
    .min(6, "Reset code must be at least 6 digits long"),
});

export const setPasswordSchema = z.object({
  email: z
    .string({ required_error: "Please Enter Your Email" })
    .min(1, "Please Enter Your Email"),
  newPassword: z
    .string({ required_error: " Please Enter Password " })
    .min(1, " Please Enter Password ")
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
      "The password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long"
    ),
});


// schemes types
export type TloginSchema = z.infer<typeof loginSchema>;
export type TregisterInputs = z.infer<typeof registerSchema>;
export type TforgetPasswordSchema = z.infer<typeof forgetPasswordSchema>;
export type TverifySchema = z.infer<typeof verifySchema>;
export type TsetPasswordSchema = z.infer<typeof setPasswordSchema>
