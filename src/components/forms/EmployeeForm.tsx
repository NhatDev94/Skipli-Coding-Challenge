import type { FormItemType } from "@/types/form";
import FormCustom from "./Form";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type EmployeeFormProps = {
  onSubmit: (values: Record<string, any>) => void;
};

export default function EmployeeForm(props: EmployeeFormProps) {
  const formItems: FormItemType[] = [
    {
      label: "Employee Name",
      name: "name",
      placeholder: "Employee Name",
    },
    {
      label: "Phone Number",
      name: "phoneNumber",
      placeholder: "Phone Number",
    },
    {
      label: "Email",
      name: "email",
      placeholder: "Email",
    },
    {
      label: "Role",
      name: "role",
      placeholder: "Role",
    },
  ];

  const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    phoneNumber: z.string().regex(/^0(3|5|7|8|9)[0-9]{8}$/, {
      message: "Invalid phone number",
    }),
    email: z.email({ message: "Invalid email address" }),
    role: z.string().min(1, { message: "Role is required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      role: "",
    },
  });
  return (
    <div className="">
      <FormCustom
        defaultValues={form.getValues()}
        form={form}
        formSchema={formSchema}
        formItems={formItems}
        onSubmit={props.onSubmit}
      />
    </div>
  );
}
