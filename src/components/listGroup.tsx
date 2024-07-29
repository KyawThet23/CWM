import { useState } from "react";

function ListGroup() {
  const items = ["Mandalay", "Yangon", "Taunggyi", "Thibaw", "Naung cho"];

  // Hook
  const [selectedIndex,setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length == 0 && <p>No items found</p>;
  };

  return (
    <>
      <h1>Cities</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item , index) => (
          <li
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            onClick={() => setSelectedIndex(index)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
