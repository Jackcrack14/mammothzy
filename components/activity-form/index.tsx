"use client";

import { useState } from "react";
import { ActivityDetails } from "./activity-details";
import { LocationDetails } from "./location-details";
import { FormTabs } from "./form-tabs";
import { SuccessModal } from "./success-modal";
import { useActivityForm } from "@/hooks/use-activity-form";

export function ActivityForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { formData, updateFormData, resetForm } = useActivityForm();

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const handleSubmit = (data: any) => {
    console.log("Form submitted with data:", { ...formData, ...data });
    setShowSuccessModal(true);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    resetForm();
    setActiveTab(0);
  };

  return (
    <div className="bg-white rounded-lg border border-[#EAECF0] p-6">
      <div className="flex gap-8">
        <FormTabs activeTab={activeTab} onTabChange={handleTabChange} />
        <div className="flex-1 pt-4">
          {activeTab === 0 ? (
            <ActivityDetails 
              onNext={() => setActiveTab(1)} 
              initialData={formData}
              onSave={updateFormData}
            />
          ) : (
            <LocationDetails 
              onBack={() => setActiveTab(0)}
              initialData={formData}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
      <SuccessModal open={showSuccessModal} onClose={handleCloseModal} />
    </div>
  );
}