import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}
/*
export async function GET() {
const data = { message: "dir dir page crap from Next.js API!" };
return NextResponse.json(data);
}
*/