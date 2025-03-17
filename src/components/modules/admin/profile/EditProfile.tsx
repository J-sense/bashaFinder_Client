/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { TUser } from "@/types";
import { updateProfile } from "@/services/admin";
import { toast } from "sonner";
import { useState } from "react";
// import { alluser, updateCredential } from "@/services/admin";

const EditProfile = ({ user }: { user: TUser }) => {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    defaultValues: {
      email: user?.email || "",
      username: user?.username || "", // Set default email if available
    },
  });
  type TupdateData = {
    username: string;
    email: string;
  };
  // const { formState: isSubmitting } = form;
  const onSubmit = async (info: any) => {
    try {
      setLoading(true);
      const updateData: TupdateData = {
        username: info.username,
        email: info.email,
      };

      const res = await updateProfile(updateData, user._id);
      console.log(res.message);
      if (res?.success) {
        toast.success(res?.message);
        setLoading(false);
      } else {
        toast.error(res?.message);
        setLoading(false);
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
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
            name="username"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value || ""}
                    type="text"
                    autoComplete="off"
                  />
                </FormControl>
                {fieldState?.error && (
                  <FormMessage>{fieldState.error.message}</FormMessage>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value || ""}
                    type="email"
                    autoComplete="off"
                  />
                </FormControl>
                {fieldState?.error && (
                  <FormMessage>{fieldState.error.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            {loading ? "changing..." : "change"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EditProfile;
