export default function LastRegisters(){
  return <section className="">
    <div className="rounded-xl border bg-card text-card-foreground shadow p-5">
      <h3 className="font-semibold text-lg">Últimos 10 actualizaciones a planes o programas</h3>
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-200 mt-3">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="w-11 text-center px-6 py-3">#</th>
              <th scope="col" className="text-center px-6 py-3">Fecha</th>
              <th className="text-start px-6 py-3">Plan o programa</th>
              <th className="text-start px-6 py-3">Escuela</th>
              <th className="text-center px-6 py-3">Estatus de revisión</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td scope="col" className="px-6 py-4 text-center font-bold">10</td>
              <td scope="col" className="px-6 py-4 text-center">02/12/2025 10:20:53</td>
              <td scope="col" className="px-6 py-4">Plan ejemplo A </td>
              <td scope="col" className="px-6 py-4">Escuela ejemplo A </td>
              <td scope="col" className="px-6 py-4 text-center font-medium">En proceso</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td scope="col" className="px-6 py-4 text-center font-bold">9</td>
              <td scope="col" className="px-6 py-4 text-center">01/12/2025 18:45:13</td>
              <td scope="col" className="px-6 py-4">Plan ejemplo B</td>
              <td scope="col" className="px-6 py-4">Escuela ejemplo B</td>
              <td scope="col" className="px-6 py-4 text-center font-medium">En revisión de comité</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

}