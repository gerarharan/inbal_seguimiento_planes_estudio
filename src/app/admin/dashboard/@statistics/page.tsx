'use client'

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

import Card from "@/app/componentes/Card";


export default function Statistics(){
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

  return <Card>
    <h3 className="font-semibold text-2xl">Estadísticas</h3>
    <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-4">
      <div className="flex flex-col justify-center ">
        <h4 className="text-blue-300 mt-2">Registros o actualizaciones</h4>
        <ApexChart type="line" options={options1} series={series1} height={300} width={500} className="mt-2" />
      </div>
      <div className="flex flex-col justify-center ">
        <h4 className="text-blue-300 mt-2">Estatus de planes y programas</h4>
        <ApexChart type="bar" options={options2} series={series2} height={300} width={500} className="mt-2" />
      </div>
    </div>
    
  </Card>

}