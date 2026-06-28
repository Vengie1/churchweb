export default function Events() {
  const events = [
    
    { title: "Bible Study", date: "Every Monday" },
    { title: "Prayer & Fasting", date: "Every Wednesday" },
    { title: "Sunday Service", date: "Every Sunday" },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-[#0A2342] mb-10">
          Services
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="border p-6 rounded-lg hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg">
                {event.title}
              </h3>
              <p className="text-amber-500 mt-2">
                {event.date}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}