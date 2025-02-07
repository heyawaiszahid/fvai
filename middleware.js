import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;
  const min = url.searchParams.get("min");
  const max = url.searchParams.get("max");

  if (!min || !max) {
    return NextResponse.redirect(new URL("/initial-questions", url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/detailed-questionnaire",
};
