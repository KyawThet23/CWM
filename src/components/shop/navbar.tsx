
interface Props {
  count : number
}

const Navbar = ({count}:Props) => {
  return (
    <div>Navbar : {count}</div>
  )
}

export default Navbar