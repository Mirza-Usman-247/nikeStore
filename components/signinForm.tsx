"use client";
import Link from "next/link";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo2 from "@/public/images/logo2.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BiLoaderAlt } from "react-icons/bi";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault();
    setError("");

    if (!email || !password) {
      setError("All field is required");
    }

    setLoading(true);
    try {
      const res = await fetch("api/nikesignup", {
        method: "POST",
        headers: {
          "Content-Type": "aplication/json",
        },
        body: JSON.stringify({
          email,
          password,
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
    } finally {
      setLoading(false);
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
          <h1 className="text-xl font-bold tracking-tight">YOUR ACCOUNT</h1>
          <h1 className="text-xl font-bold tracking-tight">FOR EVERYTHING</h1>
          <h1 className="text-xl font-bold tracking-tight">NIKE</h1>
        </div>
        {loading ? (
          <form className="w-full space-y-4">
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
            {isError ? (
              <div className="text-sm text-red-600 ">{isError}</div>
            ) : (
              <div></div>
            )}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label
                  htmlFor="remember"
                  className="text-xs sm:text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Keep me signed in
                </Label>
              </div>
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-500 hover:text-gray-800 hover:underline"
              >
                Forgotten your password?
              </Link>
            </div>
            <div className="mx-auto py-2 text-center text-gray-500 text-sm">
              By logging in, you agree to Nike`&apos;`s{" "}
              <Link href="#" className="underline hover:text-gray-800">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline hover:text-gray-800">
                Terms of Use
              </Link>
              .
            </div>
            <div className="space-y-4">
              <Button
                className="w-full bg-black text-white hover:bg-black/90 font-normal text-sm"
                type="submit"
                onClick={handleSubmit}
              >
                SIGN IN
              </Button>

              <div className="text-center text-sm">
                <span className="text-gray-500">Not a Member? </span>
                <Link href="/register" className="text-black hover:underline">
                  Join Us.
                </Link>
              </div>
            </div>
          </form>
        ) : (
          <div className="flex justify-center items-center gap-2 w-full text-2xl font-medium">
            <BiLoaderAlt className="w-5 h-5 animate-spin" />
            Loading...
          </div>
        )}
      </div>
    </div>
  );
}
