import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarDays, Globe } from "lucide-react";

const domesticEvents = [
  "Sarawak Youth Talent (SYT) 2021",
  "REBORN: Experimental Tour in Bau District (Taiton)",
  "REBORN: Community Program in Bau District (Paku)"
];

const internationalEvents = [
  "Responsible Youth Leader (RYL) Awards",
  "Emerald Young Researcher Awards",
  "International Conference on Responsible Tourism and Hospitality",
  "World Tourism Day 2021: Sarawak Commitment to Responsible Tourism",
  "International Symposium on Applied Structural Equation Modelling and Methodological Matters (SASEM)",
  "MAG (Marketing in Asia Group) Scholar Conference"
];

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto pt-24 px-4 pb-20 max-w-5xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold font-playfair text-gray-900 mb-3">Events</h1>
          <p className="text-lg text-gray-600">
            Activities and conferences that highlight engagement in tourism, youth, and research.
          </p>
        </header>

        {/* Domestic Events */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <CalendarDays className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-semibold text-gray-800 font-playfair">Domestic Events</h2>
          </div>
          <ul className="space-y-3 bg-[#fff5f5] p-6 rounded-lg shadow-sm">
            {domesticEvents.map((event, index) => (
              <li key={index} className="text-gray-800 leading-relaxed flex items-start gap-2">
                <span className="text-red-500 font-semibold">{index + 1}.</span>
                <span>{event}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* International Events */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-semibold text-gray-800 font-playfair">International Events</h2>
          </div>
          <ul className="space-y-3 bg-[#fff5f5] p-6 rounded-lg shadow-sm">
            {internationalEvents.map((event, index) => (
              <li key={index} className="text-gray-800 leading-relaxed flex items-start gap-2">
                <span className="text-red-500 font-semibold">{index + 1}.</span>
                <span>{event}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Events;
