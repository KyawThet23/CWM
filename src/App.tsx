import ListGroup from "./components/listGroup";

function App() {
  const items = ["Mandalay", "Yangon", "Taunggyi", "Thibaw", "Naung cho"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
