// Return a list of `params` to populate the [slug] dynamic segment

import Link from "next/link";
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

interface StaticProductProps {
  params: {
    id:string;
  }
}

export default function Page({ params }: StaticProductProps) {
  const { id } = params
  return (
    <div>
      <Link href="/product/dashboard">dashboard</Link><p>ID: {id}</p>
    </div>
  );
}


