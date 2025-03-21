import { SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import { Button } from "./ui/button";

const UserIcon = async () => {
  const user = await currentUser();
  return (
    <div className="flex gap-3 justify-center items-center">
      <SignedIn>
        <UserButton />
      </SignedIn>
      {!user && (
        <SignInButton mode="modal">
          <Button variant={"ghost"}>Login</Button>
        </SignInButton>
      )}
    </div>
  );
};

export default UserIcon;
