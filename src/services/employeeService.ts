import type { EmployeeType } from "@/types/user";
import api from "./axios";

const employeeService = {
  getEmployees: async () => {
    const { data } = await api.get("/employee/employees");
    return data;
  },
  createEmployee: async (employee: EmployeeType) => {
    const { data } = await api.post("/employee/create", { employee });
    return data;
  },
  editEmployee: async (employee: EmployeeType, oldPhoneNumber: string) => {
    const { data } = await api.post("/employee/edit", {
      employee,
      oldPhoneNumber,
    });
    return data;
  },
  deleteEmployee: async (phoneNumber: string) => {
    const { data } = await api.post("/employee/delete", { phoneNumber });
    return data;
  },
};

export default employeeService;
