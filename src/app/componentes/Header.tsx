const Header = ({children}: {children:React.ReactNode} ) =>{
  const cardStyle = {
    padding: "1rem",
  }

  return <header className="p-1 flex justify-between" style={cardStyle}>
          <h3 className="ms-2">📑 SISEPP</h3>
          <div>
            {children}
          </div>
        </header>
}

export default Header;