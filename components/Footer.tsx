import Link from "next/link";
import {
  FaFacebookF,
  
  FaWhatsapp,
  
  FaTiktok,
} from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-[#0A2342] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h3 className="text-2xl font-bold">
          Shekinah Glory Kingdom Church
        </h3>

        <p className="mt-2 text-gray-300">
          Making ready a people prepared for the Lord.
        </p>

        {/* Social Media */}
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <Link
            href="https://www.facebook.com/people/Shekinah-Glory-Kingdom-Church/61590302136259/?rdid=e0nv67kkPUSwGNda&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19ZNjiWqjE%2F"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FaFacebookF />
          </Link>

          

          <Link
            href="https://chat.whatsapp.com/FdNOnwL1WZDEopFqm1rGsQ?mode=gi_t"
            target="_blank"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </Link>

          
          <Link
            href="https://www.tiktok.com/@shekinahglorykingdomchch?_r=1&_t=ZS-97OPEBGKXIq"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            <FaTiktok />
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          © {new Date().getFullYear()} Shekinah Glory Kingdom Church. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
