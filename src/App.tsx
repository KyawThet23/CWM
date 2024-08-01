// import Alert from "./components/alert";
// import { useState } from "react";
// import Button from "./components/button";
// import Alert from "./components/alert";
import ListGroup from "./components/listGroup";

function App() {

  // const [alertVisible,setAlertVisible] = useState(false);
  
  const items = ["Mandalay", "Yangon", "Taunggyi", "Thibaw", "Naung cho"];
  const handleSelectItem = (item : string) => {
    console.log(item)
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>

      {/* <Alert>
        Hello <span>Alert</span> 
      </Alert> */}

      {/* { alertVisible && <Alert onClose={() => setAlertVisible(false)}>Alert is showing.</Alert> }
      <Button children="My button" onClick={() => setAlertVisible(true)} color="secondary"/> */}

    </div>
  );
}

export default App;
