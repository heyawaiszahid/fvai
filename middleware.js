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

  if (path === "/detailed-questionnaire/valuation" && !appData?.detailedQuestionnaire) {
    return NextResponse.redirect(new URL("/detailed-questionnaire", req.url));
  }

  if (path === "/initial-questions/valuation" && appData?.initialQuestions) {
    const response = NextResponse.next();
    response.headers.set("x-app-data", JSON.stringify(appData));
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/initial-questions/valuation", "/detailed-questionnaire", "/detailed-questionnaire/valuation"],
};
