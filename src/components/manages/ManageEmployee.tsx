import { useState } from "react";

import { Button } from "../ui/button";
import EmployeeTable from "../tables/EmployeeTable";
import EmployeeDialog from "../dialogs/EmployeeDialog";

export default function ManageEmployee({ employees }: { employees: any[] }) {
  const [status, setStatus] = useState<"close" | "create" | "edit">("close");

  const handleCreateEmployee = () => {
    setStatus("create");
  };

  const handleEditEmployee = (employeeId: number) => {
    setStatus("edit");
  };

  const handleDeleteEmployee = (employeeId: number) => {};

  const handleClose = (open: boolean) => {
    setStatus("close");
  };

  const handleSubmit = (values: Record<string, any>) => {
    console.log(values);
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
        employees={employees}
        onEdit={handleEditEmployee}
        onDelete={handleDeleteEmployee}
      />

      <EmployeeDialog
        status={status}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
