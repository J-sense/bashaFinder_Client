"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginAction } from "@/services/authService";
import { useRouter, useSearchParams } from "next/navigation";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Login = () => {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    formState: { isSubmitting },
  } = form;
  const onSubmit = async (data: { email: string; password: string }) => {
    console.log("Login Data:", data);
    try {
      const res = await LoginAction(data);
      console.log(res);
      if (res?.success) {
        toast.success(res?.message);
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/profile");
        }
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border p-6 rounded w-[400px] mx-auto">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
            name="password"
            rules={{ required: "Password is required" }}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
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

export default Login;
