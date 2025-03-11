const Card = ({children}: {children:React.ReactNode} ) =>{
  const cardStyle = {
    border: "thin solid gray",
    margin: "1rem",
    padding: "1rem",
    borderRadius: "13px"
  }

  return <div style={cardStyle}>{children}</div>
}

export default Card;