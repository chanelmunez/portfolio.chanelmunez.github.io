  import { NextResponse } from 'next/server'

export default function Crap(req, res) {
  const data = { message: "crap from Next.js API!" };
  console.log('res', res);
  console.log('req', req);
  //res.status(200).json(data);
  return NextResponse.json(data)
}

