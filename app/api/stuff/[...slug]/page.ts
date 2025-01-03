import { NextResponse } from 'next/server';
 
type ParamsType = Promise<{
  params: {
    [key: string]: string | string[] | undefined
  }
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}>

export default async function Crap({
  props
}: {
  props: ParamsType
}) {
  const data = { message: "page crap from Next.js API!" }
  try {
    const { params, searchParams } = await props
    delete searchParams.slug
    console.log('slug page')
    console.log('params', params)
    console.log('query', searchParams)

  } catch (error) {
    console.log('error', error)
  }

  return NextResponse.json(data)
}

