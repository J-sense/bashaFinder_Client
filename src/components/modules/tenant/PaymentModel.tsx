/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUser } from "@/components/context/UserContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// import { updateRoleAction } from "@/services/admin";

import { useForm } from "react-hook-form";
// import { toast } from "sonner";

const PaymentModel = ({ paymentData, open, onOpenChange }: any) => {
  console.log(paymentData);
  const form = useForm();
  const { formState: isSubmitting } = form;
  const { user } = useUser();
  console.log(user);
  const onSubmit = async (data: any) => {
    // try {
    //   const res = await updateRoleAction(userInfo._id, data?.role);
    //   console.log(res);
    //   if (res?.success) {
    //     toast.success(res?.message);
    //   } else {
    //     toast.error(res?.message);
    //   }
    // } catch (error) {
    //   console.error("Failed to update role:", error);
    // }
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>

        {/* Role Selection */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Role Selection */}
            <FormField
              control={form.control}
              name="userName"
              rules={{ required: "Username is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={user?.email || ""}
                      className="w-full"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="userName"
              rules={{ required: "Username is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      // value={ || ""}
                      className="w-full"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Buttons */}
            <div className="flex justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="ml-2">
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export { PaymentModel };
