import { dbconnect } from "@/lib/mongoDB";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import signUpUser from "@/models/signUpUser";

export async function POST(req: Request) {
  try {
    await dbconnect();
    const { email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await signUpUser.create({
      email,
      password: hashedPassword,
    });
    return NextResponse.json({ message: "User Registered" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error while registration", error },
      { status: 500 }
    );
  }
}
