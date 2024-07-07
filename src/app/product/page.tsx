//import ProductLayout from './layout';
export async function generateStaticParams() {
  return [{params:{}}]
}
export default function ProductIndexPage() {
  return (
    <>
     
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Welcome to the Product Page</h1>
        <p>This is the main product page. Here you can find links to all products and other product-related pages.</p>
      </main>
      
      </>
  );
}

