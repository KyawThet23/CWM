import { useState } from "react";

interface Props{
  items: string[];
  heading: string;
}

function ListGroup({items , heading} : Props) {

  // Hook
  const [selectedIndex,setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length == 0 && <p>No items found</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
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
