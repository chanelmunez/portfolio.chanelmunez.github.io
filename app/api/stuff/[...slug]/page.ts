
type Props = {
  params: {
    slug: string[]
  }
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export default async function Crap({ params, searchParams }: Props) {
  const data = { message: "page crap from Next.js API!" }
  params = await params
  searchParams = await searchParams
  delete searchParams.slug
  console.log('slug page')
  console.log('params', params)
  console.log('query', searchParams)

  return Response.json(data)
}

