import z from "zod";
import FormCustom from "./Form";
import type { FormItemType } from "@/types/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type SignInFormProps = {
  description: string;
  onSubmit: (values: Record<string, any>) => void;
};

export default function SignInForm(props: SignInFormProps) {
  const formItems: FormItemType[] = [
    {
      label: "Phone Number",
      name: "phoneNumber",
      placeholder: "Your phone number",
    },
  ];

  const formSchema = z.object({
    phoneNumber: z.string().regex(/^0(3|5|7|8|9)[0-9]{8}$/, {
      message: "Invalid phone number",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  return (
    <div className="">
      <h1 className="w-full text-center text-4xl font-semibold">Sign In</h1>
      <h4 className="w-full text-center mt-4 text-base font-normal text-gray-500 my-10">
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
