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
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Holla Famila</h1>
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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
