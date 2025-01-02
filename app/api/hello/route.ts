import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

/*
export async function GET() {
  //const responseText = 'get sadlkjf '
  const responseText = {'hey':'you guys'} 

  // In the edge runtime you can use Bindings that are available in your application
  // (for more details see:
  //    - https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#use-bindings-in-your-nextjs-application
  //    - https://developers.cloudflare.com/pages/functions/bindings/
  // )
  //
  // KV Example:
  // const myKv = getRequestContext().env.MY_KV_NAMESPACE
  // await myKv.put('suffix', ' from a KV store!')
  // const suffix = await myKv.get('suffix')
  // return new Response(responseText + suffix)

  return new Response(responseText)
}
*/

//export default function onRequest({ res }) {
export default function onRequest() {
  const data = { message: "asklfdskjfslfj" };
  //res.status(200).json(data);
  return new Response("stuff!")
}


