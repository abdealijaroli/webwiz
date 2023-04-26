import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const user = await prisma.user.findMany();
    if (!user) {
        return NextResponse.next();
    }
    return NextResponse.json({userDetails: user});
}
