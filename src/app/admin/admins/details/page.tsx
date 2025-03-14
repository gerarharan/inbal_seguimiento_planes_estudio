import Link from "next/link";

export default function DetailsAdmin(){
  return <>
    <section className="mt-3 mx-auto lg:max-w-6xl md:w-full transition duration-200">
      <h1 className="font-semibold text-2xl">
        Detalles del administrador <i className="text-blue-300">Nombre del admin</i>
      </h1>
      <p className="mt-3 text-md text-gray-600 dark:text-white">
        A continuación, se muestran los detalles del administrador.
      </p>
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-200 mt-3">
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td scope="col" className="px-6 py-4 font-semibold">Fecha de registro</td>
              <td scope="col" className="px-6 py-4">02/12/2024 10:20:53</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td scope="col" className="px-6 py-4 font-semibold">Nombre</td>
              <td scope="col" className="px-6 py-4">Martín Cruz Gatica</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td scope="col" className="px-6 py-4 font-semibold">Correo electrónico</td>
              <td scope="col" className="px-6 py-4">
                <Link href="mailto:mcruz@inba.gob.mx" className="text-blue-300 hover:text-blue-500">
                  mcruz@inba.gob.mx
                </Link>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td scope="col" className="px-6 py-4 font-semibold">Estatus</td>
              <td scope="col" className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Activo
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td scope="col" className="px-6 py-4 font-semibold">Género</td>
              <td scope="col" className="px-6 py-4">Prefiero no decir</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td scope="col" className="px-6 py-4 font-semibold">Edad</td>
              <td scope="col" className="px-6 py-4">32 años</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td scope="col" className="px-6 py-4 font-semibold">Escuela</td>
              <td scope="col" className="px-6 py-4">SGEIA</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td scope="col" className="px-6 py-4 font-semibold">Teléfono</td>
              <td scope="col" className="px-6 py-4">-</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td scope="col" className="px-6 py-4 font-semibold">Celular</td>
              <td scope="col" className="px-6 py-4">55 1234 5678</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td scope="col" className="px-6 py-4 font-semibold">Puesto</td>
              <td scope="col" className="px-6 py-4">Subdirector de Asuntos Académicos y Docentes</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td scope="col" className="px-6 py-4 font-semibold">Cambios registrados</td>
              <td scope="col" className="px-6 py-4">1,546</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td scope="col" className="px-6 py-4 font-semibold">Último inicio de sesión</td>
              <td scope="col" className="px-6 py-4">17/02/2025 09:26:06</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full mt-5">
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