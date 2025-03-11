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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"; // Assuming you have Select from shadcn
import { registration } from "@/services/authService";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const Register = () => {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      role: "", // Default role
    },
  });
  const {
    formState: { isSubmitting },
  } = form;
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const userInfo = {
        username: data.userName,
        email: data.email,
        password: data.password,
        role: data.role,
      };
      const res = await registration(userInfo);
      console.log(res);
      if (res.success) {
        toast(res.message);
        router.push("/login");
      } else {
        toast(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" rounded w-[400px] mx-auto border p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Username Field */}
          <FormField
            control={form.control}
            name="userName"
            rules={{ required: "Username is required" }}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value || ""}
                    className="w-full"
                  />
                </FormControl>
                {fieldState?.error && (
                  <FormMessage>{fieldState.error.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            rules={{ required: "Email is required" }}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value || ""}
                    className="w-full"
                  />
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
                  <Input
                    {...field}
                    value={field.value || ""}
                    type="password"
                    className="w-full"
                  />
                </FormControl>
                {fieldState?.error && (
                  <FormMessage>{fieldState.error.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          {/* Role Field (Select dropdown from shadcn) */}
          <FormField
            control={form.control}
            name="role"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="landlord">Landlord</SelectItem>
                      <SelectItem value="tenant">Tenant</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                {fieldState?.error && (
                  <FormMessage>{fieldState.error.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            {isSubmitting ? "Registering..." : "Register"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Register;
