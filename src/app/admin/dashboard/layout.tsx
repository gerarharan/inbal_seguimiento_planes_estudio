

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
    <h3 className="font-semibold text-2xl mb-2">Dashboard</h3>
    <aside>{ analytics }</aside>
    <aside>{ statistics }</aside>
    <aside>{ lastRegisters }</aside>
    <section>{children}</section>
  </>
}