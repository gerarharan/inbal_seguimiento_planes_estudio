import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function RegisterAdmin(){
  return <>
    <form className="mt-3 mx-auto lg:max-w-6xl md:w-full transition duration-200">
      <h1 className="font-semibold text-2xl">Registrar administrador</h1>
      <p className="mt-3 text-md text-gray-600 dark:text-white">
        Ingresa los datos que se solicitan a continuación, al terminar da clic en <strong>Registrar</strong>.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-12">
        <div className="sm:col-span-4">
          <label htmlFor="first-name" className="block text-sm/6 font-medium">Nombre (s) <sup className="text-red-400">*</sup> </label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first_name" className="block w-full rounded-md bg-white text-gray-800 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="last-name" className="block text-sm/6 font-medium">Primer apellido <sup className="text-red-400">*</sup></label>
          <div className="mt-2">
            <input type="text" name="last-name" id="last_name" className="block w-full rounded-md bg-white text-gray-800 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="last-name" className="block text-sm/6 font-medium">Segundo apellido <sup className="text-red-400">*</sup></label>
          <div className="mt-2">
            <input type="text" name="last-name" id="last_name" className="block w-full rounded-md bg-white text-gray-800 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div className="sm:col-span-6">
          <label htmlFor="email" className="block text-sm/6 font-medium">Correo electrónico <sup className="text-red-400">*</sup></label>
          <div className="mt-2">
            <input id="email" name="email" type="email" className="block w-full rounded-md bg-white text-gray-800 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div className="sm:col-span-6">
          <label htmlFor="password" className="block text-sm/6 font-medium">Contraseña <sup className="text-red-400">*</sup></label>
          <div className="mt-2">
            <input id="password" name="password" type="password" className="block w-full rounded-md bg-white text-gray-800 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div className="sm:col-span-6">
          <label htmlFor="status" className="block text-sm/6 font-medium">Estatus</label>
          <div className="mt-2 grid grid-cols-1">
            <select id="status" name="status" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <option value="">Selecciona una opción</option>
              <option value="1">Activo</option>
              <option value="0">Suspendido</option>
            </select>
            <svg className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="status" className="block text-sm/6 font-medium">Género</label>
          <div className="mt-2 grid grid-cols-1">
            <select id="status" name="status" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-800 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <option value="">Selecciona una opción</option>
              <option value="1">Masculino</option>
              <option value="2">Femenino</option>
              <option value="3">No binario</option>
              <option value="4">Transgénero</option>
              <option value="5">Otro</option>
              <option value="6">Prefiero no decir</option>
            </select>
            <svg className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="age" className="block text-sm/6 font-medium">
            Edad <sup className="text-red-400">*</sup>
          </label>
          <div className="mt-2">
            <input id="age" name="age" type="number" min="1" max="100" className="block w-full rounded-md bg-white text-gray-800 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div className="sm:col-span-6">
          <label htmlFor="status" className="block text-sm/6 font-medium">
            Escuela <sup className="text-red-400">*</sup>
          </label>
          <div className="mt-2 grid grid-cols-1">
            <select id="status" name="status" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-800 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <option value="">Selecciona una opción</option>
              <option value="0">SGEIA</option>
              <option value="1">Escuela A</option>
              <option value="2">Escuela B</option>
              <option value="3">Escuela C</option>
              <option value="4">Escuela D</option>
            </select>
            <svg className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="sm:col-span-6">
          <label htmlFor="status" className="block text-sm/6 font-medium">
            Tipo <sup className="text-red-400">*</sup>
          </label>
          <div className="mt-2 grid grid-cols-1">
            <select id="status" name="status" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-800 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <option value="">Selecciona una opción</option>
              <option value="1">Director</option>
              <option value="2">Coordinador</option>
              <option value="3">Gestor de contenido</option>
              <option value="4">Revisor</option>
            </select>
            <svg className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="num_ext" className="block text-sm/6 font-medium">
            Ext.
          </label>
          <div className="mt-2">
            <input id="num_ext" name="num_ext" type="number" min="1" max="100" className="block w-full rounded-md bg-white text-gray-800 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="phone" className="block text-sm/6 font-medium">
            Teléfono
          </label>
          <div className="mt-2">
            <input id="phone" name="phone" type="number" min="1" max="100" className="block w-full rounded-md bg-white text-gray-800 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div className="sm:col-span-6">
          <label htmlFor="mobile" className="block text-sm/6 font-medium">
            Celular
          </label>
          <div className="mt-2">
            <input id="mobile" name="mobile" type="number" min="1" max="100" className="block w-full rounded-md bg-white text-gray-800 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div className="sm:col-span-10">
          <label htmlFor="position" className="block text-sm/6 font-medium">
            Puesto
          </label>
          <div className="mt-2">
            <input id="position" name="position" type="number" min="1" max="100" className="block w-full rounded-md bg-white text-gray-800 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div className="sm:col-span-12 flex justify-between">
          <Button asChild variant="outline" className="flex items-center hover:bg-gray-200 hover transition duration-300 cursor-pointer">
            <Link href="/admin/admins/">
            <ArrowLeft className="me-1"  size={18} />
            Regresar al listado
            </Link>
          </Button>
          <Button variant="outline" className="bg-cyan-500 text-white font-semibold focus:outline-none hover:bg-cyan-700 hover:transition duration-200 cursor-pointer">Registrar</Button>
        </div>
      </div>
    </form>
  </>
}