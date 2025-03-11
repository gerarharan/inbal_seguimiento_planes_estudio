import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Seguimiento a los Planes de Estudio | INBAL",
  description: "Sistema para la atención, actualización, diseño, creación y seguimiento de los planes y programas de estudio del INBAL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased flex flex-col h-screen justify-between`}
      > 
        <header className="p-1">
          <h3 className="ms-2">📑 SISEPP</h3>
        </header>
        <main>
          {children}
        </main>
        <footer className="p-2 grid grid-cols-2 gap-2 items-center h-10">
          <div className="">
            <span>INBAL - SGEIA 2025 | Seguimiento de los programas y planes de estudio</span>
          </div>
          <div className="flex justify-around items-center">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="#"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Recursos de ayuda
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="#"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Reportar incidente
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
