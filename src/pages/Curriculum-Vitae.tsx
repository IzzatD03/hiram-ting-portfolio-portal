import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CurriculumVitae = () => {
  const pdfUrl = "/cv/HiramTing-CV2025.pdf"; // Adjust this to your actual path

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto pt-24 px-4 pb-16 max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 text-center">
          Curriculum Vitae
        </h1>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="aspect-w-4 aspect-h-5">
            <embed
              src="/lovable-uploads/CV.pdf"
              type="application/pdf"
              width="100%"
              height="600px"
              className="rounded border"
            />
          </div>
        </div>

        <div className="text-center">
          <a
            href={pdfUrl}
            download
            className="inline-block bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition"
          >
            Download CV
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CurriculumVitae;
