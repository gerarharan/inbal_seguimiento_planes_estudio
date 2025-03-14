import Image from "next/image";

const Footer = ( ) =>{
  const cardStyle = {
    padding: "1rem",
  }

  return <footer className="p-2 grid grid-cols-2 gap-2 items-center h-8" style={cardStyle}>
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
}

export default Footer;