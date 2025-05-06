import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const books = [
  {
    index: 1,
    citation:
      "Cheah, J. H., Memon, M. A., Ting, H., Chuah, F., & Ramayah, T. (2019). Read and cite Hair et al.: How the work of Joseph F. Hair impacts us in Malaysia. A book chapter in The Great Facilitator, Springer. Published in March 2019.",
  },
  {
    index: 2,
    citation:
      "Ramayah, T., Cheah, J. H., Chuah, F., Ting, H., & Memon, M. A. (2018). Partial Least Squares Structural Equation Modeling using SmartPLS 3.0: An updated and practical guide to statistical analysis (2nd version). Pearson. Published in January 2018.",
  },
  {
    index: 3,
    citation:
      "Tan, S., Chuah, F., & Ting, H. (2017). Students’ satisfaction towards online learning systems: Assessing its internal and external factors. A book chapter in Empowering 21st Century Learners Through Holistic and Enterprising Learning. Springer. Published in April 2017.",
  },
  {
    index: 4,
    citation:
      "Ramayah, T., Cheah, J. H., Chuah, F., Ting, H., & Memon, M. A. (2016). Partial Least Squares Structural Equation Modeling using SmartPLS 3.0: An updated and practical guide to statistical analysis. Pearson. Published in November 2016.",
  },
  {
    index: 5,
    citation:
      "Ting, H., Mazlan, A., & Ting, C. Y. (2016). Developing a consumer behaviour towards the purchase and use of health products using the grounded theory approach: A case in Malaysia (Conbe-Hepro). Ministry of Health. Published in December 2016.",
  },
];

const BooksChapters = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto pt-24 px-4 pb-16 max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-4">Books & Chapters</h1>
          {/* <p className="text-lg text-gray-600">Selected publications authored or co-authored by Dr. Hiram Ting</p> */}
        </div>

        <div className="space-y-6">
          {books.map((book) => (
            <div
              key={book.index}
              className="bg-white border-l-4 border-red-500 p-5 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="text-gray-700 text-base leading-relaxed">
                <span className="font-bold text-red-500 mr-2">{book.index}.</span>
                {book.citation}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BooksChapters;
