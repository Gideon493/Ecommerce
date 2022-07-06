//import { NavLink } from "react-router-dom";
//import Product from "./Product";

//import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
//import { useState } from "react";

const Products = ({ products, addItem }) => {
  //const [data, setData] = useState([]);
  // const [filter, setFilter] = useState(data);
  // const filterProduct = (cat) => {
  //  const updatedList = data.filter((x) => x.category === cat);
  //  setFilter(updatedList);
  //};
  const ShowProducts = () => {
    return (
      <div className="buttons d-flex justify-content=center">
        <button className="btn btn-outline-warning me-2 text-dark">All</button>
        <button className="btn btn-outline-warning me-2 text-dark">
          Men's Clothing
        </button>
        <button className="btn btn-outline-warning me-2 text-dark">
          Women's Clothing
        </button>
        <button className="btn btn-outline-warning me-2 text-dark">
          Jewelery
        </button>
        <button className="btn btn-outline-warning me-2 text-dark">
          Electronics
        </button>
      </div>
    );
  };
  return (
    <div>
      <br />
      {products.map((product) => {
        return (
          <div>
            <div style={{ display: "grid" }} className="grid-container">
              <div
                class="card mb-3 border-0 shadow"
                style={{ width: " 18rem" }}
              >
                <img
                  src={product.image}
                  class="card-img-top"
                  alt="..."
                  style={{ width: "200px", height: "200px" }}
                />
                <div class="card-body">
                  <h5 class="card-title">{product.title}</h5>
                  <p class="card-text">
                    <h4 className="text-danger">${product.price}</h4>
                    <h5>{product.category}</h5>
                    <AiOutlineStar style={{ color: "crimson" }} />
                    {product.rating.rate}({product.rating.count})
                  </p>
                  <Link
                    to={`/products/${product.title}`}
                    class="btn btn-primary"
                    onClick={addItem}
                  >
                    View More...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
