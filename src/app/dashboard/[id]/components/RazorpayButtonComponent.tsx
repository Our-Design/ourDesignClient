"use client";

import { useState } from "react";
import Script from "next/script";
import { createOrder } from "@/actions/createOrder";
import { verifyPayment } from "@/actions/verifyPayment";
import { toast } from "sonner";
import { redirect } from "next/navigation";

interface RazorpayPaymentButtonProps {
  amount: number; // in INR
  leadId: string;
  designerId: string;
}

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image: string;
  order_id: string;
  handler: (response: RazorpayResponse) => void;
  prefill: {
    name: string;
    contact: string;
  };
  notes: {
    leadId: string;
    designerId: string;
    source: string;
  };
  theme: {
    color: string;
  };
}

interface RazorpayError {
  error: {
    code: string;
    description: string;
    source: string;
    step: string;
    reason: string;
    metadata: {
      order_id: string;
      payment_id: string;
    };
  };
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void;
      on: (event: string, handler: (err: RazorpayError) => void) => void;
    };
  }
}

const RazorpayPaymentButton = ({
  amount,
  leadId,
  designerId,
}: RazorpayPaymentButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    setLoading(true);
    try {
      const amountInPaise = amount * 100;
      const res = await createOrder({
        amount: amountInPaise,
        leadId,
        designerId,
      });
      const data: { orderId?: string } = res;

      if (!data?.orderId) throw new Error("Order creation failed");

      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: amountInPaise,
        currency: "INR",
        name: "Our Design",
        description: "Buy this lead",
        image: "https://ourdesign.in/logo.png",
        order_id: data.orderId,
        handler: async function (response) {
          // Verify payment on server and assign lead
          const result = await verifyPayment({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            leadId,
            designerId,
          });

          if (!result.success) {
            toast.error(result.message || "Payment verification failed");
            return;
          }

          toast.success("Payment verified! Lead assigned.");
          redirect("/my-leads");
        },
        prefill: {
          name: "Designer Name",
          contact: "9876543210",
        },
        notes: {
          leadId,
          designerId,
          source: "web-app",
        },
        theme: { color: "#011640" },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (err: RazorpayError) => {
        toast.error(err?.error?.description || "Payment failed");
      });

      rzp.open();
    } catch (err: unknown) {
      const error = err as Error;
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <button
        onClick={handleBuy}
        disabled={loading}
        className="bg-primary text-white font-semibold py-2 lg:w-1/2 cursor-pointer hover:scale-101 transition w-full rounded-lg mt-4"
      >
        {loading ? "Processing..." : "Buy Now"}
      </button>
    </>
  );
};

export default RazorpayPaymentButton;
