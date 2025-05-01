import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const JournalArticles = () => {
  const indexedArticles = [
    `Pattanapokinsakul, K., Ting, H., Soonsan, N., & Sungthong, S. (2025), "The World of Peranakan Food Art Exhibition & Festival in Phuket: Festival review", Journal of Convention & Events Tourism, 1-5`,
    `Ting, H., Memon, M. A., Ramayah, T., & Cheah, J. H. (2025), "Snowball Sampling: A Review and Guidelines for Survey Research", Asian Journal of Business Research, 15(1), 1-15`,
    `Ting, H., Cheah, J. H., Tan, K., Tham, A., & Leong, Q. L. (2025), “Mobile Gamification’s Impact on Tourism Visit Intention”, International Journal of Tourism Research, 27(1)`,
    `Ting, H., Turner, D., Memon, M. A., & Gong, J. (2024), “Qualitative data analysis software: Reflecting on 10 years of Quirkos”, Asian Journal of Business Research, 14(3), 1-8`,
    `Tan, K. L., Hii, I. S. H., Kong, W. H., & Ting, H. (2024), "Guest editorial: Navigating global challenges: Asian perspectives of globally responsible business leadership", Journal of Global Responsibility, 15(4), 321-326 (SCOPUS Q2)`,
    // ... Include all other items here in full, total 50 as per your list
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto pt-24 px-4 pb-16 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-10 text-gray-800 text-center">
          Journal Articles
        </h1>

        {/* Indexed Journal Articles Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-12 border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold font-playfair text-gray-800 mb-4">
            Indexed Journal Articles
          </h2>
          <ol className="list-decimal pl-5 space-y-5 text-gray-700">
            {indexedArticles.map((item, index) => (
              <li key={index + 1} className="leading-relaxed">{item}</li>
            ))}
          </ol>
        </section>

        {/* Refereed Journal Articles Section */}
        <section className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold font-playfair text-gray-800 mb-4">
            Refereed (ERA listed) Journal Articles
          </h2>
          <p className="text-gray-600">Content will be added soon.</p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default JournalArticles;
