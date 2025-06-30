const LocationInfo = () => {
  return (
    <section className="bg-gray-900 text-gray-200 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            A Landmark Destination for Elevated Living
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Ravet is where Pune's future is unfolding. Tucked between the
            Pune-Mumbai Expressway and the Katraj-Dehu Bypass, this rapidly
            developing suburban neighbourhood connects you to wherever you want
            to be without the usual hassle.
          </p>
        </div>

        {/* Right Column */}
        <div className="text-gray-300 space-y-2">
          <h3 className="text-xl font-semibold text-white mb-2">
            Connectivity Highlights
          </h3>
          <p>
            🚗 Mumbai-Pune Expressway – <strong>5 Mins</strong>
          </p>
          <p>
            🚉 Akurdi Railway Station – <strong>Nearby</strong>
          </p>
          <p>
            🏙️ Hinjawadi IT Park – <strong>20 Mins</strong>
          </p>
          <p>
            🛍️ Balewadi High Street – <strong>30 Mins</strong>
          </p>
          <p>
            🏥 Healthcare, schools, entertainment, shopping –{" "}
            <strong>All within reach</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;
