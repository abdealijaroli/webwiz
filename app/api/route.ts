import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-TD3rTy4ASNyt51kdeHOVlazG",
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function GET(request: NextRequest) {
    const user = await prisma.user.findMany();
    if (!user) {
        return NextResponse.next();
    }
    return NextResponse.json({ userDetails: user });
}

// export async function getGptRes(request: NextRequest) {
//     const response = await openai.createChatCompletion({
//         model: "gpt-3.5-turbo",
        
//     });
//     return NextResponse.json(response);
//}



export async function sendGptReq(request: NextRequest) {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello!" }],
    });
    return NextResponse.json(response);
}
