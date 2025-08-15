import { cn } from "@/lib/utils";

type ChatItemProps = {
  text: string;
  isOwner: boolean;
};

export default function ChatItem(props: ChatItemProps) {
  return (
    <div
      className={cn(
        "w-fit px-4 py-2 min-w-32 max-w-2/3 rounded-lg bg-white text-md text-black mb-1.5",
        {
          "ml-auto": props.isOwner,
          "mr-auto": !props.isOwner,
          "bg-blue-100": props.isOwner,
        }
      )}
    >
      {props.text}

      <div className="text-xs font-normal pt-2">21:34 Hom nay</div>
    </div>
  );
}
