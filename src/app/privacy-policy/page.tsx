import { contactMail } from "@/config";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-secondary px-8 py-12">
      <div className="mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p>
            Welcome to <strong>OurDesign</strong>. Your privacy is important to
            us. This Privacy Policy explains how we collect, use, and protect
            your information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>For Users Looking for Interior Designers:</strong> We
              collect your name, contact details, budget, and project details.
            </li>
            <li>
              <strong>For Interior Designers:</strong> We collect your name,
              business details, contact information, and preferences.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside">
            <li>To connect users with interior designers.</li>
            <li>To provide leads to interior designers.</li>
            <li>To improve our services and user experience.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Data Protection</h2>
          <p>
            We implement strict security measures to protect your data. However,
            we are not responsible for unauthorized access due to external
            factors.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Third-Party Sharing</h2>
          <p>
            We do not sell your data. However, we share necessary details with
            interior designers to facilitate connections.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Cookies</h2>
          <p>Our website may use cookies to enhance user experience.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Changes to Privacy Policy</h2>
          <p>
            We may update this policy from time to time. Continued use of{" "}
            <strong>OurDesign</strong> implies acceptance of any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>
            For any concerns regarding this Privacy Policy, please reach out to
            us at <strong className="text-primary">{contactMail}</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
