import React from "react";
import cupcake from "../../assets/cupcake.jpg";
import chocolate_pie from "../../assets/chocolate-pie.jpg";
import banana_pudding from "../../assets/banana_pudding.jpg";
import macarons from "../../assets/macarons.jpg";
import doughnuts from "../../assets/doughnuts.jpg";
import cake from "../../assets/cake.jpg";
import "./Products.css";

const Products = () => {
  return (
    <div className="product" id="product">
      <div className="heading">
        <h2>Our Exclusive Bakery</h2>
      </div>
      <div className="swiper product-row">
        <div class="swiper-wrapper">
          <div className="swiper-slide box">
            <div className="img">
              <img src={cupcake} alt="" />
            </div>
            <div className="product-content">
              <h3>Cupcakes</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                facilis est enim sit inventore, temporibus dicta quaerat, quo
                non iusto dolore reiciendis repellendus iure vitae neque facere,
                a vel! Pariatur.
              </p>
              <div className="orderNow">
                <button>Order now</button>
              </div>{" "}
            </div>
          </div>
          <div className=" swiper-slide box">
            <div className="img">
              <img src={chocolate_pie} alt="" />
            </div>
            <div className="product-content">
              <h3>Chocolate Pie</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                facilis est enim sit inventore, temporibus dicta quaerat, quo
                non iusto dolore reiciendis repellendus iure vitae neque facere,
                a vel! Pariatur.
              </p>
              <div className="orderNow">
                <button>Order now</button>
              </div>{" "}
            </div>
          </div>

          <div className=" swiper-slide box">
            <div className="img">
              <img src={banana_pudding} alt="" />
            </div>
            <div className="product-content">
              <h3>Banana Pudding</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                facilis est enim sit inventore, temporibus dicta quaerat, quo
                non iusto dolore reiciendis repellendus iure vitae neque facere,
                a vel! Pariatur.
              </p>
              <div className="orderNow">
                <button>Order now</button>
              </div>{" "}
            </div>
          </div>
        </div>

        <div class="swiper-pagination"></div>
      </div>
      <div className="swiper product-row">
        <div class="swiper-wrapper">
          <div className="swiper-slide box">
            <div className="img">
              <img src={macarons} alt="" />
            </div>
            <div className="product-content">
              <h3>French Macarons</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                facilis est enim sit inventore, temporibus dicta quaerat, quo
                non iusto dolore reiciendis repellendus iure vitae neque facere,
                a vel! Pariatur.
              </p>
              <div className="orderNow">
                <button>Order now</button>
              </div>{" "}
            </div>
          </div>
          <div className=" swiper-slide box">
            <div className="img">
              <img src={doughnuts} alt="" />
            </div>
            <div className="product-content">
              <h3>Doughnuts</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                facilis est enim sit inventore, temporibus dicta quaerat, quo
                non iusto dolore reiciendis repellendus iure vitae neque facere,
                a vel! Pariatur.
              </p>
              <div className="orderNow">
                <button>Order now</button>
              </div>{" "}
            </div>
          </div>

          <div className=" swiper-slide box">
            <div className="img">
              <img src={cake} alt="" />
            </div>
            <div className="product-content">
              <h3>Strawberry cake</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                facilis est enim sit inventore, temporibus dicta quaerat, quo
                non iusto dolore reiciendis repellendus iure vitae neque facere,
                a vel! Pariatur.
              </p>
              <div className="orderNow">
                <button>Order now</button>
              </div>{" "}
            </div>
          </div>
        </div>

        <div class="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Products;
