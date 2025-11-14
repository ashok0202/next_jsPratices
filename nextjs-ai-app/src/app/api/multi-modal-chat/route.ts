import { streamText, UIMessage, convertToModelMessages } from "ai";
//import { openai } from "@ai-sdk/openai";
import { google } from "@ai-sdk/google";


// multi-model type is used for the image analizer and pdf analizer also used for multi-modal
export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
      model: google("gemini-2.5-flash"),
      messages: convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Error streaming chat completion:", error);
    return new Response("Failed to stream chat completion", { status: 500 });
  }
}

// export async function POST(req: Request) {
//   try {
//     const { messages }: { messages: UIMessage[] } = await req.json();

//     const result = streamText({
//       model: openai("gpt-5-nano"),
//       messages: convertToModelMessages(messages),
//     });

//     return result.toUIMessageStreamResponse();
//   } catch (error) {
//     console.error("Error streaming chat completion:", error);
//     return new Response("Failed to stream chat completion", { status: 500 });
//   }
// }