import { Input } from "../ui/input";

export default function ReplyMessage() {
  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(e.currentTarget.value);
    }
  };
  return (
    <div className="w-full">
      <Input
        autoFocus
        placeholder="Reply message..."
        className="bg-transparent rounded-t-none py-4"
        onKeyDown={onEnter}
      />
    </div>
  );
}
