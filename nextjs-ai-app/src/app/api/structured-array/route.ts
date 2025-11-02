import { google } from "@ai-sdk/google";
import { streamObject } from "ai";
import { NextRequest, NextResponse } from "next/server";
import { pokemonSchema } from "./schema-array";
//import { openai } from "@ai-sdk/openai";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { type } = await req.json();

    const result = streamObject({
      model: google("gemini-2.5-flash"),
      output:"array",
      schema:pokemonSchema,
      prompt: `Generate a list of 5 ${type} type pokemon`,
    });
    return result.toTextStreamResponse();
  } catch (error: any) {
    return NextResponse.json(
      { error: "Something went wrong", message: error.message },
      { status: 500 }
    );
  }
}

// export async function POST(req: Request) {
//   try {
//     const { type } = await req.json();

//     const result = streamObject({
//       model: openai("gpt-5-nano"),
//       output: "array",
//       schema: pokemonSchema,
//       prompt: `Generate a list of 5 ${type} type pokemon`,
//     });

//     return result.toTextStreamResponse();
//   } catch (error) {
//     console.error("Error generating pokemon:", error);
//     return new Response("Failed to generate pokemon", { status: 500 });
//   }
// }
