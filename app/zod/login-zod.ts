import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});


export const accessCodeSchema = z.object({
  accessCode: z
    .string()
    .regex(/^\w{3}-\w{3}$/, 'Access code must be in the format XXX-XXX'),
});
