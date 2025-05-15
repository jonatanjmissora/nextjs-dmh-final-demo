import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {

  try {

    cookies().getAll().forEach((cookie) => {
      cookies().delete(cookie.name);
    });

    return new Response(JSON.stringify({}), {
      status: 200,
    })
  } catch (e) {
    if (e instanceof Error)
      //console.log("ERROR", e.message)
      return new Response(JSON.stringify({
        error: 'Internal server error'
      }), {
        status: 500,
      })
  }
}