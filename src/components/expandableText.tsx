import { useState } from "react";

interface Prpos {
  children : string;
  maxChar? : number;
}

const ExpandableText = ({children,maxChar = 100} : Prpos) => {
  
  const [isExpended , setExpended] = useState(false);

  if(children.length <= maxChar) return <p>{children}</p> ;

  const text = isExpended ? children : children.substring(0,maxChar);
  return <p>{text}...<button onClick={() => setExpended(!isExpended)}>{isExpended ? 'Less' : 'More'}</button></p>
}

export default ExpandableText