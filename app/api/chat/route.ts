import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";
import { prompt_and_examples } from "@/lib/prompts";

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export const runtime = "edge";

export async function POST(req: Request) {
    const { messages } = await req.json();

    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        stream: true,
        messages: [...prompt_and_examples, ...messages],
    });

    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);
}
