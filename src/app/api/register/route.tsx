
  
import { NextRequest, NextResponse } from "next/server";
import "../../../database/config";
import { UserModel } from "@/models/users";


export  async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === 'POST') {
    try {
      const body = await req.json();
      console.log("body", body);
       body.role="user"
     
       const data = new UserModel(body);
      const result = await data.save();
      const savedData = result.toObject();

      return NextResponse.json({ message: "Data added" });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Error creating client" });
    }
  } else {
    return NextResponse.json({ message: "Method Not Allowed" });
  }
}

