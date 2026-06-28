import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[#0A2342] text-white">

      {/* Background overlay (optional but looks professional) */}
      <div className="bg-gradient-to-br from-[#0A2342] to-[#123B6B]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">

        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="SGKC Logo"
            width={120}
            height={120}
            className="rounded-full"
            priority
          />
        </div>

        {/* Text */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Shekinah Glory Kingdom Church
        </h1>

        <p className="mt-4 text-lg text-gray-200">
          Making ready a people prepared for the Lord.... Lk 1 verse 17
        </p>

        {/* Optional button */}
        

      </div>
    </section>
  );
}