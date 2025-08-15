import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import ChatItem from "./ChatItem";
import ReplyMessage from "./ReplyMessage";

type AdminChatProps = {
  employees: any[];
};

export default function AdminChat(props: AdminChatProps) {
  return (
    <div className="w-full h-full">
      <Tabs
        defaultValue={props.employees[0]?.id}
        className="h-full w-full flex flex-row"
      >
        <div className="w-1/4 h-full ">
          <TabsList className="flex flex-col items-start pt-4">
            {props.employees.map((employee) => (
              <TabsTrigger
                key={employee.id}
                value={employee.id}
                className="w-full text-left justify-start px-4 py-2.5 mb-1 rounded-lg data-[state=active]:bg-blue-100"
              >
                {employee.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="w-full h-full">
          {props.employees.map((employee) => (
            <TabsContent
              value={employee.id}
              key={employee.id}
              className="p-4 w-full h-full"
            >
              <div className="w-full h-full rounded-lg bg-gray-200 p-4 relative">
                <ChatItem text="Xin chao" isOwner={true} />
                <ChatItem text="Xin chao" isOwner={false} />
                <div className="absolute bottom-0 left-0 w-full bg-white">
                  <ReplyMessage key={employee.id} />
                </div>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
