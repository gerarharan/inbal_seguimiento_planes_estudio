

export default function DashboardLayout({
  children,
  analytics,
  lastRegisters,
  statistics,
}: {
  children: React.ReactNode,
  analytics: React.ReactNode,
  statistics: React.ReactNode,
  lastRegisters: React.ReactNode,
}){
  return <>
    <section>
      <h3 className="mt-3 mb-4">Componente principal</h3>
      <aside>{ analytics }</aside>
      <aside>{ statistics }</aside>
      <aside>{ lastRegisters }</aside>
    </section>
    <section>{children}</section>
  </>
}