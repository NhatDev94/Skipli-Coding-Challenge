import z from "zod";
import FormCustom from "./Form";
import type { FormItemType } from "@/types/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type SubmitPasswordFormProps = {
  description: string;
  onSubmit: (values: Record<string, any>) => void;
};

export default function SignInForm(props: SubmitPasswordFormProps) {
  const formItems: FormItemType[] = [
    {
      label: "",
      name: "password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];

  const formSchema = z.object({
    password: z.string().min(8, {
      message: "Password must be at least 8 characters",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  return (
    <div className="">
      <h1 className="w-full text-center text-4xl font-semibold">
        Enter Password
      </h1>
      <h4 className="w-full text-center mt-4 px-14 text-base font-normal text-gray-500 my-10">
        {props.description}
      </h4>

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
