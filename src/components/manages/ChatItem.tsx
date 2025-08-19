import useAuth from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import type { MessageType } from "@/types/chat";

type ChatItemProps = {
  message: MessageType;
};

export default function ChatItem(props: ChatItemProps) {
  const auth = useAuth();
  const isOwner = props.message.role === auth?.user?.role;

  return (
    <div
      className={cn(
        "w-fit px-4 py-2 min-w-32 max-w-2/3 rounded-lg bg-white text-md text-black mb-1.5",
        {
          "ml-auto": isOwner,
          "mr-auto": !isOwner,
          "bg-blue-100": isOwner,
        }
      )}
    >
      {props.message.text}

      <div className="text-xs font-normal pt-2 select-none">
        {props.message.timestamp}
      </div>
    </div>
  );
}
