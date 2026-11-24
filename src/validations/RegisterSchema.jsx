import * as yup from "yup"

export const registerSchema = yup.object({
  userName: yup.string().required("Username is required").min(4, 'Username must be at least 4 char').max(15),
  fullName: yup.string().required("Full name is required").min(4, 'Fullname must be at least 4 char'),
  email: yup.string().required("Email is required").email("Invalid email format"),
  
  password: yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 char")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/[a-z]/, "Password must contain a lowercase letter")  
    .matches(/[0-9]/, "Password must contain a number"),

  phoneNumber: yup.string()
    .required("PhoneNumber is required")
    .matches(/^05\d{8}$/, "PhoneNumber must start with 05 and be 10 digits")
})