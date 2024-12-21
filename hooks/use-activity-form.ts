"use client";

import { useState } from "react";

export interface ActivityFormData {
  title?: string;
  description?: string;
  category?: string;
  minMembers?: number;
  maxMembers?: number;
  type?: string;
  location?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  pincode?: string;
}

export function useActivityForm() {
  const [formData, setFormData] = useState<ActivityFormData>({});

  const updateFormData = (data: Partial<ActivityFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const resetForm = () => {
    setFormData({});
  };

  return {
    formData,
    updateFormData,
    resetForm,
  };
}
