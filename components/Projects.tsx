export default function Projects() {
  const projects = [
    "Community Feeding Program",
    "School Support Initiative",
    "Hospital Visitation Ministry",
    "Youth Empowerment Program",
    "Church Building Project",
    "Evangelism Outreach",
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-[#0A2342] mb-10">
          Community Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-[#0A2342]">
                {item}
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                Making impact through service and compassion.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}