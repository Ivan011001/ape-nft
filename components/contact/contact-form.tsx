"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/schemas";

import { contact } from "@/actions/contact";

import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { toast } from "sonner";

import { cn } from "@/lib/utils";

const ContactForm = () => {
  const [isPending, startTranstition] = useTransition();
  const [buttonText, setButtonText] = useState<"mint" | "minted" | "error">(
    "mint"
  );

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      discord: "",
      address: "",
    },
  });

  const onSubmit = (values: z.infer<typeof contactSchema>) => {
    startTranstition(() => {
      contact(values)
        .then((data) => {
          if (data.error) {
            setButtonText("error");
            toast.error(data.error, {
              style: { backgroundColor: "#DC3B5A", color: "white" },
            });
          }

          if (data.success) {
            setButtonText("minted");
            toast.success(data.success, {
              style: { backgroundColor: "#DC3B5A", color: "white" },
            });
          }
        })
        .catch(() => {
          setButtonText("error");
          toast.error("Something went wrong", {
            style: { backgroundColor: "#DC3B5A", color: "white" },
          });
        })
        .finally(() => {
          form.reset();
        });
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full md:w-[248px] lg:w-[397px] flex flex-col gap-y-4 lg:gap-y-6"
      >
        <FormField
          control={form.control}
          name="discord"
          render={({ field }) => (
            <FormItem className="relative">
              <div className="flex">
                <FormLabel>
                  <div className="h-full p-2.5 px-3 lg:px-5 bg-stone-900 rounded-tl-lg rounded-bl-lg lg:rounded-tl-xl lg:rounded-bl-xl backdrop-blur-md flex justify-center items-center">
                    <svg className="w-6 h-6 fill-indigo-500">
                      <use xlinkHref="/icons/sprite.svg#icon-discord"></use>
                    </svg>
                  </div>
                </FormLabel>

                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="@username"
                    className={cn(
                      "",
                      form.formState.errors.discord &&
                        "text-accent border-accent"
                    )}
                    {...field}
                  />
                </FormControl>
              </div>

              <FormMessage className="absolute right-0 bottom-[-13px] lg:bottom-[-18px]" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="relative">
              <div className="flex">
                <FormLabel>
                  <div className="h-full p-2.5 px-3 lg:px-5 bg-stone-900 rounded-tl-lg rounded-bl-lg lg:rounded-tl-xl lg:rounded-bl-xl backdrop-blur-md flex justify-center items-center">
                    <svg className="w-6 h-6">
                      <use xlinkHref="/icons/sprite.svg#icon-meta"></use>
                    </svg>
                  </div>
                </FormLabel>

                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="Wallet address"
                    {...field}
                    className={cn(
                      "",
                      form.formState.errors.address &&
                        "text-accent border-accent"
                    )}
                  />
                </FormControl>
              </div>

              <FormMessage className="absolute right-0 bottom-[-13px] lg:bottom-[-18px]" />
            </FormItem>
          )}
        />

        <Button disabled={isPending} type="submit">
          {buttonText}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
