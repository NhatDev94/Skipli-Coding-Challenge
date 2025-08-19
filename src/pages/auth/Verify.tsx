// admin: code verify
// employee: password

import SubmitPasswordForm from "@/components/forms/SubmitPasswordForm";
import VerifyPhoneForm from "@/components/forms/VerifyPhoneForm";
import Loading from "@/components/Loading";
import useAuth from "@/hooks/useAuth";
import { showMessage } from "@/lib/utils";
import authService from "@/services/authService";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Verify() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [loading, setLoading] = useState(false);

  const role = searchParams.get("role");
  const phoneNumber = searchParams.get("phoneNumber");

  const handleSubmit = async (values: Record<string, any>) => {
    if (!phoneNumber) return;
    if (role === "admin" && values.code) {
      setLoading(true);
      const res = await authService.signIn(phoneNumber, role, values.code);
      if (res?.data?.token) {
        auth?.signIn(res.data.user, res.data.token);
        navigate("/");
        setLoading(false);
        return;
      }
      setLoading(false);
      showMessage("Login failed", false);
      return;
    }

    setLoading(true);
    const res = await authService.signIn(
      phoneNumber,
      "employee",
      undefined,
      values.password
    );
    if (res?.data?.token) {
      auth?.signIn(res.data.user, res.data.token);
      navigate("/");
      setLoading(false);
      return;
    }
    setLoading(false);
    showMessage("Login failed", false);
  };

  const handleReSendAccessCode = async () => {
    if (phoneNumber) {
      setLoading(true);
      await authService.reSendAccessCode(phoneNumber);
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-[100dvh] bg-white flex items-center justify-center">
      <div className="w-[420px] shadow border border-black/20 rounded-lg px-8 py-20">
        {role === "admin" ? (
          <VerifyPhoneForm
            description="Please enter your code that send to your phone"
            reSendAccessCode={handleReSendAccessCode}
            onSubmit={handleSubmit}
          />
        ) : (
          <SubmitPasswordForm
            description="Please enter your password"
            onSubmit={handleSubmit}
          />
        )}
      </div>
      <Loading isLoading={loading} />
    </div>
  );
}
