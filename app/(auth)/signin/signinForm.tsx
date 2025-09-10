"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { signIn } from "../server";

const signinSchema = z.object({
  email: z.email("Invalid email address"),
  password: z
    .string("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

export type SigninFormType = z.infer<typeof signinSchema>;

export function SigninForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signinForm = useForm<SigninFormType>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSignin(values: SigninFormType) {
    try {
      await signIn(values);
      toast.success("Successfully signed in!");
      router.push("/app");
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign up</CardTitle>

        <CardDescription>
          Need to create an account?{" "}
          <Link href={"/signup"} className="hover:underline">
            Sign up
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...signinForm}>
          <form
            onSubmit={signinForm.handleSubmit(onSignin)}
            className="space-y-8 min-w-sm max-w-3xl mx-auto py-10"
          >
            <FormField
              control={signinForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="name webauthn"
                      placeholder="you@yourfirm.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={signinForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      autoComplete="current-password webauthn"
                      placeholder="Placeholder"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={loading}>
              Sign in
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
