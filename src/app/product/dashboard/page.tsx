import Link from 'next/link'
export default function DashboardPage() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link href="/product/1">Goto Product category</Link>
        This is a dashboard page
      </main>
    );
  }