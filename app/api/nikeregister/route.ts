import { dbconnect } from "@/lib/mongoDB";
import registerUser from "@/models/registerUser";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    await dbconnect();
    const { email, password, firstName, lastName, emailUpdates } =
      await req.json();
    const existingUser = await registerUser.findOne({ email }).select("_id");
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exist" },
        { status: 500 }
      );
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      await registerUser.create({
        email,
        password: hashedPassword,
        firstName,
        lastName,
        emailUpdates,
      });
    }
    return NextResponse.json(
      { message: "User Registered"},
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error while registration", error },
      { status: 500 }
    );
  }
}
