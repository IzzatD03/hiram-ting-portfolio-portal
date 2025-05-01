import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Publications = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto pt-32 px-4 pb-24">
        <h1 className="text-4xl md:text-5xl font-bold font-playfair text-center text-gray-800 mb-16">
          Publications
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Link to="/publications/journal-articles">
            <Card className="hover:shadow-xl border border-gray-200 transition-all duration-200 ease-in-out cursor-pointer bg-white rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800">Journal Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Academic articles published in peer-reviewed journals.</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/publications/books-chapters">
            <Card className="hover:shadow-xl border border-gray-200 transition-all duration-200 ease-in-out cursor-pointer bg-white rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800">Books & Chapters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Books and book chapters authored or co-authored.</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/publications/conference-proceedings">
            <Card className="hover:shadow-xl border border-gray-200 transition-all duration-200 ease-in-out cursor-pointer bg-white rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800">Conference Proceedings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Conference papers, reports, and other published works.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Publications;
