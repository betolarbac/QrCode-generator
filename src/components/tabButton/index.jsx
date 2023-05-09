



// eslint-disable-next-line react/prop-types
export default function ButtonTab({ children, isActive, onClick }) {
  if (isActive) {
    return <b>{children}</b>
  }
  return (
    <button className="buttonTab" onClick={() => {
      onClick();
    }}>
      {children}
    </button>
  )
}