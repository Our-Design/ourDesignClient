import { contactMail } from "@/config";
import React from "react";

const ShoppingDelivery = () => {
  return (
    <div className="bg-black text-white p-6">
      <div className="mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Shopping and Delivery Policy
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p>
            Welcome to <strong>OurDesign</strong>. This policy outlines our
            shopping and delivery terms for any products or services offered
            through our platform.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Order Processing</h2>
          <ul className="list-disc list-inside">
            <li>Orders are processed within 1-3 business days.</li>
            <li>
              Users will receive a confirmation email once their order is
              placed.
            </li>
            <li>Processing times may vary based on product availability.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Shipping and Delivery</h2>
          <ul className="list-disc list-inside">
            <li>
              Delivery times depend on the user&apos;s location and selected
              shipping method.
            </li>
            <li>We provide estimated delivery dates at checkout.</li>
            <li>
              Delays may occur due to unforeseen circumstances, and we are not
              responsible for third-party courier delays.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Shipping Charges</h2>
          <p>
            Shipping charges vary based on the delivery location and product
            weight. Exact charges will be displayed at checkout.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Returns and Exchanges</h2>
          <p>
            Refer to our <strong>Cancellation and Refund Policy</strong> for
            return and exchange guidelines.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>
            For any shopping or delivery-related inquiries, contact us at{" "}
            <strong className="text-primary">{contactMail}</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShoppingDelivery;
