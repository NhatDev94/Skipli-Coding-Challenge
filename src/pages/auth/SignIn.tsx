import { useNavigate } from "react-router-dom";
import SignInForm from "../../components/forms/SignInForm";
import authService from "@/services/authService";
import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import { showMessage } from "@/lib/utils";
import Loading from "@/components/Loading";
import Header from "@/components/layouts/Header";

// admin: enter phone number => create new access code
// employee: enter phone number => enter password

export default function SignIn() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: Record<string, any>) => {
    setLoading(true);
    const res = await authService.phoneValidate(values.phoneNumber);
    setLoading(false);
    if (!res.data.exists) {
      // Thong bao accout chua ton tai
      showMessage("Account does not exist", false);
      return;
    }
    navigate(
      `/verify?phoneNumber=${values.phoneNumber}&role=${res.data.user.role}`
    );
  };

  useEffect(() => {
    if (auth?.user) {
      navigate("/");
    }
  }, []);

  return (
    <div className="w-screen h-[100dvh] bg-white flex items-center justify-center">
      <div className="w-[420px] shadow border border-black/20 rounded-lg px-8 py-20">
        <SignInForm
          description="Please enter your phone to sign in"
          onSubmit={handleSubmit}
        />
      </div>
      <Loading isLoading={loading} />
    </div>
  );
}
