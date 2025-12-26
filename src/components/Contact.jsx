export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">📞 Get in Touch</h2>

      <p className="text-gray-600 mb-6">
        Have a question, feedback, or special request? We’d love to hear from you!
      </p>

      <div className="bg-white rounded-2xl shadow-sm p-5 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <textarea
          placeholder="Message..."
          rows="4"
          className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button className="bg-blue-600 text-white w-full py-2 rounded-xl hover:bg-blue-700">
          Send Message
        </button>
      </div>

      <div className="mt-6 text-gray-600">
        <p>📍 Vadodara</p>
        <p>⏰ Open: 10AM - 11PM</p>
        <p>📞 Call: +91 111111111111</p>
      </div>
    </div>
  );
}
