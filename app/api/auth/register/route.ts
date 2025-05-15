import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const SWAGGER = "https://digitalmoney.digitalhouse.com/"

type ResObjTypes = {
  status: number;
  response: { account_id?: number; email?: string, user_id?: number, error?: string };
  error: string;
}

export async function POST(request: NextRequest) {
  let resObj: ResObjTypes = {
    status: 500,
    response: { account_id: 0, email: "", user_id: 0, error: "" },
    error: "",
  }
  try {

    let res = await request.json();
    res = { ...res, dni: parseInt(res.dni, 10) }
    const data = await fetch(`${SWAGGER}api/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(res),
    });

    if (!data.ok) {
      if (data.status === 409) resObj.error = "Email ya registrado";
    }

    resObj.response = await data.json()

    //console.log("ROUTE status: ", data.status)
    resObj.status = data.status;

  } catch (e) {
    if (e instanceof Error)
      resObj.error = "Fallo al conectar"
  }
  //console.log("ROUTE response: ", resObj.response)
  return NextResponse.json(resObj);

}