// admin: code verify

import SubmitPasswordForm from "@/components/forms/SubmitPasswordForm";
import VerifyPhoneForm from "@/components/forms/VerifyPhoneForm";
import { useLocation } from "react-router-dom";

// employee: password
export default function Verify() {
  const location = useLocation();
  console.log(location.state);

  const handleSubmit = (values: Record<string, any>) => {
    console.log(values);
  };

  return (
    <div className="w-screen h-[100dvh] bg-white flex items-center justify-center">
      <div className="w-[420px] shadow border border-black/20 rounded-lg px-8 py-20">
        {location.state.role === "admin" ? (
          <VerifyPhoneForm
            description="Please enter your code that send to your phone"
            onSubmit={handleSubmit}
          />
        ) : (
          <SubmitPasswordForm
            description="Please enter your password"
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}
