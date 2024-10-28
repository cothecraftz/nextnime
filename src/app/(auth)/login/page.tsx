import Login from "@/components/Fragments/Login";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import { Suspense } from "react";

const LoginPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          <Login />
        </Suspense>
      </div>
    </div>
  );
};

export default LoginPage;
