"use client";

import { Dumbbell, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          <Dumbbell className="h-6 w-6" />
          <span className="font-bold text-xl">Mammothzy</span>
        </div>
        <p className="text-muted-foreground">
          Building stronger teams through engaging activities
        </p>
        <div className="flex space-x-4">
          <Facebook className="h-5 w-5" />
          <Twitter className="h-5 w-5" />
          <Instagram className="h-5 w-5" />
        </div>
        <p className="text-sm text-muted-foreground">
          © 2024 Mammothzy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
