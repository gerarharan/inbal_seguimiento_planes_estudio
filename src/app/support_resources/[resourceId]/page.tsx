import { Metadata } from 'next';

type Props = {
  params: {
    resourceId: string,
  }
}

export const generateMetadata = ({params}: Props): Metadata => {
  return{
    title: `Recurso de ayuda ${params.resourceId}`,
    description: `Consulta de los detalles del recurso ${params.resourceId}`
  }
}

export default function ResourceDetail(
  {params} : Props
){
  return <h1>Recurso de ayuda {params.resourceId}</h1>
}