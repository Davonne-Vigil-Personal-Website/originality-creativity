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
      className="max-w-xs md:max-w-md bg-white rounded-3xl p-6 shadow-lg text-black mx-auto mt-4"
      aria-label="Contact Form"
      onSubmit={submitForm}
    >
      <h3 className="text-center font-grav text-xl mt-2">
        Let's get in touch!
      </h3>
      <div className="flex flex-col gap-8 mt-4">
        <label htmlFor="name" className="font-semibold">
          Name
        </label>
        {error && (
          <p className="text-red-500 font-semibold" aria-live="polite">
            {error}
          </p>
        )}
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          autoComplete="off"
          onChange={handleChange}
          className="p-2 outline-pink-400 rounded-xl shadow-md w-full"
          placeholder="What's your name?"
          required
        />
        <label htmlFor="emailAddress" className="font-semibold">
          Email Address
        </label>
        <input
          id="emailAddress"
          type="email"
          name="emailAddress"
          value={formData.emailAddress}
          autoComplete="off"
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
          placeholder="E-mail?"
          required
        />
        <label htmlFor="message" className="font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          autoComplete="off"
          onChange={handleChange}
          className="w-full h-28 p-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
          placeholder="Message Me"
        />
        <button
          className="bg-pink-300 p-2 rounded-full font-grav text-md hover:scale-105 cursor-pointer"
          type="submit"
          aria-label="Send message"
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
