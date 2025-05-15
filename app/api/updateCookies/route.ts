import { UserDataTypes } from "@/app/types/user.types";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const cookieOptions = { expires: new Date(new Date().getTime() + 3600000) }

export async function POST(request: NextRequest) {
    const newUserData: UserDataTypes = await request.json();
    
    const newUsername = `${newUserData.firstname} ${newUserData.lastname}`
    cookies().set("username", newUsername, cookieOptions)

    return new NextResponse(JSON.stringify("Cookies actualizadas"), {
        status: 200,
      })
}