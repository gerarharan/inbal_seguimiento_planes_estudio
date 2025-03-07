"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/admin/dashboard")
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex flex-col justify-center px-6 py-12 lg:px-8 col-start-2 rounded-md shadow-lg shadow-gray-400/50">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="dark:invert mx-auto h-10 w-auto"
            src="/logo_inbal.svg"
            alt="INBAL"
            width={180}
            height={38}
            priority
          />
          <h2 className="mt-10 text-start text-2xl/9 font-bold tracking-tight ">Iniciar sesión</h2>
        </div>
        <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-semilight ">Correo electrónico</label>
              <div className="mt-2">
                <input type="email" name="email" id="email" autoComplete="email" required className="block w-full rounded-md bg-white text-gray-900 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="pass" className="block text-sm/6 font-semilight ">Contraseña</label>
                <div className="text-sm">
                  <a href="/account/forgot_pass" className="font-medium text-indigo-600 hover:text-indigo-500">¿Olvidaste tu contraseña?</a>
                </div>
              </div>
              <div className="mt-2">
                <input type="password" name="pass" id="pass" autoComplete="current-password" required className="block w-full text-gray-900 rounded-md bg-white px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>
            <div className="mt-10">
              <button type="button" onClick={handleClick} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Iniciar sesión</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
