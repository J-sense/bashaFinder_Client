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
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useMemo } from "react";
import Link from "next/link";
import { useUser } from "@/components/context/UserContext";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Magnet } from "lucide-react";

const Login = () => {
  const searchParams = useSearchParams();
  const redirect = useMemo(
    () => searchParams.get("redirectPath"),
    [searchParams]
  );
  const router = useRouter();
  const { setIsLoading } = useUser();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;
  const handleLandlord = async () => {
    try {
      const data = {
        email: "ji2184shan@gmail.com",
        password: "jishan",
      };
      const res = await LoginAction(data);
      if (res?.success) {
        toast.success(res?.message);
        if (redirect) {
          router.push(redirect);
          setIsLoading(true);
        } else {
          router.push("/profile");
          setIsLoading(true);
        }
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred during login");
    }
  };
  const handleAdmin = async () => {
    try {
      const data = {
        email: "admin@gmail.com",
        password: "admin123",
      };
      const res = await LoginAction(data);
      if (res?.success) {
        toast.success(res?.message);
        if (redirect) {
          router.push(redirect);
          setIsLoading(true);
        } else {
          router.push("/profile");
          setIsLoading(true);
        }
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred during login");
    }
  };
  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await LoginAction(data);
      if (res?.success) {
        toast.success(res?.message);
        if (redirect) {
          router.push(redirect);
          setIsLoading(true);
        } else {
          router.push("/profile");
          setIsLoading(true);
        }
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred during login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-center">
            <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
            <p className="text-blue-100 mt-2">Sign in to access your account</p>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">
                        Email Address
                      </FormLabel>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="your@email.com"
                            className="pl-10 w-full"
                          />
                        </FormControl>
                      </div>
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
                      <FormLabel className="text-gray-700 dark:text-gray-300">
                        Password
                      </FormLabel>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <FormControl>
                          <Input
                            {...field}
                            type="password"
                            placeholder="••••••••"
                            className="pl-10 w-full"
                          />
                        </FormControl>
                      </div>
                      {fieldState?.error && (
                        <FormMessage>{fieldState.error.message}</FormMessage>
                      )}
                    </FormItem>
                  )}
                />

                {/* Forgot Password Link */}
                <div className="flex justify-end">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <Button
                    type="submit"
                    className="w-full mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Signing in..."
                    ) : (
                      <div className="flex items-center">
                        Sign In <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                  OR
                </span>
              </div>
            </div>

            {/* Social Login Options */}
            <div className="grid grid-cols-2 gap-4" onClick={handleAdmin}>
              <Button variant="outline" className="w-full">
                {/* <path
                    d="M12 0C5.372 0 0 5.373 0 12c0 6.016 4.432 10.984 10.206 11.852V15.18H7.237v-3.154h2.969V9.927c0-3.475 1.693-5 4.581-5 1.383 0 2.115.103 2.461.149v2.753h-1.97c-1.226 0-1.654 1.163-1.654 2.473v1.724h3.593l-.487 3.154h-3.106v8.697C19.481 23.082 24 18.075 24 12c0-6.627-5.373-12-12-12z"
                    fill="#1877F2"
                  />
                </svg> */}
                <Magnet />
                login as a admin
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleLandlord}
              >
                <Magnet />
                Login as Landlord
              </Button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Don&lsquo;t have an account?{" "}
                <Link
                  href="/register"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
