import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    emailAddress: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const submitForm = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.emailAddress) {
      setError("Please enter both name and email");
      return;
    }

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.emailAddress,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", emailAddress: "", message: "" });
      })
      .catch(() => setError("Failed to send message."));
  };

  return (
    <form
      onSubmit={submitForm}
      className="max-w-lg mx-auto mt-12 p-8 bg-white rounded-2xl shadow-lg shadow-pink-200 text-black"
      aria-label="Contact Form"
    >
      <h3 className="text-center font-spicy text-3xl mb-6">
        Let's get in touch!
      </h3>

      {error && (
        <p
          className="text-red-500 font-semibold mb-4 text-center"
          aria-live="polite"
        >
          {error}
        </p>
      )}

      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="What's your name?"
            required
            className="p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="emailAddress" className="font-semibold mb-1">
            Email Address
          </label>
          <input
            id="emailAddress"
            name="emailAddress"
            type="email"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="E-mail?"
            required
            className="p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="font-semibold mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message Me"
            className="p-3 h-32 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition resize-none"
          />
        </div>

        <button
          type="submit"
          aria-label="Send message"
          className="bg-pink-300 cursor-pointer text-white font-spicy text-lg py-3 rounded-full hover:scale-105 transform transition shadow-md"
        >
          Send
        </button>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
      />
    </form>
  );
}
