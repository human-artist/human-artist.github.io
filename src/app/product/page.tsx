//import ProductLayout from './layout';
import { Metadata } from "next";

export async function generateStaticParams() {
  return [{params:{}}]
}

export const metadata: Metadata = {
  title: "SOKO",
  description: "Milo",
};

export default function ProductIndexPage() {
  console.log("I am in product page")
  return (
    <>
     
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Welcome to the Product Page</h1>
        <p>This is the main product page. Here you can find links to all products and other product-related pages.</p>
      </main>
      
      </>
  );
}

