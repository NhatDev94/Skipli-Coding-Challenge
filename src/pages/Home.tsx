import ManageEmployee from "@/components/manages/ManageEmployee";
import AdminChat from "@/components/manages/AdminChat";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

export default function Home() {
  const [employees, setEmployees] = useState<any>([]);

  const tabs = [
    {
      value: "manage-employee",
      label: "Manage Employee",
      content: <ManageEmployee employees={employees} />,
    },
    {
      value: "manage-task",
      label: "Manage Task",
      content: "Manage your tasks and assignments here.",
    },
    {
      value: "message",
      label: "Message",
      content: <AdminChat employees={employees} />,
    },
  ];

  const getEmployees = async () => {
    const data = [
      {
        id: 1,
        name: "John Doe",
        email: "johnDoeasdasasdasda asdasdasdasdasdasdadasdadasdawq@gmail.com",
        phone: "1234567890",
        status: "unActive",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "janesmith@gmail.com",
        phone: "1234567890",
        status: "unActive",
      },
    ];
    setEmployees(data);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className="w-screen h-[100dvh] bg-white">
      {/* Header */}
      <div className="w-full h-20 bg-black/60 fixed top-0 left-0 px-20"></div>

      {/* Main Content */}
      <div className="w-full h-full pt-20 px-20 overflow-y-scroll">
        <Tabs
          defaultValue="manage-employee"
          className="h-full w-full flex flex-row "
        >
          <div className="w-1/4 h-full border-r border-black/20">
            <TabsList className="flex flex-col items-start pt-4">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="w-full text-left justify-start"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
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
