"use client";

import { useForm } from "react-hook-form";


import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const ChangePasswordForm = () => {
  const form = useForm();
  const { formState: isSubmitting } = form;
  const onSubmit = (data: any) => {
    console.log("Updated Info:", data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-white p-6 shadow-lg rounded-lg w-96 space-y-4"
        >
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            rules={{ required: "Email is required" }}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ""} type="email" />
                </FormControl>
                {fieldState?.error && (
                  <FormMessage>{fieldState.error.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="OldPassword"
            rules={{ required: "Password is required" }}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Previous Password</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ""} type="password" />
                </FormControl>
                {fieldState?.error && (
                  <FormMessage>{fieldState.error.message}</FormMessage>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="New password"
            rules={{ required: "Password is required" }}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ""} type="password" />
                </FormControl>
                {fieldState?.error && (
                  <FormMessage>{fieldState.error.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            {isSubmitting ? "Logging..." : "Login"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ChangePasswordForm;
