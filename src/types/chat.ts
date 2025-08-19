type MessageType = {
  role: "admin" | "employee";
  phoneNumber: string;
  text: string;
  timestamp: string;
};

export type { MessageType };
