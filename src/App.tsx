// import Alert from "./components/alert";
// import { useState } from "react";
// import Button from "./components/button";
// import Alert from "./components/alert";
// import ListGroup from "./components/listGroup";

// import FormState from "./components/formState";
import HookForm from "./components/hookForm";

// import ExpandableText from "./components/expandableText";
// import Form from "./components/form";

// import produce from "immer";
// import { useState } from "react";
// import Navbar from "./components/shop/navbar";
// import Cart from "./components/shop/cart";

// import Like from "./components/like";

function App() {

  // const [cartItems,setCartItems] = useState(['Product 1','Product 2']);

  // const [rapper,setRapper] = useState([
  //   { id: 1 , name :'biggy' , label : 'Columbia' },
  //   { id: 2 , name :'Jay Z' , label : 'Self' }
  // ]);

  // const handleRapper = () => {
  //   setRapper(produce(draft => {
  //     const rapper = draft.find(rapper => rapper.id = 1);
  //     if (rapper) rapper.label = 'self';
  //   }))
  // }

  // const [pizza,setPizza] = useState({
  //   name: 'Spicy Pepperoni',
  //   toppings: ['Mushroom']
  // });

  // const handleRapperUpdate = () => {
  //   setRapper(rapper.map( rap => rap.id == 1 ? {...rap , label : 'self'} : rap))
  // }

  // const handleAddToping = () => {
  //   setPizza({ ...pizza, toppings: [...pizza.toppings , 'Cheese'] })
  // }

  // const [alertVisible,setAlertVisible] = useState(false);
  
  // const items = ["Mandalay", "Yangon", "Taunggyi", "Thibaw", "Naung cho"];
  // const handleSelectItem = (item : string) => {
  //   console.log(item)
  // }

  return (
    <div>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/> */}

      {/* <Alert>
        Hello <span>Alert</span> 
      </Alert> */}

      {/* { alertVisible && <Alert onClose={() => setAlertVisible(false)}>Alert is showing.</Alert> }
      <Button children="My button" onClick={() => setAlertVisible(true)} color="secondary"/> */}

      {/* <Like onClick={() => console.log('clicked')}/> */}

      {/* {rapper.map(rap => <p key={rap.id}>{rap.name} : {rap.label}</p>)}
      <button onClick={handleRapper}>
        Add
      </button>

      <Navbar count={cartItems.length} />
      <Cart cartItem={cartItems} /> */}

      {/* <ExpandableText maxChar={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, alias molestiae illum impedit vel soluta animi magni quod nostrum autem harum beatae ipsam? Vitae consectetur natus nam perferendis recusandae architecto earum non illum, asperiores rem facilis officiis voluptates repellendus sapiente provident tenetur omnis! Accusantium itaque, aut voluptatum nemo facere libero repudiandae inventore aliquid quas magnam. Itaque, natus! Nihil cumque dignissimos fugit repudiandae ratione nobis nemo quas quos deserunt aliquid commodi labore saepe quibusdam culpa nam reprehenderit voluptate at laborum possimus, eos ab molestias! Sint dicta rerum similique et qui assumenda sapiente, sequi, beatae asperiores commodi voluptate, explicabo numquam eum facere?
      </ExpandableText> */}

      {/* <Form /> */}

      {/* <FormState /> */}

      <HookForm />

    </div>
  );
}

export default App;
