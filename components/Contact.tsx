export default function Contact() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-[#0A2342] mb-10">
          Contact Us
        </h2>

        <form className="grid gap-4">

          <input
            type="text"
            placeholder="0779 246 104"
            className="p-3 border rounded"
          />

          <input
            type="email"
            placeholder="vsikozho@gmail.com"
            className="p-3 border rounded"
          />

          <textarea
            placeholder="Your Message"
            className="p-3 border rounded h-32"
          />

          <button
            type="submit"
            className="bg-[#0A2342] text-white py-3 rounded hover:bg-[#06162b]"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}