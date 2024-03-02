import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { isEmail, isMobilePhone } from "validator";

export async function POST(req: Request) {
  const data = await req.json();
  try {
    if (
      !data.username ||
      !data.email ||
      !data.password ||
      !data.referral ||
      !data.noHp
    ) {
      return NextResponse.json(
        { message: "Data cannot be empty", status: false },
        { status: 404 }
      );
    } else {
      const phoneValidator = isMobilePhone(data.noHp, "id-ID");
      const emailValidator = isEmail(data.email);
      if (phoneValidator && emailValidator) {
        const add = await prisma.user.create({
          data: {
            username: data.username,
            email: data.email,
            password: await bcrypt.hash(data.password, 10),
            referral: data.referral,
            noHp: data.noHp,
            balance: 30000,
            todayIncome: 0,
            yesterdayIncome: 0,
            cumulativeIncome: 0,
            teamBenefit: 0,
          },
        });
        return NextResponse.json({ data: add, status: true });
      } else {
        return NextResponse.json(
          { status: false, message: "Data not valid" },
          { status: 404 }
        );
      }
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error,
      message: "User already exist",
      status: false,
    });
  }
}
