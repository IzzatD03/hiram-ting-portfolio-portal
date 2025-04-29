import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Briefcase } from "lucide-react";

const researchProjects = [
  "Responsible Marketing and Consumerism",
  "Responsible Tourism in Southeast Asia",
  "British Food Journal: Responsible Food Production, Consumption and Disposition",
  "Journal of Consumer Behaviour: Consumer Online and Offline Behaviour",
  "Young Consumer: Youth Behaviour through the Lens of Generation Theories",
  "Cultural and Heritage Tourism"
];

const industryProjects = [
  "Feasibility, Marketability and Sustainability of the New Amusement Park",
  "Perceptions towards and Intention to Visit Sarawak Museum Complex",
  "Sarawak Youth Talent (SYT2021)",
  "Responsible Youth Leader (RYL) Program 2021",
  "Borneo Cultures Museum",
  "Heritage Tourism in Kuching and Sarawak",
  "Experiential Tourism in Bau: The Green and Gold Journey",
  "Responsible Borneo and Sarawak Commitment to Responsible Tourism"
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto pt-24 px-4 pb-20 max-w-5xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold font-playfair text-gray-900 mb-3">Projects</h1>
          <p className="text-lg text-gray-600">
            An overview of research and industry initiatives driven by responsible engagement.
          </p>
        </header>

        {/* Research Projects */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-semibold text-gray-800 font-playfair">Research Projects</h2>
          </div>
          <ul className="space-y-3 bg-[#fff5f5] p-6 rounded-lg shadow-sm">
            {researchProjects.map((project, index) => (
              <li key={index} className="text-gray-800 leading-relaxed flex items-start gap-2">
                <span className="text-red-500 font-semibold">{index + 1}.</span>
                <span>{project}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Industry Projects */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-semibold text-gray-800 font-playfair">Industry Projects</h2>
          </div>
          <ul className="space-y-3 bg-[#fff5f5] p-6 rounded-lg shadow-sm">
            {industryProjects.map((project, index) => (
              <li key={index} className="text-gray-800 leading-relaxed flex items-start gap-2">
                <span className="text-red-500 font-semibold">{index + 1}.</span>
                <span>{project}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
