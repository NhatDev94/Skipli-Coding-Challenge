import type { FormItemType } from "@/types/form";
import FormCustom from "./Form";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type EmployeePasswordFormProps = {
  onSubmit: (values: Record<string, any>) => void;
};

export default function EmployeePasswordForm(props: EmployeePasswordFormProps) {
  const formItems: FormItemType[] = [
    {
      label: "Password",
      name: "password",
      placeholder: "Password",
      type: "password",
    },
    {
      label: "Confirm password",
      name: "confirmPassword",
      placeholder: "Confirm password",
      type: "password",
    },
  ];

  const formSchema = z
    .object({
      password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long." })
        .regex(/[a-z]/, {
          message: "Password must contain at least one lowercase letter.",
        })
        .regex(/[A-Z]/, {
          message: "Password must contain at least one uppercase letter.",
        })
        .regex(/[0-9]/, {
          message: "Password must contain at least one number.",
        })
        .regex(/[^a-zA-Z0-9]/, {
          message: "Password must contain at least one special character.",
        }),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Confirm password does not match.",
      path: ["confirmPassword"],
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
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
