import { NextRequest, NextResponse } from 'next/server';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

type Data = {
  message: string;
  data: {
    products: Product[];
  };
};

const products: Product[] = [
  { id: 1, name: 'Product 1', description: 'Description 1', price: 99.99 },
  { id: 2, name: 'Product 2', description: 'Description 2', price: 199.99 },
  // Add more products as needed
];

export const GET = function(req: NextRequest) {
  return NextResponse.json({
    message: 'Success',
    data: { products },
  });
};

// You can add more handlers for other methods like POST, PUT, DELETE as needed
