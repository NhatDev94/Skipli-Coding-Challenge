import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import HeaderDropdown from "../dropdowns/HeaderDropdown";

export default function Header() {
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <div className="w-full h-16 lg:h-20 bg-gray-800 fixed top-0 left-0 px-4 lg:px-20 flex items-center justify-between">
      <div
        className="text-3xl font-bold select-none cursor-pointer text-white"
        onClick={() => {
          navigate("/");
        }}
      >
        Nhatdev94
      </div>

      {auth?.user && (
        <HeaderDropdown label={auth?.user?.name}>
          <div className="w-10 h-10 rounded-full border border-black/10 bg-primary text-base font-semibold text-white flex items-center justify-center capitalize">
            {auth?.user?.name[0]}
          </div>
        </HeaderDropdown>
      )}
    </div>
  );
}
