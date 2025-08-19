import EmployeePasswordForm from "../forms/EmployeePasswordForm";
import DialogCustom from "./DialogCustom";

type EmployeePasswordDialogProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: Record<string, any>) => void;
};

export function EmployeePasswordDialog(props: EmployeePasswordDialogProps) {
  return (
    <DialogCustom
      title={"Create password"}
      open={props.open}
      onClose={props.onClose}
    >
      <div className="mt-8">
        <EmployeePasswordForm onSubmit={props.onSubmit} />
      </div>
    </DialogCustom>
  );
}
