import * as yup from "yup"

export const loginSchema=yup.object({
  email:yup.string().email().required(),
  password:yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 char")
      .matches(/[A-Z]/, "Password must contain an uppercase letter")
      .matches(/[a-z]/, "Password must contain a lowercase letter")  
      .matches(/[0-9]/, "Password must contain a number"),
  })