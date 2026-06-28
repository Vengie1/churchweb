export default function Footer() {
  return (
    <footer className="bg-[#0A2342] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="font-bold text-lg">Shekinah Glory Kingdom Church</h3>
          <p className="text-sm text-gray-300 mt-2">
            Manifesting God’s Glory, Advancing His Kingdom.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Quick Links</h3>
          <ul className="text-sm mt-2 space-y-1 text-gray-300">
            <li>Home</li>
            <li>About</li>
            <li>Ministries</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Contact</h3>
          <p className="text-sm text-gray-300 mt-2">
            Harare, Zimbabwe <br />
            info@sgkc.org <br />
            +263 779246104
          </p>
        </div>

      </div>

      <div className="text-center text-gray-400 text-sm mt-10">
        © 2026 V Sikozho - 0779246104.
      </div>
    </footer>
  );
}