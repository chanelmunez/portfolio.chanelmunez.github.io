  import { NextResponse } from 'next/server'

export default function onRequest(req, res) {
  const data = { message: "Hello from Next.js API!" }
  console.log('res', res)
  console.log('req', req)
  //res.status(200).json(data)
  return Response.json(data)
}

export function HeyoPage(req, res) {
  const data = { message: "crap from Next.js API!" }
  console.log('res', res)
  console.log('req', req)
  //res.status(200).json(data)
  return Response.json(data)
}

