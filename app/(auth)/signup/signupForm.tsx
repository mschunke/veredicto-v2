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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { signUp } from "../server";

const signupSchema = z
  .object({
    name: z.string().min(1),
    email: z.string(),
    password: z.string().min(8),
    password2: z.string().min(8),
  })
  .refine((data) => data.password === data.password2, {
    error: "Passwords don't match",
  });

export type SignupFormType = z.infer<typeof signupSchema>;

export function SignupForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signupForm = useForm<SignupFormType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      password2: "",
    },
  });

  async function onSignup(values: SignupFormType) {
    try {
      setLoading(true);
      await signUp(values);

      toast.success("User registered successfully!");
      router.push("/app");
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
      setLoading(false);
    } finally {
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign up</CardTitle>

        <CardDescription>
          Already have an account?{" "}
          <Link href={"/signin"} className="hover:underline">
            Sign in
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...signupForm}>
          <form
            onSubmit={signupForm.handleSubmit(onSignup)}
            className="space-y-8 min-w-sm max-w-3xl mx-auto py-10"
          >
            <FormField
              control={signupForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="name webauthn"
                      placeholder="Joe Doe"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>What's your name?</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={signupForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="email webauthn"
                      placeholder="you@yourfirm.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>What's your work email?</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={signupForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      autoComplete="new-password webauthn"
                      placeholder="Placeholder"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Passwords must be at least 8 characters long with letters
                    and number
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={signupForm.control}
              name="password2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      autoComplete="new-password webauthn"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter the same password as the field above
                  </FormDescription>
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
