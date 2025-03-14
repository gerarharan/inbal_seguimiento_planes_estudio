'use client'

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Calendar } from "@/components/ui/calendar"
import * as React from "react"

export default function Statistics(){
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  const options1 = {
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre']
    }
  }

  const series1 = [{
    name: 'series-1',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  }]

  const options2 = {
    chart: {
      id: 'statics-status-plans'
    },
    xaxis: {
      categories: ['Registrado', 'En revisión', 'Aprobado', 'Comité', 'Liberado', 'Aprobación SGEIA', 'Finalizado']
    },
    fill: {
      colors: ['#9C27B0']
    }
  }

  const series2 = [{
    name: 'series-2',
    data: [17, 30, 25, 30, 5, 10, 4]
  }]

  return <div className="p-4">
    <h3 className="font-semibold text-lg">Estadísticas</h3>
    <div className="w-full grid lg:grid-cols-13 grid-cols-1 gap-4">
      <div className="flex flex-col justify-center col-span-5">
        <h4 className="text-blue-300 mt-2">Registros o actualizaciones</h4>
        <ApexChart type="line" options={options1} series={series1} height={300} width={450} className="mt-2" />
      </div>
      <div className="flex flex-col justify-center col-span-5">
        <h4 className="text-blue-300 mt-2">Estatus de planes y programas</h4>
        <ApexChart type="bar" options={options2} series={series2} height={300} width={450} className="mt-2" />
      </div>
      <div className="flex flex-col justify-center col-span-3">
        <div className="p-2 border flex flex-col items-center rounded-lg shadow-lg">
          <h1 className="font-semibold mt-2">Calendario de entregas</h1>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md mt-3"
          />
        </div>
      </div>
    </div>
    
  </div>

}