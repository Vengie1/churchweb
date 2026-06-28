import Image from "next/image";

const leaders = [
  {
    name: "Apostle E Ndogwadu",
    role: "Visionary",
    image: "/images/pastor1.jpeg",
  },
  {
    name: "Pastor C Ndogwedu",
    role: "Visionary",
    image: "/images/pastor2.jpeg",
  },
  {
    name: "Overseer H Mushangari",
    role: "National Overseer / Zimbabwe",
    image: "/images/overseer.jpeg",
  },
];

const extraLeader = {
  name: "Elder V Sikozho",
  role: "General Secretary",
  image: "/images/gs.jpeg",
};

export default function Leadership() {
  return (
    <section className="py-24 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-14">
        Our Leadership
      </h2>

      <div className="max-w-6xl mx-auto space-y-10">

        {/* TOP GRID (3 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden text-center hover:shadow-xl transition"
            >
              <div className="relative w-full h-72 overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold">{leader.name}</h3>
                <p className="text-gray-600 mt-1">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CENTER CARD */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm bg-gray-50 rounded-xl shadow-md overflow-hidden text-center hover:shadow-xl transition">

            <div className="relative w-full h-72 overflow-hidden">
              <Image
                src={extraLeader.image}
                alt={extraLeader.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold">
                {extraLeader.name}
              </h3>
              <p className="text-gray-600 mt-1">
                {extraLeader.role}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}