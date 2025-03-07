import Link from "next/link"

export default function AdminLayout(
  { children } : {
    children : React.ReactNode
  }
) {
  return (
    <>
      <header className="full">
        <nav >
          <Link href="/admin/dashboard">Dashboard</Link>
          <Link href="/admin/admins">Administradores</Link>
        </nav>
      </header>
      <main>
        <aside>
          <form>
            <input type="search" name="" id="" />
            <button type="submit">Buscar</button>
          </form>
        </aside>
        <section>{children}</section>
      </main>
      <footer>Pie página interno</footer>
    </>
  )
}