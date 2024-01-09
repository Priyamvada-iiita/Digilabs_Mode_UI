import connectToDB from "@/app/lib/utils";
import { NextResponse } from "next/server";
import { AdminUser } from "@/app/lib/models";
export async function POST(req:any) {
  try {
    await connectToDB();
    const { username } = await req.json();
    const user = await AdminUser.findOne({ username }).select("_id");
    console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}