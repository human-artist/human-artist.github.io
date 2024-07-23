"use client";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { Item } from "@/app/api/dummy/product";
//import ProductLayout from './layout';
// export async function generateStaticParams() {
//   return [{params:{}}]
// } 

// pages/products.tsx


type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
};

const Products: React.FC = () => {
    const [products, setProducts] = useState<Item[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      console.log("hey jude")
        fetch('/api/dummy')
            .then(response => response.json())
            .then(data => {
                setProducts(data.data.item);
                setLoading(false);
                console.log("Waka",data.data.item)
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                //setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Product Listing</h1>
            <ul>
                {products.map(({_id, _type, title, price}) => (
                    <li key={_id}>
                        <h2>{_type}</h2>
                        <p>{title}</p>
                        <p>`${price?.toFixed(2)}`</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
