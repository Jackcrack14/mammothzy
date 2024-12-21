"use client";

import { ActivityForm } from "@/components/activity-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] p-6">
      <div className="mx-auto max-w-[1128px]">
        <h1 className="text-[28px] font-semibold text-[#1D2939] mb-8">
          Create an Activity
        </h1>
        <ActivityForm />
      </div>
    </main>
  );
}