
interface Props {
  cartItem : string[]
}

const Cart = ({cartItem}: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItem.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

export default Cart