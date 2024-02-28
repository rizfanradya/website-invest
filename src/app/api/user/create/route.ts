import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const data = await req.json();
  try {
    if (!data.username || !data.email || !data.password || !data.referral) {
      return NextResponse.json(
        { message: "Data cannot be empty", status: false },
        { status: 404 }
      );
    } else {
      const add = await prisma.user.create({
        data: {
          username: data.username,
          email: data.email,
          password: await bcrypt.hash(data.password, 10),
          referral: data.referral,
        },
      });
      return NextResponse.json({ data: add, status: true });
    }
  } catch (error) {
    return NextResponse.json({
      error,
      message: "User already exist",
      status: false,
    });
  }
}
