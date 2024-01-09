import connectToDB from "@/app/lib/utils";
import { AdminUser } from "@/app/lib/models";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req:any) {
  try {
    const { username, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectToDB();
    await AdminUser.create({ username, password: hashedPassword });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}