"use client";
import { useState } from "react";
import Link from "next/link"

export default function AdminLayout(
  { children } : {
    children : React.ReactNode
  }
) {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <>
      <header className="full">
        <nav className="flex justify-around">
          <Link href="/admin/dashboard">Dashboard</Link>
          <Link href="/admin/admins">Administradores</Link>
          <Link href="/admin/teachers">Docentes</Link>
        </nav>
      </header>
      <main className="flex flex-col">
        <aside className="p-2">
          <form>
            <input type="search" name="" id="" className="rounded-md bg-white text-black text-md me-2" 
              value={inputSearch} 
              onChange={ (e) => setInputSearch(e.target.value) }
            />
            <button className="rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white opacity-100 focus:outline-none" type="button">Buscar</button>
          </form>
        </aside>
        <section>
          {children}
        </section>
      </main>
      <footer className="mt-4">
        Pie página interno
      </footer>
    </>
  )
}