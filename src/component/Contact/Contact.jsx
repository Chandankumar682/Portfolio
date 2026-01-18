import React, { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "06090720-2099-4dd8-9390-685072d9fb6f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Message send to Developer" : "Error while sending message");
  };

  return (
    <section id="Contact" className="py-16">
      <div className=" flex flex-col items-center max-w-[1400px] mx-auto sm:px-10 px-4">
        {/* Heading */}
        <h1 className="text-white md:text-4xl text-2xl sm:text-3xl uppercase mb-10 font-bold">
          Contact
        </h1>

        {/* Form */}
        <form
          onSubmit={onSubmit} className="w-full max-w-md sm:max-w-xl bg-[#111837]/90 backdrop-blur-md shadow-md rounded-2xl p-6 sm:p-10">
          {/* Name */}
          <div className="flex flex-col gap-2 mb-5">
            <label className="text-white text-sm">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-transparent text-white px-4 py-3 border border-gray-600 rounded-lg outline-none focus:border-blue-500"
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
              className="w-full bg-transparent text-white border border-gray-600 rounded-lg outline-none focus:border-blue-500 py-3 px-4"
            />
          </div>

          {/* Message */}
          <div className="mb-6 flex flex-col gap-2">
            <label className="text-sm text-white">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full text-white px-4 py-3 bg-transparent border border-gray-600 rounded-lg outline-none focus:border-blue-500 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="text-white w-full py-3  border border-blue-500 rounded-full hover:bg-blue-500 transition-all duration-300"
          >
            Send Message
          </button>

          {/* Result */}
          {result && (
            <p className="text-sm mt-4 text-center text-green-400">{result}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
