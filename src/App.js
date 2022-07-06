import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import Products from "./component/Products";
import Foods from "./component/Foods";
import Cart from "./component/Cart";



function App() {

  const [foods, setFoods] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([])
  const addItem = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
    } else {
      setCart([...cart, { ...product, qty: 1 }])
    }


  }
  const removeItem = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      )

    }

  }

  const [products, setProducts] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:2020/products")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setProducts(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
      fetch("http://localhost:2021/foods")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setFoods(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <Router>
      <div className="App">

        <h4>
          <Navbar />
        </h4>

        {error && (
          <div style={{ color: "red", fontSize: "30px" }}>{error}!!!</div>
        )}
        {isLoading && <h4>Loading ...</h4>}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/products">

            {products && <Products products={products} addItem={addItem} />}

          </Route>
          <Route exact path="/products/:title" component={Product}>

            <Product products={products} addItem={addItem} cart={cart} />

          </Route>
          <Route exact path="/foods" component={Foods}>
            {foods && <Foods foods={foods} addItem={addItem} cart={cart} />}
          </Route>

          <Route exact path="/cart" component={Cart}>

            <Cart products={products} cart={cart} addItem={addItem} removeItem={removeItem} />



          </Route>




        </Switch>
      </div>
    </Router>
  );
}

export default App;
