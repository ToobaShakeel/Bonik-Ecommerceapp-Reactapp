import React from "react";
import "./Policy.css";
const Policy = () => {
    return(
        <div className="policy-container">
        <h1>Welcome to Bonik - Your Premier E-commerce Store!</h1>
        <section className="refund-policy">
          <h2>Refund Policy</h2>
          <p>
            At Bonik, customer satisfaction is our utmost priority. We want you to love every purchase you make with us. If, for any reason, you are not completely satisfied with your order, we offer a hassle-free refund policy. Here are the details:
          </p>
          <ul>
            <li>30-Day Money-Back Guarantee: If you are not satisfied with your purchase, you can request a refund within 30 days of receiving your order. We will issue a full refund for the product's purchase price once we receive the returned item.</li>
            <li>Easy Return Process: To initiate a return, simply contact our customer support team, and they will guide you through the process. Please ensure that the product is unused, in its original packaging, and in resalable condition to be eligible for a refund.</li>
            <li>Refund Processing Time: Once we receive the returned item, please allow 3-5 business days for us to process the refund. The amount will be credited back to your original payment method.</li>
          </ul>
        </section>
        <section className="return-exchange-policy">
          <h2>Return & Exchange Policy</h2>
          <p>
            Bonik is committed to making sure you have a seamless shopping experience. If you receive a damaged or defective product or simply change your mind, we offer a straightforward return and exchange policy:
          </p>
          <ul>
            <li>Damaged or Defective Products: If your order arrives damaged or has any manufacturing defects, please contact us immediately. We will arrange for a return or exchange at no additional cost to you.</li>
            <li>Change of Mind: If you wish to exchange your purchased item due to a change of mind, you can do so within 30 days of receiving your order. The product must be unused, in its original packaging, and in resalable condition.</li>
            <li>Exchange Process: To initiate an exchange, get in touch with our customer support team. They will guide you through the process and help you choose the alternative product.</li>
          </ul>
        </section>
        <section className="shipping-delivery-policy">
        <h2>Shipping and Delivery</h2>
        <p>
          At Bonik, we strive to deliver your orders as quickly as possible while ensuring the highest level of quality. Here's what you can expect:
        </p>
        <ul>
          <li>Delivery Time: Our estimated delivery time for most orders is between 5 to 7 business days. Please note that delivery times may vary depending on your location and the availability of the product.</li>
          <li>Order Tracking: Once your order is shipped, we will provide you with a tracking number. You can use this number to track your package and stay updated on its status.</li>
          <li>Shipping Charges: We offer free shipping on orders above a certain value. For orders below that threshold, a nominal shipping fee will be applied.</li>
        </ul>
      </section>
      <section className="customer-support">
        <h2>Customer Support</h2>
        <p>
          We take pride in offering exceptional customer support to address any concerns or queries you may have. Our support team is available 24/7 to assist you through phone, email, or live chat.
        </p>
      </section>
      <section className="satisfaction-promise">
        <h2>Your Satisfaction, Our Promise</h2>
        <p>
          At Bonik, we are committed to providing you with a delightful shopping experience. If you have any questions or need assistance, please don't hesitate to reach out to us. Your satisfaction is our ultimate goal.
        </p>
        <p>
          Thank you for choosing Bonik for all your shopping needs. Happy shopping!
        </p>
      </section>
    </div>
      
    )
}
export default Policy;