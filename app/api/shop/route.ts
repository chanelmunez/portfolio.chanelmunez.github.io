import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Sample shop data - replace with your actual data source
  const shopData = {
    categories: ['Electronics', 'Clothing', 'Books', 'Home'],
    featured: [
      { id: 1, name: 'Product 1', price: 99.99 },
      { id: 2, name: 'Product 2', price: 149.99 },
    ],
    products: [
      { id: 1, name: 'Product 1', price: 99.99, category: 'Electronics' },
      { id: 2, name: 'Product 2', price: 149.99, category: 'Electronics' },
      { id: 3, name: 'Product 3', price: 29.99, category: 'Clothing' },
    ]
  };

  return NextResponse.json(shopData);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Handle POST request - e.g., adding new products
    return NextResponse.json({ message: 'Success', data: body });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
