"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.message) {
      alert("Please enter your message");
      return;
    }

    // 🔥 Replace with church WhatsApp number
    const phoneNumber = "2637XXXXXXXX";

    const text = `
Hello Church Leadership 👋

Phone: ${form.phone}
Email: ${form.email}

Message:
${form.message}
    `;

    const url = `https://wa.me/${+263779246104}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-[#0A2342] mb-10">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-4 text-left">

          <input
            name="phone"
            type="text"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="p-3 border rounded"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 border rounded"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-3 border rounded h-32"
          />

          <button
            type="submit"
            className="bg-[#0A2342] text-white py-3 rounded hover:bg-[#06162b]"
          >
            Send via WhatsApp
          </button>

        </form>

      </div>
    </section>
  );
}