import { DialogContent } from "@radix-ui/react-dialog";
import EmployeeForm from "../forms/EmployeeForm";
import DialogCustom from "./DialogCustom";

type EmployeeDialogProps = {
  status: "close" | "create" | "edit";
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
      <DialogContent className="mt-8">
        <EmployeeForm onSubmit={props.onSubmit} />
      </DialogContent>
    </DialogCustom>
  );
}
