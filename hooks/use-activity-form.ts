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
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  contactName?: string;
  contactNumber?: number;
  zipcode?: string;
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
