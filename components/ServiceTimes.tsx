export default function ServiceTimes() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-[#0A2342] mb-10">
        Service Times
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">

        <div className="p-6 border rounded-lg">
          <h3 className="font-bold">Sunday Service</h3>
          <p className="text-amber-500 mt-2">09:00 AM</p>
        </div>
         <div className="p-6 border rounded-lg">
          <h3 className="font-bold">Monday - Bible Study</h3>
          <p className="text-amber-500 mt-2">06:00 PM</p>
        </div>


        <div className="p-6 border rounded-lg">
          <h3 className="font-bold">Wednesday - Prayer and Fasting</h3>
          <p className="text-amber-500 mt-2">05:30 PM</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-bold">Saturday - Evangelism</h3>
          <p className="text-amber-500 mt-2">11:00 AM</p>
        </div>
       
      </div>
    </section>
  );
}