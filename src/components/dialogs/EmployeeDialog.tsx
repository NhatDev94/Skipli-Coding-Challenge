import type { EmployeeType } from "@/types/user";
import EmployeeForm from "../forms/EmployeeForm";
import DialogCustom from "./DialogCustom";

type EmployeeDialogProps = {
  status: "close" | "create" | "edit";
  defaultValue: EmployeeType | null;
  onClose: (open: boolean) => void;
  onSubmit: (values: Record<string, any>) => void;
};

export default function EmployeeDialog(props: EmployeeDialogProps) {
  return (
    <DialogCustom
      title={props.status === "create" ? "Create Employee" : "Edit Employee"}
      open={props.status !== "close"}
      onClose={props.onClose}
    >
      <div className="mt-8">
        <EmployeeForm
          onSubmit={props.onSubmit}
          defaultValue={props.defaultValue}
        />
      </div>
    </DialogCustom>
  );
}
