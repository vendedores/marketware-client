import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ProductCard from "./components/product/ProductCard";
import "./App.css";

const drillUrl =
  "http://mobileimages.lowes.com/productimages/8b97fbe9-ec1a-481b-b9ed-c4f8fc3481b2/09209991.jpg";
const vacuumUrl =
  "https://www.zoro.com/static/cms/product/full/Z0oGH-jcpEx_.JPG";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ProductCard
        id="alkjfs"
        imageUrl={drillUrl}
        name="Dewalt Drill"
        retailPrice={250}
        salePrice={130}
        quantity={2}
      />
      <ProductCard
        id="aldfjie"
        imageUrl={vacuumUrl}
        name="Powerless Dewalt Vacuum"
        retailPrice={200}
        salePrice={170}
        quantity={1}
      />
      <ProductCard
        id="aldfjie"
        imageUrl={vacuumUrl}
        name="Powerless Dewalt Vacuum"
        retailPrice={200}
        salePrice={170}
        quantity={1}
      />
    </div>
  );
}

export default App;
