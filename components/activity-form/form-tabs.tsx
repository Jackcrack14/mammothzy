"use client";

import { cn } from "@/lib/utils";
import { MapPin, ClipboardList } from "lucide-react";

interface FormTabsProps {
  activeTab: number;
  onTabChange: (index: number) => void;
}

export function FormTabs({ activeTab, onTabChange }: FormTabsProps) {
  const tabs = [
    { 
      label: "Activity Details", 
      id: 0,
      icon: ClipboardList 
    },
    { 
      label: "Location Details", 
      id: 1,
      icon: MapPin
    },
  ];

  return (
    <div className="w-64 border-r border-[#EAECF0] pr-6">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "w-full flex items-center gap-3 p-4 rounded-lg mb-2 transition-colors",
              activeTab === tab.id
                ? "bg-[#F9FAFB] text-[#1D2939] font-medium"
                : "text-[#667085] hover:bg-[#F9FAFB]"
            )}
          >
            <Icon className="w-5 h-5" />
            <span>{tab.label}</span>
          </button>
        )})}
    </div>
  );
}