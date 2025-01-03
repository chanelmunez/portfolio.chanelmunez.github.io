//import { getRequestContext } from '@cloudflare/next-on-pages'
//
////export const runtime = 'edge'
//
////export default function onRequest({ res }) {
//export default function onRequest() {
//  const data = { message: "asklfdskjfslfj" };
//  return new Response("stuff!")
//
//  // In the edge runtime you can use Bindings that are available in your application
//  // (for more details see:
//  //    - https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#use-bindings-in-your-nextjs-application
//  //    - https://developers.cloudflare.com/pages/functions/bindings/
//  // )
//  //
//  // KV Example:
//  // const myKv = getRequestContext().env.MY_KV_NAMESPACE
//  // await myKv.put('suffix', ' from a KV store!')
//  // return new Response(responseText + suffix)
//  // const suffix = await myKv.get('suffix')
//}
//

// In the edge runtime you can use Bindings that are available in your application
// (for more details see:
//    - https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#use-bindings-in-your-nextjs-application
//    - https://developers.cloudflare.com/pages/functions/bindings/
// )
//
// KV Example:
// const myKv = getRequestContext().env.MY_KV_NAMESPACE
// await myKv.put('suffix', ' from a KV store!')
// return new Response(responseText + suffix)
// const suffix = await myKv.get('suffix')

import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const data = {msg: "get good"}
  return NextResponse.json(data);

}

export async function POST(request: Request) {
  const data = {msg: "post good"}
  return NextResponse.json(data);
}
