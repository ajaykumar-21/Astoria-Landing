// import buildingImage from "../assets/building.jpg"; // adjust path as needed

function LeadForm() {
  return (
    <section className="bg-black text-white px-4 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 border border-[#cfa441]">
        {/* Left: Form Panel */}
        <div className="p-8 flex flex-col justify-center border-r border-[#cfa441]">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-8">
            THE SUITE LIFE UPGRADE <br />
            YOU'VE BEEN WAITING <br />
            FOR IS HERE
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block mb-1">Name*</label>
              <input
                type="text"
                className="w-full bg-transparent border border-[#cfa441] px-4 py-2 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1">Email*</label>
              <input
                type="email"
                className="w-full bg-transparent border border-[#cfa441] px-4 py-2 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1">Phone Number*</label>
              <input
                type="tel"
                className="w-full bg-transparent border border-[#cfa441] px-4 py-2 outline-none"
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="bg-[#cfa441] text-black px-6 py-3 w-full font-semibold hover:bg-[#b18c33] transition"
              >
                KNOW MORE
              </button>
            </div>
          </form>

          <p className="text-xs text-center mt-6 text-gray-400">
            *T&C Apply <br />
            Your privacy is very important to us; we will never share your
            information.
          </p>
        </div>

        {/* Right: Image Panel */}
        <div className="h-full w-full">
          <img
            src={"/assets/Lead-Form-Building.png"}
            alt="Project Building"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default LeadForm;
