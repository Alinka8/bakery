import React, { useState } from "react";
import "./Order.css";
const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    quantity: 1,
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Order Details:", formData);
    alert("Thank you for your order!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Order Now</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Product:
        <select
          name="product"
          value={formData.product}
          onChange={handleChange}
          required
        >
          <option value="">Select a dessert</option>
          <option value="product1">Capcakes</option>
          <option value="product2">Chocolate Cream Pie</option>
          <option value="product3">Biscoff Banana Pudding</option>
          <option value="product4">French Macarons</option>
          <option value="product5">Doughnuts</option>
          <option value="product6">Strawberry Cake</option>
        </select>
      </label>
      <br />
      <label>
        Quantity:
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          min="1"
          required
        />
      </label>
      <br />
      <label>
        Address:
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default OrderForm;
