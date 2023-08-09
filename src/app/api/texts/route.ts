import { NextResponse } from "next/server";
import { pageTitle, pageSubtitle, quizTitles, quizParagraphs, triviaTitles, triviaParagraphs } from "./Texts.json"

export async function GET() {
  return new NextResponse(JSON.stringify({ pageTitle, pageSubtitle, quizTitles, quizParagraphs, triviaTitles, triviaParagraphs }), {
    status: 200,
  });
}