import { NextResponse } from 'next/server'
import { NextApiRequest, NextApiResponse } from 'next'

export default function onRequest(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = { message: "Hello from Next.js API!" }
  console.log('res', res)
  console.log('req', req)
  //res.status(200).json(data)
  return NextResponse.json(data)
}

export function HeyoPage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = { message: "crap from Next.js API!" }
  console.log('res', res)
  console.log('req', req)
  //res.status(200).json(data)
  return NextResponse.json(data)
}
