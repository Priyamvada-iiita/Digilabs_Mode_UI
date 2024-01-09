import connectToDB from "@/app/lib/utils";
import { Submission } from "@/app/lib/models";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export const GET = async () => {
  try {
    await connectToDB();
    const data = await Submission.find({}) as mongoose.Document<any, {}, {
      createdAt: Date;
      updatedAt: Date;
      email: string;
    }>[];
    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ msg: ["Unable to send message."] });
  }
};
