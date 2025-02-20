"use client";
import Link from "next/link";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo2 from "@/public/images/logo2.png";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function NikeRegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailUpdates, setEmailUpdates] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError("");

    if (!email || !password || !firstName || !lastName) {
      setError("All field is required");
    }
    setLoading(true);

    try {
      const res = await fetch("/api/nikeregister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          emailUpdates,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message);
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Error while fetching:", error);
      setError("Something went wrong. Please try again.");
    } finally{
      setLoading(false)
    }
  };
  return (
    <div className="mx-auto max-w-sm px-4 py-8">
      <div className="flex flex-col items-center space-y-6">
        <Image
          src={logo2}
          alt="Nike"
          width={50}
          height={18}
          className="h-[18px] w-auto"
        />

        <div className="text-center space-y-1">
          <h1 className="mb-4 text-xl font-bold">BECOME A NIKE MEMBER</h1>
          <p className="text-sm text-muted-foreground">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration and community.
          </p>
        </div>

        <form className="w-full space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="shadow-none text-[#8D8D8D] placeholder:text-[#8D8D8D] pl-5 border border-[#E5E5E5] h-10 rounded"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="shadow-none text-[#8D8D8D] placeholder:text-[#8D8D8D] pl-5 border border-[#E5E5E5] h-10 rounded"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="shadow-none text-[#8D8D8D] placeholder:text-[#8D8D8D] pl-5 border border-[#E5E5E5] h-10 rounded"
            />
          </div>

          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="shadow-none text-[#8D8D8D] placeholder:text-[#8D8D8D] pl-5 border border-[#E5E5E5] h-10 rounded"
            />
          </div>
          {error ? (
            <div className="text-sm text-red-600 ">{error}</div>
          ) : (
            <div></div>
          )}

          <div className="flex space-x-2">
            <Checkbox
              id="remember"
              className="mt-2"
              checked={emailUpdates}
              onCheckedChange={() => setEmailUpdates(!emailUpdates)}
            />
            <Label htmlFor="remember" className="text-sm font-normal">
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits
            </Label>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            By creating an account, you agree to Nike`&apos;`s{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Terms of Use
            </a>
            .
          </div>

          <Button
            onClick={handleSubmit}
            type="submit"
            className="w-full bg-[#111111] text-white hover:bg-black/90"
            disabled={loading}
          >
            JOIN US
          </Button>

          <div className="text-center text-sm">
            Already a Member?{" "}
            <Link href="/signUp" className="text-black underline">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
