//import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useState } from "react";

//import { useCart } from "react-use-cart";

const Product = ({ products, addItem }) => {
  const { title } = useParams();
  //const {addItem} = useCart();
  const [show, setShow] = useState(false);

  return (
    <div>
      {show && (
        <NavLink
          class="btn btn-warning w-17"
          to="/cart"
          style={{
            marginLeft: "30rem",
            marginTop: "-4rem",
            position: "absolute",
          }}
        >
          <BsFillCartCheckFill />
          View Cart
        </NavLink>
      )}

      <br />
      <br />
      <div>
        {products
          .filter((product) => product.title === title)
          .map((product, index) => (
            <div key={index} class="lead">
              <div
                class="card mb-3 border-0 shadow"
                style={{ maxwidth: "540px" }}
              >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src={product.image}
                      class="img-fluid rounded-start"
                      alt="..."
                      style={{ width: "350px", height: "350px" }}
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h3 class="card-title text-uppercase ">
                        {product.category}
                      </h3>
                      <p class="card-text">
                        <h4>{product.title}</h4>
                        <h4 className="display-6">${product.price}</h4>
                        {product.description}
                      </p>
                      <div className="lead">
                        <AiOutlineStar style={{ color: "crimson" }} />
                        {product.rating.rate}({product.rating.count})
                      </div>
                      <br />

                      <div style={{display:'flex'}}>
                        <div>
                          <NavLink to="/products" 
                          style={{width:'10rem'}}
                          className="btn btn-primary p-2 m-3 ">
                            Back
                          </NavLink>
                        </div>
                        <button
                          class="btn btn-outline-primary m-3 "
                          style={{width:'10rem'}}

                          onClick={() => addItem(product, setShow(true))}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
