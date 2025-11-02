import { NextRequest, NextResponse } from "next/server";
import { streamText, UIMessage, convertToModelMessages } from "ai";
import { google } from "@ai-sdk/google";
import { da } from "zod/locales";

export async function POST(req: NextRequest, res: NextResponse) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  try {
    const result = streamText({
      model: google("gemini-2.5-flash"),
      messages: [
        {
          role: "system",
          content: "You are a helpful coading assistant. keep responses under 3 sentences and focus on pratical examples.",
        },
        ...convertToModelMessages(messages),
      ],
    });

    result.usage.then((usage) => {
      console.log({
        messageCount: messages.length,
        inputTokens: usage.inputTokens,
        outputTokens: usage.outputTokens,
        totalTokens: usage.totalTokens,
      });
    });
    return result.toUIMessageStreamResponse();
  } catch (error: any) {
    return NextResponse.json(
      { error: "Something went wrong", message: error.message },
      { status: 500 }
    );
  }
}
