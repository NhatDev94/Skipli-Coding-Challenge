import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "outline-none border border-black/20 rounded-md px-4 py-1.5 w-full",
        className
      )}
      {...props}
    />
  );
}

export { Input };
