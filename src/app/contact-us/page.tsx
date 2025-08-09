import { contactMail } from "@/config";
import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-secondary px-8 py-12">
      <div className="mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p>
            If you have any questions, concerns, or feedback, feel free to reach
            out to us.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Support Email</h2>
          <p>
            You can email us at{" "}
            <strong className="text-primary">{contactMail}</strong> for any
            assistance.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Business Hours</h2>
          <p>
            Our team is available from{" "}
            <strong>Monday to Friday, 9:00 AM - 6:00 PM (IST)</strong>.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Office Address</h2>
          <p>254, 2nd floor ,shiv nagar colony , bhiwani , Haryana ,127021</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Follow Us</h2>
          <p>
            Stay connected with us on social media for updates and design
            inspirations.
          </p>
          <ul className="list-disc list-inside">
            <li>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/our__design"
                className="text-blue-400"
              >
                @our__design
              </a>
            </li>
            <li>
              Facebook:{" "}
              <a
                href="https://www.facebook.com/people/Our-Design/100063770276463/#"
                className="text-blue-400"
              >
                OurDesign Official
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
