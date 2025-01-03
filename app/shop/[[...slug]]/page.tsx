import React from 'react'
import { useParams, useSearchParams } from 'next/navigation'

// Enable dynamic paths
export const dynamicParams = true

async function getShopData() {
  const res = await fetch('http://localhost:3000/api/shop', {
    next: { revalidate: 3600 } // Cache for 1 hour
  })
  
  if (!res.ok) {
    throw new Error('Failed to fetch shop data')
  }

  return res.json()
}

type Props = {
  params: Promise<{ [key: string]: string | string[] | undefined }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ params, searchParams }: Props) {
    await params
    await searchParams
    console.log('slug page')
    console.log('params', params)
    console.log('query', searchParams)

    const query = Object.entries(searchParams).map(([key, value]) => `${key}=${value}`).join('&')
    let slugPath: string[] = [];
    if ('slug' in searchParams) {
        if (Array.isArray(searchParams.slug)) {
            slugPath = searchParams.slug.map(String);
        } else if (searchParams.slug) {
            slugPath = [String(searchParams.slug)];
        }
    }
    console.log('slugs', slugPath)


  const shopData: any = await getShopData()

  return (
    <div className="p-4 shop">
      <p>Path: {slugPath.join('/')}</p>
      <p>Query: {query}</p>

      <h1 className="text-2xl font-bold mb-4">Shop</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Categories</h2>
        <div className="flex gap-4">
          {shopData.categories.map((category: string) => (
            <a
              key={category}
              href={`/shop/categories/${category.toLowerCase()}`}
              className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
            >
              {category}
            </a>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {shopData.featured.map((product: any) => (
            <div key={product.id} className="p-4 border rounded">
              <h3 className="font-semibold">{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

// This pre-renders the main shop pages
export async function generateStaticParams() {
    return [
        { slug: ['products'] },
        { slug: ['categories'] },
        { slug: ['featured'] }
    ]
}
