import * as z from "zod";

export const activitySchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  type: z.string().min(1, "type is required"),
  location: z.string().min(1, "location is required"),
  minMembers: z.number().min(1, "Minimum members is required"),
  maxMembers: z.number().min(1, "Maximum members is required"),
});

export const locationSchema = z.object({
  address1: z.string().min(1, "Address is required"),
  address2: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  contactName: z.string().min(1, "Contact Name is required"),
  contactNumber: z.number().min(1, "Contact Number is required"),
  zipcode: z.string().min(1, "Zipcode is required"),
});
