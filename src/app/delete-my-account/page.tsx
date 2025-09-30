import React from "react";
import Link from "next/link";

const DeleteMyAccountPage = () => {
  return (
    <main className="bg-secondary min-h-[60vh] py-12 px-6">
      <article className="prose prose-slate max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1>How to Delete Your Account</h1>
        <p>
          You can request deletion of your Our Design account directly from the
          app. Deleting your account is permanent and will remove your profile,
          purchased leads, and associated data as described in our Privacy
          Policy. This action cannot be undone.
        </p>

        <h2>Before you start</h2>
        <ul>
          <li>Ensure you are signed in with the account you want to delete.</li>
          <li>
            Deleting your account will revoke access to your purchased leads and
            remove your profile information.
          </li>
          <li>
            For any pending transactions or disputes, please resolve them before
            submitting the deletion request.
          </li>
        </ul>

        <h2>Steps to delete your account</h2>
        <ol>
          <li>Open the Our Design app on your device.</li>
          <li>Go to the Profile page from the bottom navigation.</li>
          <li>
            Tap on the <strong>Delete Account</strong> button.
          </li>
          <li>Confirm your choice when prompted.</li>
        </ol>

        <p>
          Once confirmed, your deletion request will be processed. You may be
          asked to verify your identity for security. After completion, you will
          be signed out and your account will be scheduled for removal in
          accordance with our data retention and legal obligations.
        </p>

        <h2>What happens after deletion</h2>
        <ul>
          <li>Your login access will be revoked.</li>
          <li>
            Personal information will be erased or anonymized except where we
            are required to retain it by law (e.g., accounting or fraud
            prevention).
          </li>
          <li>
            Any active subscriptions or services linked to your account will be
            canceled.
          </li>
        </ul>

        <h2>Need help?</h2>
        <p>
          If you need assistance before deleting your account or would like to
          request data export, please contact our support team.
        </p>

        <p className="mt-8">
          Return to{" "}
          <Link href="/" className="text-primary font-semibold">
            Home
          </Link>
          .
        </p>
      </article>
    </main>
  );
};

export default DeleteMyAccountPage;
