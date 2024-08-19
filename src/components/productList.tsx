import { useEffect, useState } from "react";

const ProductList = ({category} : {category : string}) => {

  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products in",category);
    setProducts(["Clothting", "Household"]);
  }, [category]);

  return (
    <div>
      <ul>
        {products.map((pro) => (
          <li key={pro}>{pro}</li>
        ))}
      </ul>
    </div>
  );

};

export default ProductList;