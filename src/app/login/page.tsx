import { Suspense } from "react";
import Login from "@/components/modules/auth/register/Login";

export default function LoginPage() {
  return (
    <div className="h-screen flex w-screen justify-center items-center p-3 md:p-0">
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    </div>
  );
}
