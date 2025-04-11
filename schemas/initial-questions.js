import { z } from "zod";

export const initialQuestionsSchema = z.object({
  fullName: z.string().min(1, { message: "Full Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  startupName: z.string().min(1, { message: "Startup Name is required." }),
  startupCountry: z.string().min(1, { message: "Startup Country is required." }),
  businessDescription: z
    .string()
    .min(1, { message: "Business Description is required." })
    .max(50, { message: "Business Description cannot exceed 50 characters." }),
  startupWebsiteUrl: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || /^(https?:\/\/|www\.)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(:\d+)?(\/.*)?$/.test(val), {
      message: "Please enter a valid URL starting with 'http://', 'https://', or 'www.'.",
    }),
  stage: z.string().min(1, { message: "Startup Stage is required." }),
  industry: z.string().min(1, { message: "Industry Vertical is required." }),
  region: z.string().min(1, { message: "Region is required." }),
});

export const step1Schema = initialQuestionsSchema.pick({
  fullName: true,
  email: true,
  startupName: true,
  startupCountry: true,
  businessDescription: true,
  startupWebsiteUrl: true,
});

export const step2Schema = initialQuestionsSchema.pick({
  stage: true,
  industry: true,
  region: true,
});
