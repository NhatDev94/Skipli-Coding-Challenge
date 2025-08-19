/*
    - Bởi vì redirect từ email qua nên chỉ cần enter code trong email là chuyển sang tạo account
    1. Mở modal tạo account: phone, password, confirm password.
    2. Tạo token và lưu vào localStorage => Chuyển sang trang Profile của Employee
*/

import { EmployeePasswordDialog } from "@/components/dialogs/EmployeePasswordDialog";
import Loading from "@/components/Loading";
import useAuth from "@/hooks/useAuth";
import authService from "@/services/authService";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function AccountSetup() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");
  const phoneNumber = searchParams.get("phoneNumber");

  const validateEmployee = async (phoneNumber: string, token: string) => {
    const res = await authService.validateEmployee(phoneNumber, token);

    if (res.data?.employee) {
      setIsLoading(false);
      setOpen(true);
    }
  };

  const handleSubmit = async (values: Record<string, any>) => {
    if (phoneNumber) {
      const res = await authService.createEmployeePassword(
        phoneNumber,
        values.password
      );
      if (res.data.token) {
        auth?.signIn(res.data.user, res.data.token);
        navigate("/");
        return;
      }
    }
    setOpen(false);
  };

  useEffect(() => {
    if (token && phoneNumber) {
      validateEmployee(phoneNumber, token);
    }
  }, []);
  return (
    <div className="w-screen h-[100dvh] bg-white">
      <EmployeePasswordDialog
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
      />
      <Loading isLoading={isLoading} />
    </div>
  );
}
