import Link from "next/link";

export default function HistoryChangesAdmin(){
  return <>
    <section className="mt-3 mx-auto lg:max-w-6xl md:w-full transition duration-200">
      <h1 className="font-semibold text-2xl">
        Historial de cambios del administrador <i className="text-blue-300">Nombre del admin</i>
      </h1>
      <p className="mt-3 text-md text-gray-600 dark:text-white">
        A continuación, se muestran el listado de cambios registrados del administrador.
      </p>
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 mt-3">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="w-11 text-center px-6 py-3">#</th>
              <th scope="col" className="px-6 py-3">Fecha y hora</th>
              <th scope="col" className="px-6 py-3">Tipo de cambio</th>
              <th scope="col" className="px-6 py-3">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td scope="col" className="px-6 py-4 font-semibold">3</td>
              <td scope="col" className="px-6 py-4">02/12/2024 10:20:53</td>
              <td scope="col" className="px-6 py-4">admin_login</td>
              <td scope="col" className="px-6 py-4">El administrador inicio sesión de forma correcta</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td scope="col" className="px-6 py-4 font-semibold">2</td>
              <td scope="col" className="px-6 py-4">17/02/2025 10:01:32</td>
              <td scope="col" className="px-6 py-4">admin_show_list_teachers</td>
              <td scope="col" className="px-6 py-4">El usuario consulto el listado de profesores registrados</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td scope="col" className="px-6 py-4 font-semibold">1</td>
              <td scope="col" className="px-6 py-4">17/02/2025 10:03:59</td>
              <td scope="col" className="px-6 py-4">show_details_plan</td>
              <td scope="col" className="px-6 py-4">El administrador consulto los detalles del plan 15
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full mt-7">
        <Link href="../admins/" className="rounded-md bg-gray-500 flex items-center gap-2 px-2 py-2.5 text-sm font-medium text-white focus:outline-none hover:bg-gray-700 hover transition duration-300 cursor-pointer w-45">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Regresar al listado
          </Link>
      </div>
    </section>
  </>
}