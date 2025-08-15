import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { FormItemType } from "@/types/form";

type FormCustomProps = {
  defaultValues: Record<string, any>;
  formSchema: z.ZodSchema;
  form: any;
  formItems: FormItemType[];
  onSubmit: (data: Record<string, any>) => void;
};

export default function FormCustom(props: FormCustomProps) {
  return (
    <Form {...props.form}>
      <form
        onSubmit={props.form.handleSubmit(props.onSubmit)}
        className="space-y-8"
      >
        {props.formItems.map((item: FormItemType) => (
          <FormField
            key={item.name}
            control={props.form.control}
            name={item.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{item.label}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={item.placeholder}
                    type={item.type || "text"}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        ))}

        <Button className="mt-8" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
