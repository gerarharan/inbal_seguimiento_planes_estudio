import { createContext } from "react"

export const ModalContext = createContext({
  data: '',
})

export default function ModalProvider({
  children,
}: Readonly<{ children: React.ReactNode}>) {
  return (<ModalContext.Provider 
    value={{
      data: 'Hello World'
    }}>
      {children}
    </ModalContext.Provider>
  );
}