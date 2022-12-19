import "./App.css";
import Card from "./Card";
import Cart from "./Cart";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  let datalist = [
    {
      id: 1,
      product: "Iphone 14 Pro",
      imgurl:
        "https://shop.unicornstore.in/uploads/images/medium/bd7f3132cdf27b67451bab958362535b.jpg",
      price: 139900,
    },
    {
      id: 2,
      product: "Galaxy S22 Ultra",
      imgurl:
        "https://images.samsung.com/in/smartphones/galaxy-s22-ultra/buy/S22Ultra_ColorSelection_Burgundy_MO.jpg?imwidth=480",
      price: 109999,
    },
    {
      id: 3,
      product: "Samsung Galaxy Z Flip4",
      imgurl:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41luDbJfcsL.jpg",
      price: 79899,
    },
    {
      id: 4,
      product: "Google Pixel 6 Pro 5G",
      imgurl:
        "https://cdn.shopify.com/s/files/1/0598/7919/4823/products/716n8eAia_L._SS640.jpg?v=1664886403",
      price: 129999,
    },
    {
      id: 5,
      product: "OnePlus 10 Pro 5G",
      imgurl:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/618hqM-yxtL._SX679_.jpg",
      price: 61999,
    },
    {
      id: 6,
      product: "Nothing Phone1 5G",
      imgurl:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/31oAbij1uxL._SX300_SY300_QL70_FMwebp_.jpg",
      price: 68575,
    },
  ];
  const [cartlist, setList] = useState([]);
  const [total, setTotal] = useState(0);

  let addtocart = (product) => {
    setList([...cartlist, product]);
    setTotal(total + product.price);
  };

  let removecart = (product) => {
    let index = cartlist.findIndex((cartitem) => datalist.id === cartitem.id);
    cartlist.splice(index, 1);
    setList([...cartlist]);
    setTotal(total - product.price);
  };

  return (
    <>
      <div className="header">
        <h1> Shop in Style</h1>
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                {datalist.map((card) => {
                  return (
                    <Card
                      product={card}
                      addtocart={addtocart}
                      cartlist={cartlist}
                    />
                  );
                })}
              </div>
            </div>
            <div className="col-lg-3">
              <h3>Cart:</h3>
              <Cart cartlist={cartlist} removecart={removecart} />
              <h4>Total:{total}</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
