import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export function SuccessModal({ open, onClose }: SuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <div className="mx-auto w-12 h-12 bg-[#ECFDF3] rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-6 h-6 text-[#12B76A]" />
          </div>
          <DialogTitle className="text-center text-[#101828] text-lg font-semibold">
            Activity Created Successfully
          </DialogTitle>
        </DialogHeader>
        <p className="text-center text-[#475467]">
          Your activity has been created successfully. You can view and manage your
          activities from the dashboard.
        </p>
      </DialogContent>
    </Dialog>
  );
}