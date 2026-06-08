import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySession } from "@/src/lib/session";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("session")?.value;

  const isProtectedRoute = req.nextUrl.pathname.startsWith("/clientes");

  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  // si no hay token → fuera
  if (!token) {
    return NextResponse.redirect(new URL("/ingreso", req.url));
  }

  // validar token JWT
  const session = await verifySession(token);

  if (!session) {
    return NextResponse.redirect(new URL("/ingreso", req.url));
  }

  return NextResponse.next();
}
