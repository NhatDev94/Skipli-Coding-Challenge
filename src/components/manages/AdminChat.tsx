import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import ChatItem from "./ChatItem";
import ReplyMessage from "./ReplyMessage";
import { useEffect, useState } from "react";
import { API_URL } from "@/lib/env";

import io from "socket.io-client";
import useAuth from "@/hooks/useAuth";
import type { MessageType } from "@/types/chat";
const socket = io(API_URL.replace("/api", ""));

type AdminChatProps = {
  employees: any[];
};

export default function AdminChat(props: AdminChatProps) {
  const auth = useAuth();

  const defaultActiveTab =
    auth?.user?.role === "admin"
      ? props.employees[0]?.phoneNumber
      : auth?.user?.phoneNumber;

  const [messages, setMessages] = useState<any>([]);
  const [activeTab, setActiveTab] = useState<string>(defaultActiveTab || "");

  useEffect(() => {
    if (activeTab) {
      setMessages([]);
      socket.emit("join_room", activeTab);
      socket.on("load_messages", (_messages) => {
        _messages && setMessages(_messages);
      });
    }
    return () => {
      if (activeTab) {
        socket.emit("leave_room", activeTab);
      }
    };
  }, [activeTab]);

  useEffect(() => {
    socket.on("receive_message", (message) => {
      setMessages((prevMessages: any) => [...prevMessages, message]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const handleSendMessage = (messageString: string, phoneNumber: string) => {
    if (messageString.trim()) {
      // Gửi tin nhắn đến server
      const messageData = {
        role: auth?.user?.role,
        text: messageString,
        timestamp: new Date().toLocaleTimeString(),
        phoneNumber,
      };
      socket.emit("send_message", messageData);
    }
  };

  const messageReverser = [...messages];
  messageReverser.reverse();

  return (
    <div className="w-full h-full">
      <Tabs
        defaultValue={
          auth?.user?.role === "admin"
            ? props.employees[0]?.phoneNumber
            : auth?.user?.phoneNumber
        }
        onValueChange={(value) => setActiveTab(value)}
        className="h-full w-full flex flex-row"
      >
        <div className="w-1/4 h-full ">
          <TabsList className="flex flex-col items-start pt-4">
            {props.employees.map((employee) => {
              if (
                auth?.user?.role === "employee" &&
                auth?.user?.phoneNumber !== employee.phoneNumber
              )
                return null;
              return (
                <TabsTrigger
                  key={employee.phoneNumber}
                  value={employee.phoneNumber}
                  className="w-full text-left justify-start px-4 py-2.5 mb-1 rounded-lg data-[state=active]:bg-blue-100"
                >
                  {auth?.user?.role === "employee" ? "Admin" : employee.name}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>

        <div className="w-full h-full">
          {props.employees.map((employee) => (
            <TabsContent
              value={employee.phoneNumber}
              key={employee.phoneNumber}
              className="p-4 w-full h-full"
            >
              <div className="w-full h-full rounded-lg bg-gray-200 relative">
                <div className="w-full h-[calc(100%-56px)] p-4 pb-20 overflow-y-scroll flex flex-col-reverse">
                  {messageReverser.map((message: MessageType) => (
                    <ChatItem key={message.timestamp} message={message} />
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 w-full bg-white">
                  <ReplyMessage
                    key={employee.phoneNumber}
                    employee={employee}
                    onSendMessage={handleSendMessage}
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
