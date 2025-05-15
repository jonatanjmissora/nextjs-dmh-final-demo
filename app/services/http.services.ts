// const URL_domain = "http://localhost:3000"
const URL_domain = "https://nextjs-dmh-final-demo.vercel.app"

export const httpPost = async (endpoint: string, data?: object | null, token?: string) => {
  const res = await fetch(`${URL_domain}/${endpoint}`, {
    method: 'POST',
    headers: !token
      ? { 'Content-Type': 'application/json' }
      : {
        'Content-Type': 'application/json',
        "Authorization": token
      },
    body: JSON.stringify(data ?? {})
  });

  return res.json();
}