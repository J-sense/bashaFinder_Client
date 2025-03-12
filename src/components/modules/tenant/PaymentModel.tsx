/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { loadStripe } from "@stripe/stripe-js";
import { useUser } from "@/components/context/UserContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { orderAction } from "@/services/admin";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { orderAction } from "@/services/admin";

// Load Stripe with the publishable key
const stripePromise = loadStripe(
  "pk_test_51R0cEKLJ6NnJkDHDAvhwDIv2R7SAzLznZxTDXbR4KmNO9dG71pyiMcHVyzUPJ98KP5ftCamkSctTiMkcaD43qx0f00Fdlko1LE"
);

const PaymentModal = ({ paymentData, open, onOpenChange }: any) => {
  const rentAmount = paymentData?.rentAmount;
  const { user } = useUser();
  const form = useForm();
  const [loading, setLoading] = useState(false);
  type Tpayment = {
    userId: string | undefined;
    amount: number;
  };

  const onSubmit = async () => {
    setLoading(true);
    try {
      const paymentInfo: Tpayment = {
        userId: user?.email,
        amount: rentAmount,
      };

      // Request to backend to create a Stripe checkout session
      const response = await orderAction(paymentInfo);

      if (response?.sessionId) {
        const stripe = await stripePromise;
        if (stripe) {
          await stripe.redirectToCheckout({ sessionId: response.sessionId });
        }
      }
    } catch (error) {
      console.error("Payment Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Payment</DialogTitle>
        </DialogHeader>

        {/* Payment Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="userName"
              render={() => (
                <FormItem>
                  <FormLabel>User Email</FormLabel>
                  <Input
                    value={user?.email || ""}
                    disabled
                    className="w-full"
                  />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Amount"
              render={() => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <Input value={rentAmount || ""} disabled className="w-full" />
                </FormItem>
              )}
            />

            {/* Buttons */}
            <div className="flex justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button type="submit" className="ml-2" disabled={loading}>
                {loading ? "Processing..." : "Pay Now"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export { PaymentModal };
