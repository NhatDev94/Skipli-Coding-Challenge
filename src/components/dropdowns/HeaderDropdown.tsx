import type { ReactNode } from "react";
import Dropdown from "./Dropdown";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

type HeaderDropdownType = {
  label: string;
  children: ReactNode;
};

export default function HeaderDropdown(props: HeaderDropdownType) {
  const auth = useAuth();
  const navigate = useNavigate();
  const items = [
    {
      content: "Sign Out",
      onClick: () => {
        auth?.signOut();
        navigate("/sign-in");
      },
    },
  ];

  return (
    <Dropdown label={props.label} items={items}>
      {props.children}
    </Dropdown>
  );
}
