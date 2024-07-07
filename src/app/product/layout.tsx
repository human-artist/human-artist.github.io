
export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <h1> Header specific for product</h1>
        {/* Include shared UI here e.g. a header or sidebar */}
       
        {children}
        <h2> Footer specific for product</h2>
      </section>
    )
  }

