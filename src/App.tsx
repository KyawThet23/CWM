// import Alert from "./components/alert";
// import { useState } from "react";
// import Button from "./components/button";
// import Alert from "./components/alert";
// import ListGroup from "./components/listGroup";

import produce from "immer";
import { useState } from "react";

// import Like from "./components/like";

function App() {

  const [rapper,setRapper] = useState([
    { id: 1 , name :'biggy' , label : 'Columbia' },
    { id: 2 , name :'Jay Z' , label : 'Self' }
  ]);

  const handleRapper = () => {
    setRapper(produce(draft => {
      const rapper = draft.find(rapper => rapper.id = 1);
      if (rapper) rapper.label = 'self';
    }))
  }

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

      {rapper.map(rap => <p key={rap.id}>{rap.name} : {rap.label}</p>)}
      <button onClick={handleRapper}>
        Add
      </button>

    </div>
  );
}

export default App;
