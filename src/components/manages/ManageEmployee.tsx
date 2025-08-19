import { useState } from "react";

import { Button } from "../ui/button";
import EmployeeTable from "../tables/EmployeeTable";
import EmployeeDialog from "../dialogs/EmployeeDialog";
import employeeService from "@/services/employeeService";
import { showMessage } from "@/lib/utils";
import type { EmployeeType } from "@/types/user";

export default function ManageEmployee({
  employees,
  getEmployees,
  isLoading,
  setIsLoading,
}: {
  employees: EmployeeType[];
  isLoading: boolean;
  getEmployees: () => void;
  setIsLoading: (state: boolean) => void;
}) {
  const [status, setStatus] = useState<"close" | "create" | "edit">("close");
  const [editEmployee, setEditEmployee] = useState<EmployeeType | null>(null);
  const handleCreateEmployee = () => {
    setStatus("create");
    setEditEmployee(null);
  };

  const handleEditEmployee = (phoneNumber: string) => {
    setStatus("edit");
    employees.forEach((employee) => {
      if (employee.phoneNumber === phoneNumber) {
        setEditEmployee(employee);
      }
    });
  };

  const handleDeleteEmployee = async (phoneNumber: string) => {
    setIsLoading(true);
    const res = await employeeService.deleteEmployee(phoneNumber);
    if (res.data) {
      showMessage("Delete employee successfully");
      handleClose();
      await getEmployees();
      return;
    }
    setIsLoading(false);
    handleClose();
    showMessage("Something went wrong.");
  };

  const handleClose = () => {
    setStatus("close");
  };

  const createEmployee = async (values: Record<string, any>) => {
    setIsLoading(true);
    const res = await employeeService.createEmployee({
      phoneNumber: values.phoneNumber,
      name: values.name,
      email: values.email,
      role: "employee",
    });
    if (res.data) {
      // tao thanh cong
      await getEmployees();
      showMessage("Create employees successful");
      handleClose();
      return;
    }
    showMessage("Phone number already has an account", false);
    setIsLoading(false);
  };

  const employeeEdit = async (values: Record<string, any>) => {
    setIsLoading(true);
    const res = await employeeService.editEmployee(
      {
        phoneNumber: values.phoneNumber,
        name: values.name,
        email: values.email,
        role: "employee",
      },
      editEmployee?.phoneNumber || ""
    );
    if (res.data) {
      await getEmployees();
      handleClose();
      showMessage("Edit employee successfully.");
      return;
    }
    setIsLoading(false);
    showMessage("Phone number already has an account.", false);
  };

  const handleSubmit = async (values: Record<string, any>) => {
    if (status === "create") {
      // call api + hien thong bao success
      createEmployee(values);
      return;
    }

    // Edit
    if (
      values.phoneNumber !== editEmployee?.phoneNumber ||
      values.name !== editEmployee?.name ||
      values.email !== editEmployee?.email
    ) {
      await employeeEdit(values);
      return;
    }
    handleClose();
  };

  return (
    <div className="w-full h-full">
      <h2 className="text-2xl font-semibold mb-12">Manage Employee</h2>

      <div className="w-full flex items-center justify-between px-4 mb-8">
        <p className="text-lg font-semibold">4 Employee</p>

        <div className="flex items-center gap-x-4">
          <Button
            variant={"outline"}
            className="border-primary text-primary w-fit"
            onClick={handleCreateEmployee}
          >
            + Create Employee
          </Button>

          <Button variant={"outline"} className="w-fit">
            Filter
          </Button>
        </div>
      </div>
      <EmployeeTable
        isLoading={isLoading}
        employees={employees}
        onEdit={handleEditEmployee}
        onDelete={handleDeleteEmployee}
      />

      <EmployeeDialog
        status={status}
        defaultValue={editEmployee}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
