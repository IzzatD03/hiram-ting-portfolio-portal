import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ConferenceProceedings = () => {
  const heldAbroad = [
    {
      id: 1,
      text: `Tan, K. L., Ting, H., Cheah, J. H. & Hsu, C. Y. (2020), “How Runners Choose to Participate in an Emerging Destination Marathon”, at 2020 International Sport and Tourism Conference organized by Sport Tourism Association in Taiwan, Taipei, Taiwan 13-14 June 2020. OUTSTANDING PAPER AWARD`,
    },
    {
      id: 2,
      text: `Cheah, J. H., Lim, X. J., Ting, H., & Chan, Y. W., (2019), “Intention to purchase travel online and the implications of inertia behaviour”, Organized by Marketing Asia Group (MAG), Macau, China, 25-26 June 2019. BEST PAPER AWARD`,
    },
    {
      id: 3,
      text: `Cheah, J. H., Sarstedt, M., Ringle, C. M., Ramayah, T., & Ting, H., (2017), “Convergent validity assessment of formatively measured constructs in PLS-SEM: On using single vs. multi-item measures in redundancy analyses”, AMS World Marketing Congress (WMC), Organized by Universidade Lusiada – Norte Porto, Porto, Portugal, 27-29 July 2018.`,
    },
    {
      id: 4,
      text: `Cheah, J. H., Ting, H., Ng, S. I., & Ramayah, T., (2017), “Perceived-benefits positioning strategies and willingness to pay the office space: The moderating effect of office space grades and office occupiers' sectors”, 9th International Conference on PLS and Related Methods (PLS'17), Organized by Macau University of Science and Technology Macau, China, 17-19 June 2017`,
    },
    {
      id: 5,
      text: `Memon, M. A., Salleh, R., Baharom, M. N. R., Cheah, J. H., Ting, H., & Chuah, F., (2017), “Extending the mediating effect of work engagement between person-organisation fit and turnover intention”, 9th International Conference on PLS and Related Methods (PLS'17), Macau, China, 17-19 June 2017.`,
    },
    {
      id: 6,
      text: `Yacob, Y., Ting, H., Lajuni, N., & Chien, M., (2016), “Smartphone disposition decisions: How university students dispose and why?”, International Research Symposium of Service Management (IRSSM-7) at Mahidol University, Bangkok, 2-5 August 2016.`,
    },
    {
      id: 7,
      text: `de Run, E. C., & Ting, H., (2014), “Beyond demographic boundary: Determining generational values by cohorts”, Proceedings from MAG Scholar Conference, Hyatt Regency, Yogyakarta, 22-25 November 2014.`,
    },
    {
      id: 8,
      text: `de Run, E. C., & Ting, H., (2013), “Exploring belief factors about controversial advertising”, Proceedings from MAG Scholar Global Business, Marketing and Tourism Conference, Dubai, UAE, 11-14 November 2013.`,
    },
  ];

  const heldDomestically = [
    "Cheung, M. L., Ting, H., Cheah, J. H., Sharifuddin, M. N., Chau, K. Y., (2019), “Examining the role of social media based destination brand community…” BEST PAPER AWARD.",
    "Lim, X. J., Cheah, J. H., & Ting, H., (2019), “Do types of retail matter? The impact of retail integration…”",
    "Ramayah, T., Cheah, J. H., Memon, M. A., & Ting, H., (2017), “A comparison of latent interaction effects…”",
    "Chuah, F., Ting, H., de Run, E. C., Jacky, C., & Wong, W. P. M., (2016), “Understanding the use of Instagram…”",
    "de Run, E. C., Ting, H., Tan, H. E., & Huang, H. W., (2016), “Complaint behaviour by Generations…” BEST PAPER AWARD.",
    "Huang, H. W., de Run, E. C., & Ting, H., (2016), “Information search and purchase intention for ‘Made in China’…”",
    "Lau, W. M., de Run, E. C., Ting, H., Chuah, F., & Singh, G., (2016), “Warning signage on cigarette packaging…”",
    "Lim, T. Y., de Run, E. C., Ting, H., Koh, H. & Sahdan, M., (2016), “Do we have baby boomers, Gen X and Gen Y?”",
    "Ting, H., Tan, S., John Ling, A. N., & de Run, E. C., (2016), “Intention to consume Dayak food…”",
    "Ting, H., de Run, E. C., Sudiyanti, S. & Cheah, J. W., (2016), “Attitude towards Advertising…”",
    "Wong, W. P. M., & Ting, H., (2016), “The impact of technology trust on customer e-loyalty…”",
    "Yacob, Y., Ting, H., & Kasuma, J., (2016), “Service quality dimensions and members’ satisfaction…”",
    "Chuah, F., Ting, H., Alsree, S. R., & Cheah, J. H., (2015), “Factors affecting entrepreneurial intention…”",
    "Jee, T. W., Ting, H., de Run, E. C., & Tan, S., (2015), “Disposition and repurchase intention…” BEST PAPER AWARD.",
    "Ting, H., Chuah, F., de Run, E. C., Phung, M. & Cheah, J. H., (2015), “Ethnic food consumption intention…”",
    "Ting, H., Yacob, Y., Liew, L., & Lau, W. M., (2015), “Intention towards mobile payment…”",
    "de Run, E. C., Ting, H., & Liew, S. L., (2014), “How adolescents view advertising…” BEST PAPER AWARD.",
    "Ting, H., & de Run, E. C., (2013), “How young adults perceive advertising…” BEST PAPER AWARD.",
    "de Run, E. C., Ting, H., Jee, T. W., & Lau, S. Y. C., (2013), “Attitude towards advertising…”",
    "de Run, E. C., & Ting, H., (2013), “Attitude of marketing and non-marketing students…”",
    "Fam, K. S., Jozsa, L., Solyom, A., de Run, E. C., Ting, H., (2012), “Chinese generation Xers’ attitude…” BEST PAPER AWARD.",
    "Ting, H., de Run, E. C., & Fam, K. S., (2012), “Identifying generational cohorts in Sarawak…”",
    "Ting, H., & de Run, E. C., (2012), “Identifying generational cohorts in Sarawak: A comparison…”",
    "Ting, H., & de Run, E. C., (2012), “Attitude towards advertising: The perspective of generational cohort…”",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Page Header */}
      <div className="container mx-auto pt-24 px-4 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-4">Conference Proceedings</h1>
        {/* <p className="text-gray-600 text-lg">
          Contributions to international and domestic conferences worldwide.
        </p> */}
      </div>

      <div className="container mx-auto px-4 pb-20 max-w-5xl space-y-16">
        {/* Held Abroad Section */}
        <section className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold font-playfair text-gray-800 mb-6">
            Conference Proceedings (Held Abroad)
          </h2>
          <ol className="list-decimal pl-5 text-gray-700 space-y-5">
            {heldAbroad.map((entry) => (
              <li key={entry.id} className="leading-relaxed">
                {entry.text}
              </li>
            ))}
          </ol>
        </section>

        {/* Held Domestically Section */}
        <section className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold font-playfair text-gray-800 mb-6">
            Conference Proceedings (Held Domestically)
          </h2>
          <ol className="list-decimal pl-5 text-gray-700 space-y-5">
            {heldDomestically.map((text, index) => (
              <li key={index} className="leading-relaxed">
                {text}
              </li>
            ))}
          </ol>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ConferenceProceedings;
