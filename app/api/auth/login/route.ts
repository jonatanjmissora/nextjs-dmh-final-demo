import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const cookieOptions = { expires: new Date(new Date().getTime() + 3600000) }

export async function POST(request: NextRequest) {

  cookies().set('token', "token", cookieOptions)
  cookies().set('userid', "01", cookieOptions)
  cookies().set('username', "nombre apellido", cookieOptions)
  cookies().set('accountid', "01", cookieOptions)

  return NextResponse.json({ success: true })
}



