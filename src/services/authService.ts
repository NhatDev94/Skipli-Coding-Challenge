import api from "./axios";

const authService = {
  phoneValidate: async (phoneNumber: string) => {
    const { data } = await api.post("/auth/phone-validate", { phoneNumber });
    return data;
  },
  signIn: async (
    phoneNumber: string,
    role: string,
    code?: string,
    password?: string
  ) => {
    const { data } = await api.post("/auth/sign-in", {
      phoneNumber,
      role,
      code,
      password,
    });
    return data;
  },
  reSendAccessCode: async (phoneNumber: string) => {
    const { data } = await api.post("/auth/resend-code", { phoneNumber });
    return data;
  },
  validateEmployee: async (phoneNumber: string, token: string) => {
    const { data } = await api.post("/auth/employee-validate", {
      phoneNumber,
      token,
    });
    return data;
  },
  createEmployeePassword: async (phoneNumber: string, password: string) => {
    const { data } = await api.post("/auth/employee-password", {
      phoneNumber,
      password,
    });
    return data;
  },
};

export default authService;
