import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        class="card bg-light text-white border-0"
        style={{ height: "500px" }}
      >
        <img
          src="/assets/new6.jpg"
          class="card-img"
          alt="Background"
          style={{ height: "100%", width: "70%" }}
        />
        <div class="card-img-overlay">
          <h5
            class="card-title text-uppercase display-3"
            style={{ fontFamily: "cursive", color: "orange" }}
          >
            <span class="text-dark">N</span>ew Season!!!
          </h5>
          <p class="card-text display-6 lead">
            <span class="text-dark"></span>Check Out All Trends
          </p>
          <p class="card-text"></p>
        </div>
      </div>
      <NavLink to="/products" class="btn btn-outline-danger w-25">
        Shop Now
      </NavLink>
    </div>
  );
};

export default Home;
