import React from "react";

const Contact = () => {
  return (
    <section className="bg-blue-400 mt-5 px-4 sm:px-8 lg:px-16 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        
       
        <div className="lg:w-1/2 flex flex-col justify-start">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            Feel free to contact us anytime
          </h1>
          <p className="text-lg mb-4">
            Mail your query at:{" "}
            <a href="mailto:supports@algorooms.com" className="underline">
              supports@algorooms.com
            </a>
          </p>
          <p className="text-lg">
            Reach out to us at: <span className="font-semibold">+91 7042132888</span>
          </p>
        </div>

      
        <div className="lg:w-1/2 flex flex-col">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">Contact Us</h1>
          
          <label className="text-lg font-medium">Name</label>
          <input
            className="w-full sm:w-80 h-10 mt-2 mb-4 px-3 rounded-md"
            type="text"
            placeholder="Enter your name"
          />

          <label className="text-lg font-medium">Email</label>
          <input
            className="w-full sm:w-80 h-10 mt-2 mb-4 px-3 rounded-md"
            type="email"
            placeholder="Enter your email"
          />

          <label className="text-lg font-medium">Message</label>
          <textarea
            className="w-full sm:w-80 mt-2 mb-4 px-3 py-2 rounded-md border-2 resize-none"
            rows="5"
            placeholder="Type your message..."
          ></textarea>

          <button className="w-full sm:w-auto bg-amber-200 hover:bg-green-300 hover:text-white text-lg px-6 py-2 rounded-2xl transition">
            Send Message Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

