import connectToDB from "@/app/lib/utils";
import { Submission } from "@/app/lib/models";

import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req: any) {
  const {  email } = await req.json();
 
  try {
    await connectToDB();
    await Submission.create({ email });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}


