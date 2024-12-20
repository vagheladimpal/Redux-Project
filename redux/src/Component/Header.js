import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

const Header = () => {
  const cartData = useSelector((state) => state.allCart.cart); // Accessing the cart array
  console.log("cartData", cartData);
  return (
    <>
      <Navbar style={{ height: "60px", background: "black", color: "white" }}>
        <Container>
          <h3 color="white">Ecommerce</h3>
          <div id="ex4">
            <span className="p1 fa-stack fa-2x has-badge" data-count={1}>
              <i class="fa-solid fa-cart-shopping"></i>
            </span>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
