import { contactMail } from "@/config";
import React from "react";

const CancellationRefund = () => {
  return (
    <div className="bg-secondary p-6">
      <div className="mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Cancellation and Refund Policy
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p>
            Welcome to <strong>OurDesign</strong>. This policy outlines our
            cancellation and refund terms for users and interior designers.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Cancellation Policy</h2>
          <ul className="list-disc list-inside">
            <li>
              Users can cancel service requests before they are assigned to an
              interior designer.
            </li>
            <li>
              Interior designers can cancel their engagement with a user under
              valid circumstances.
            </li>
            <li>Frequent cancellations may result in account suspension.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Refund Policy</h2>
          <ul className="list-disc list-inside">
            <li>
              Refunds are only applicable for services paid through OurDesign.
            </li>
            <li>
              Once a lead is provided to an interior designer, no refunds will
              be issued.
            </li>
            <li>
              Users may be eligible for refunds in case of service failure or
              non-fulfillment.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Processing Refunds</h2>
          <p>Approved refunds will be processed within 7-10 business days.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>
            For cancellation or refund-related inquiries, contact us at{" "}
            <strong className="text-primary">{contactMail}</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CancellationRefund;
