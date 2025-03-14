import type { Metadata } from "next";
import Link from "next/link";

import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { unstable_ViewTransition as ViewTransition} from "react";

import Header from "@/app/componentes/Header";
import Footer from "@/app/componentes/Footer";
import { CircleUserRound } from 'lucide-react';

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
        <Header>
          <Link href="/admin/profile" className="flex items-center gap-2 px-2 rounded-lg transition duration-300 hover:bg-gray-300 text-lg">
            <CircleUserRound />
            Mi perfil
          </Link>
        </Header>
        <main>
          <ViewTransition>
            {children}
          </ViewTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
