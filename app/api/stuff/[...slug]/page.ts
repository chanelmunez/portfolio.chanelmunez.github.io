
export default function Crap(req, res) {
  const data = { message: "page rap from Next.js API!" }
  console.log('res', res)
  console.log('req', req)
  //res.status(200).json(data)
  return Response.json(data)
}

