import type { EmployeeType } from "@/types/user";
import { Input } from "../ui/input";

export default function ReplyMessage({
  employee,
  onSendMessage,
}: {
  employee: EmployeeType;
  onSendMessage: (message: string, phoneNumber: string) => void;
}) {
  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSendMessage(e.currentTarget.value, employee.phoneNumber);
      e.currentTarget.value = "";
    }
  };
  return (
    <div className="w-full h-14">
      <Input
        autoFocus
        placeholder="Reply message..."
        className="bg-transparent rounded-t-none h-full"
        onKeyDown={onEnter}
      />
    </div>
  );
}
