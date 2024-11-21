import React, { useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardData from "./CardData";

const Home = () => {
  const [cartData, setCartData] = useState(CardData);
  return (
    <>
      <section className="item_section mt-4 container">
        <h2 className="px-4 style={fontweight:400}">Resturants in Ahmedabad</h2>
        <div className="row mt-2 d-flex justify-content-around align-item-centre">
          {CardData.map((item,index) => {
            return (
              <>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="hove mb-4"
                >
                  <Card.Img variant="top" className="cd" src={item.imgdata} />
                  <div className="card_body">
                    <div className="upper_data d-flex justify-content-between mt-3">
                      <h4 className="mt-2">{item.dish}</h4>
                      <span> {item.rating} ✯ </span>
                    </div>
                    <div className="lower_data d-flex justify-content-between">
                      <h5 className="mt-2">{item.address}</h5>
                      <span>{item.price}</span>
                    </div>
                    <div className="extra"></div>

                    <div className="last_data d-flex justify-content-between mt-2">
                      <img src={item.arrimg} className="limg" />
                      <Button
                        style={{
                          width: "150px",
                          background: "#ff3054db",
                          border: "none",
                        }}
                        variant="outline-light"
                        className="mt-2 mb-2"
                      >
                        Add To Cart
                      </Button>
                      <img src={item.delimg} className="laimg" />
                    </div>
                  </div>
                </Card>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Home;
