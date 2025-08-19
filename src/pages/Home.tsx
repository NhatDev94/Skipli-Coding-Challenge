import ManageEmployee from "@/components/manages/ManageEmployee";
import AdminChat from "@/components/manages/AdminChat";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import employeeService from "@/services/employeeService";
import Header from "@/components/layouts/Header";

export default function Home() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [employees, setEmployees] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getEmployees = async () => {
    setIsLoading(true);
    const res = await employeeService.getEmployees();
    setEmployees(res.data.employees);
    setIsLoading(false);
  };

  const tabs = [
    {
      value: "manage-employee",
      label: "Manage Employee",
      content: (
        <ManageEmployee
          employees={employees}
          getEmployees={getEmployees}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      ),
    },
    {
      value: "manage-task",
      label: "Manage Task",
      content: (
        <div className="w-full h-full flex items-center justify-center text-base font-semibold">
          Comming soon.
        </div>
      ),
    },
    {
      value: "message",
      label: "Message",
      content: <AdminChat employees={employees} />,
    },
  ];

  useEffect(() => {
    if (auth?.user) {
      getEmployees();
      return;
    }
    navigate("/sign-in");
  }, []);

  return (
    <div className="w-screen h-[100dvh] bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="w-full h-full pt-20 px-20 overflow-y-scroll">
        <Tabs
          defaultValue={
            auth?.user?.role === "admin" ? "manage-employee" : "manage-task"
          }
          className="h-full w-full flex flex-row "
        >
          <div className="w-1/4 h-full border-r border-black/20">
            <TabsList className="flex flex-col items-start pt-4">
              {tabs.map((tab) => {
                if (
                  auth?.user?.role === "employee" &&
                  tab.value === "manage-employee"
                ) {
                  return null;
                }
                return (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="w-full text-left justify-start"
                  >
                    {tab.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          <div className="w-full h-full">
            {tabs.map((tab) => (
              <TabsContent
                value={tab.value}
                key={tab.value}
                className="py-4 h-full"
              >
                {tab.content}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
}
