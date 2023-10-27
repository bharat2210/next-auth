
  
import { NextRequest, NextResponse } from "next/server";
import "../../../database/config";
import { UserModel } from "@/models/users";


export  async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === 'POST') {
      await UserModel.create({
        name:"admin",
        email:"admin@gmail.com",
        password:"admin123",
        role:"admin"
      })

      return NextResponse.json({ message: "Data added" });
   
  } else {
    return NextResponse.json({ message: "Method Not Allowed" });
  }
}