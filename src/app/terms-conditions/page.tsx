import { contactMail } from "@/config";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-secondary px-8 py-12">
      <div className="mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p>
            Welcome to <strong>OurDesign</strong>. By accessing our website, you
            agree to comply with these Terms and Conditions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">User Responsibilities</h2>
          <ul className="list-disc list-inside">
            <li>
              Users looking for interior designers must provide accurate project
              details.
            </li>
            <li>Interior designers must provide valid business information.</li>
            <li>
              Any misuse of our platform may result in account termination.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Service Terms</h2>
          <ul className="list-disc list-inside">
            <li>
              OurDesign acts as a bridge between users and interior designers;
              we do not guarantee project completion.
            </li>
            <li>
              We are not liable for any disputes between users and interior
              designers.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Payments</h2>
          <p>
            OurDesign may offer paid services. Users agree to our payment
            policies when using paid features.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
          <p>
            We are not responsible for any damages resulting from the use of our
            platform.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Changes to Terms</h2>
          <p>
            We may update these Terms and Conditions at any time. Continued use
            of our services implies acceptance of the changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, contact
            us at <strong className="text-primary">{contactMail}</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
