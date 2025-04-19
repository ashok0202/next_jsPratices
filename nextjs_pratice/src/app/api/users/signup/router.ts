import { NextResponse, NextRequest } from "next/server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const reqBody = await request.json();

    console.log(reqBody);
    const { username, email, password } = reqBody;
    if (!username || !email || !password) {
      return NextResponse.json({ message: "invalid data passed" }, { status: 400 });
    }
    const userExists = await prisma.user.findUnique({
      where: {
        email,
      }
    });

    if (userExists) {
      return NextResponse.json({ message: "user already exists" }, { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "user created Successfully", user: newUser }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
