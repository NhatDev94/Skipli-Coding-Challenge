import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { ReactNode } from "react";

type DropdownType = {
  children: ReactNode;
  label?: string;
  items: any[];
};

export default function Dropdown(props: DropdownType) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{props.children}</DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end">
        {props.label && (
          <DropdownMenuLabel className="capitalize">
            {props.label}
          </DropdownMenuLabel>
        )}
        <DropdownMenuSeparator />
        {props.items?.map((item) => (
          <DropdownMenuItem className=" cursor-pointer" onClick={item?.onClick}>
            {item.content}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
