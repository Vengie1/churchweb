export default function Assemblies() {
  const assemblies = [
    {
      name: "Embassy of Power Assembly - Chiredzi",
      description: "Chiredzi Gvt High School, Chiredzi",
      contact: "Elder V Sikozho - +263779246104",
    },
    {
      name: "Shining Light Assembly",
      description: "Hippo Valley Section 24, Hippo valley.",
      contact: "Overseer H Mushangari - +263783367896",
    },
    {
      name: "House of Prayer",
      description: "Mkwasine.",
      contact: "Pst S Mutanda - +263774535962",
    },
    {
      name: "Buffalo Range",
      description: "Nyathi Primary School, Chiredzi",
      contact: "Pst E Chidhuza - +263777217581",
    },
    {
      name: "Upper Room Assembly",
      description: "Shakashe Pry School, Masvingo",
      contact: "Pst Galeboe - +26772442896",
    },
    {
      name: "Harare",
      description: "Kuwadzana 2 High School, Kuwadzana, Harare",
      contact: "Prophet T P Marumbwa - +263780834014",
    },
    {
      name: "Bindura",
      description: "Bindura",
      contact: "Prophet T P Marumbwa - +263780834014",
    },
    {
      name: "Botswana",
      description: "Tlokweng Village, Gaborone",
      contact: "Pst Galeboe - +26772442896",
    },
  ];

  return (
    <section className="bg-slate-100">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Assemblies
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {assemblies.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-sm font-semibold mb-2">
              {item.name}
            </h3>

            <p className="text-gray-600 text-xs">
              {item.description}
            </p>

            <p className="text-[11px] text-gray-500 mt-2">
              <span className="font-semibold">Contact:</span>{" "}
              {item.contact}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}