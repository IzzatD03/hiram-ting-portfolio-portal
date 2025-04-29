
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Publications = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto pt-24 px-4 pb-16">
        <h1 className="text-3xl font-bold font-playfair mb-8 text-primary">Publications</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Journal Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Academic articles published in peer-reviewed journals.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Books & Chapters</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Books and book chapters authored or co-authored.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Other Publications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Conference papers, reports, and other published works.</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Publications;
