import React, { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "06090720-2099-4dd8-9390-685072d9fb6f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(
      data.success ? "Message sent successfully!" : "Error sending message"
    );
  };

  return (
    <section id="Contact" className="py-16">

      <div className="max-w-[1400px] mx-auto px-4 sm:px-10 flex flex-col items-center">

        {/* Heading */}
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-10">
          Contact
        </h1>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="w-full max-w-md sm:max-w-xl
          bg-[#111837]/90 backdrop-blur-md
          shadow-md rounded-2xl p-6 sm:p-10"
        >

          {/* Name */}
          <div className="flex flex-col gap-2 mb-5">
            <label className="text-white text-sm">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-transparent border border-gray-600
              text-white px-4 py-3 rounded-lg outline-none
              focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 mb-5">
            <label className="text-white text-sm">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-transparent border border-gray-600
              text-white px-4 py-3 rounded-lg outline-none
              focus:border-blue-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2 mb-6">
            <label className="text-white text-sm">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full bg-transparent border border-gray-600
              text-white px-4 py-3 rounded-lg outline-none resize-none
              focus:border-blue-500"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full text-white border border-blue-500
            py-3 rounded-full hover:bg-blue-500
            transition-all duration-300"
          >
            Send Message
          </button>

          {/* Result */}
          {result && (
            <p className="text-center text-sm text-green-400 mt-4">
              {result}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
