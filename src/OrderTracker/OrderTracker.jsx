import React, { useState } from 'react';
import styled from 'styled-components'; // Import styled-components

const OrderContainer = styled.div`
  max-width: 600px;
  margin-bottom: 20px;
  margin-top:20px;
  margin-left:350px;
  margin-right:300px;
  alignment:center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const OrderForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const OrderTracker = () => {
  const [order, setOrder] = useState({
    orderNumber: '',
    customerName: '',
    trackingNumber: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(order);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
  };

  return (
    <OrderContainer>
      <h1>Order Tracker</h1>
      <OrderForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="orderNumber">Order Number:</Label>
          <Input
            type="text"
            id="orderNumber"
            name="orderNumber"
            value={order.orderNumber}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="customerName">Customer Name:</Label>
          <Input
            type="text"
            id="customerName"
            name="customerName"
            value={order.customerName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="trackingNumber">Tracking Number:</Label>
          <Input
            type="text"
            id="trackingNumber"
            name="trackingNumber"
            value={order.trackingNumber}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit">Track Order</Button>
      </OrderForm>
    </OrderContainer>
  );
};

export default OrderTracker;
