import { NavLink } from "react-router-dom";
//import { useCart } from "react-use-cart";

const Cart = ({ cart, addItem, removeItem }) => {
  //const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const Button = ({ item, addItem, removeItem }) => {
    return (
      <div style={{ margin: "10px" }}>
        <button className="btn btn-danger m-2" onClick={() => removeItem(item)}>
          -
        </button>
        <button className="btn btn-primary m-2" onClick={() => addItem(item)}>
          +
        </button>
      </div>
    );
  };
  return (
    <div>
      <div>
        {cart.length === 0 && (
          <div>
            <h4> Your cart is empty</h4>
          </div>
        )}
      </div>
      <div>
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <div>{cart.length} Items</div>
              <div>
                <h4>{item.title}</h4>
                <h4 className="text-danger">${item.price}</h4>
              </div>
              <Button addItem={addItem} item={item} removeItem={removeItem} />

              <div>
                {item.qty} x ${item.price}
              </div>
            </div>
          );
        })}
        <div>
          {cart.length !== 0 && (
            <div>
              <h4 className="">Total Price</h4>
              <h5 style={{ fontFamily: "cursive" }}>
                $
                {cart
                  .reduce((acc, item) => acc + item.price * item.qty, 0)
                  .toFixed(2)}
              </h5>
            </div>
          )}
        </div>
        <div>
          <NavLink to="/products" className="btn btn-outline-primary w-25 m-2">
            Back
          </NavLink>
          <button className="btn btn-primary w-25">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
