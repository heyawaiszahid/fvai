import { NextResponse } from "next/server";

export function middleware(req) {
  const path = req.nextUrl.pathname;
  const appDataCookie = req.cookies.get("appData");
  const appData = JSON.parse(appDataCookie?.value || "{}");

  if (path === "/initial-questions/valuation" && !appData?.initialQuestions) {
    return NextResponse.redirect(new URL("/initial-questions", req.url));
  }

  if (path === "/detailed-questionnaire" && !appData?.initialQuestions) {
    return NextResponse.redirect(new URL("/initial-questions", req.url));
  }

  if (path.startsWith("/detailed-questionnaire/") && !appData?.detailedQuestionnaire) {
    return NextResponse.redirect(new URL("/detailed-questionnaire", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/initial-questions/valuation", "/detailed-questionnaire", "/detailed-questionnaire/:path*"],
};
