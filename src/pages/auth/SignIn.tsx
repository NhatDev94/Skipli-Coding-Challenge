import { useNavigate } from "react-router-dom";
import SignInForm from "../../components/forms/SignInForm";

// admin: enter phone number => create new access code
// employee: enter phone number => enter password

export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = (values: Record<string, any>) => {
    // verify

    console.log("first", values);
    navigate("/verify", {
      state: { phoneNumber: values.phoneNumber, role: "employee" },
    });
  };

  return (
    <div className="w-screen h-[100dvh] bg-white flex items-center justify-center">
      <div className="w-[420px] shadow border border-black/20 rounded-lg px-8 py-20">
        <SignInForm
          description="Please enter your phone to sign in"
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
