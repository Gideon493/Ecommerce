import { NavLink } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useState } from "react";
const Foods = ({ foods, addItem }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h4>My foods</h4>
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
      </div>
      {foods.map((product) => {
        return (
          <div>
            <div>
              <div class="card mb-3" style={{ width: " 18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">{product.title}</h5>
                  <p class="card-text">
                    <h4 className="text-danger">${product.price}</h4>
                    <h5>{product.type}</h5>
                    {product.description}
                  </p>
                  <p>
                    <AiOutlineStar style={{ color: "crimson" }} />
                    {product.rating}
                  </p>
                  <button
                    class="btn btn-primary"
                    onClick={() => addItem(product, setShow(true))}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Foods;
