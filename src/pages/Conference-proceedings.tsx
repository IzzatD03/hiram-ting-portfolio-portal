
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ConferenceProceedings = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto pt-24 px-4 pb-16">
        <h1 className="text-3xl font-bold font-playfair mb-8 text-primary">Conference Proceedings</h1>
        
        {/* Content will be added later */}
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500">Conference proceedings content coming soon.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConferenceProceedings;
