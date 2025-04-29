import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type NewsItem = {
  date: string;
  title: string;
  url: string;
};

const newsItems: NewsItem[] = [
  {
    date: "30 Nov 2022",
    title: "250 Pledged to Lead Business Events Legacy Impact and Sustainability",
    url: "https://bizandleisure.com/2022/11/250-pledged-to-lead-business-events-legacy-impact-and-sustainability/?fbclid=IwAR10o70M9UzA9d2I2geQ0z25eZeAZC1ZnRMIxpIrTI-Utls7B0OpEbGH-BA",
  },
  {
    date: "01 Nov 2022",
    title: "Sarawak publishes world's first business events academic journal",
    url: "https://www.theborneopost.com/2022/11/01/sarawak-publishes-worlds-first-business-events-academic-journal/",
  },
  {
    date: "27 Oct 2022",
    title: "Du lịch có trách nhiệm, xu hướng nhiều quốc gia trên thế giới đang theo đuổi",
    url: "https://luatvadoisong.vn/du-lich-co-trach-nhiem-xu-huong-nhieu-quoc-gia-tren-the-gioi-dang-theo-duoi/?fbclid=IwAR3N9Kf3jyu62lE5Om1P0I5MuFT8cjsvwwV0VskP8MKkCjpuaHvD4Sub-H4",
  },
  {
    date: "27 Oct 2022",
    title: "Smart Tourism in Greater Bay Area Attracts 100+ Participants",
    url: "https://www.speed-polyu.edu.hk/news/conference-on-smart-tourism-in-the-greater-bay-area-attracts-over-100-participants",
  },
  {
    date: "27 Oct 2022",
    title: "Sarawak at East Asia Inter-Regional Tourism Forum in Vietnam",
    url: "https://dayakdaily.com/sarawak-delegation-attends-east-asia-inter-regional-tourism-forum-general-assembly-meeting-in-vietnam/",
  },
  {
    date: "25 Oct 2022",
    title: "Phát triển bền vững du lịch trong giai đoạn bình thường mới",
    url: "https://baoquangninh.com.vn/phat-trien-ben-vung-du-lich-trong-giai-doan-binh-thuong-moi-3210121.html",
  },
  {
    date: "18 Aug 2022",
    title: "砂青年人才竞赛 参赛作品428份",
    url: "https://weareunited.com.my/11856892/",
  },
  {
    date: "28 Jul 2022",
    title: "关注旅游新常态：“负责任“ 的砂拉越",
    url: "https://you.ctrip.com/travels/sarawak537/4070800.html",
  },
  {
    date: "22 Jul 2022",
    title: "Does Sustainable Consumption Behaviors Matter?",
    url: "https://malaysiandailynews.com/does-sustainable-consumption-behaviors-matter/",
  },
  {
    date: "17 May 2022",
    title: "“ 一片疏林一道山，南芳惊鸿照影来 ”",
    url: "https://you.ctrip.com/travels/sarawak537/4062953.html",
  },
  {
    date: "09 May 2022",
    title: "中国人在东南亚建立的南芳共和国现在怎么样了",
    url: "http://news.cntgol.com/dyzd/2022/0509/256148.shtml",
  },
  {
    date: "11 Apr 2022",
    title: "善德庙承载华工事迹 San Teck Temple carriers the history of Hwa Gong",
    url: "https://drive.google.com/file/d/13AHh4xk9_h8NXBy93gTpK-EIQYGk1ZbO/view?usp=sharing",
  },
  {
    date: "26 Mar 2022",
    title: "Pariwisata yang Bertanggung Jawab: Retorika Pembangunan Berkelanjutan",
    url: "https://pratamamedia.com/pariwisata-yang-bertanggung-jawab-retorika-pembangunan-berkelanjutan/",
  },
  {
    date: "17 Mar 2022",
    title: "Professor for a Day – Dr. Hiram Ting at Curtin",
    url: "https://business.curtin.edu.my/research-and-development/professor-for-a-day-with-associate-professor-dr-hiram-ting/",
  },
  {
    date: "17 Mar 2022",
    title: "Curtin, BESarawak sign MoA on journal of business events",
    url: "https://static.wixstatic.com/media/5a1c4e_2fed3ce8487447ca88e197cf4f7ce656~mv2.jpeg",
  },
  {
    date: "16 Mar 2022",
    title: "MOU Signing Ceremony — IJBEL Journal",
    url: "https://static.wixstatic.com/media/5a1c4e_3fde7cfebf32456b85d9c439444a778c~mv2.jpeg",
  },
  {
    date: "16 Feb 2022",
    title: "Abang Abdul Karim appointed BESarawak chairman",
    url: "https://dayakdaily.com/abdul-karim-new-business-events-sarawak-chairman/",
  },
  {
    date: "12 Oct 2021",
    title: "Pengusaha Inap Desa Sarawak Lega",
    url: "https://www.utusan.com.my/terkini/2021/10/pengusaha-inap-desa-sarawak-lega/",
  },
  {
    date: "27 Sep 2021",
    title: "World Tourism Day 2021: Sarawak Commitment",
    url: "https://mtcp.sarawak.gov.my/pages.php?mod=photo_gallery&sub=photo_listing&menu_id=&sub_id=&alb=236",
  },
  {
    date: "15 Jun 2021",
    title: "Publication Seminar at UTAR Malaysia",
    url: "https://news.utar.edu.my/news/2021/June/29/01/01.html",
  },
  {
    date: "27–28 May 2021",
    title: "ICRTH2021 Closing and Declaration",
    url: "https://dayakdaily.com/swak-committed-to-revitalise-tourism-industry-via-responsible-tourism-and-sustainable-devt-says-abdul-karim/",
  },
  {
    date: "28 Aug 2020",
    title: "Launching of Journal of Responsible Tourism Management",
    url: "https://www.ttrweekly.com/site/2020/08/sarawak-publishes-a-green-tourism-journal/",
  },
  {
    date: "28 Aug 2020",
    title: "Sarawak lancar jurnal pelancongan bertanggungjawab",
    url: "https://www.utusanborneo.com.my/2020/08/10/sarawak-lancar-jurnal-antarabangsa-mengenai-pelancongan-bertanggungjawab",
  },
  {
    date: "16 Feb 2020",
    title: "Sarawak Youth Talent (SYT) 2020",
    url: "https://dayakdaily.com/abdul-karim-sarawak-govt-supportive-of-youth-events-with-impact/",
  },
  {
    date: "10 Jan 2020",
    title: "Appointment as Emerald Ambassador in East Asia",
    url: "https://www.emeraldgrouppublishing.com/who-we-are/brand-ambassadors",
  },
  {
    date: "21–24 Aug 2019",
    title: "SASEM2019 in Malacca Malaysia",
    url: "https://news.utar.edu.my/news/2019/Sept/20/02/02.html",
  },
  {
    date: "12–14 Apr 2019",
    title: "Smart Tourism, Smart Destination Seminar",
    url: "https://www.utusanborneo.com.my/2019/04/02/forum-pelancongan-pintar-destinasi-pintar-pada-12-april-ini",
  },
  {
    date: "15 Sep 2018",
    title: "Launching of RCE in Kuching",
    url: "https://www.rcenetwork.org/portal/rce-profile-detail/rce-kuching",
  },
  {
    date: "12 Aug 2017",
    title: "Public Lecture on Creation of Entrepreneurial Mindset",
    url: "https://www.theborneopost.com/2017/07/07/creation-of-new-entrepreneurial-mindset-public-lecture-on-aug-12/",
  },
  {
    date: "14 Sep 2016",
    title: "Kaji Selidik Majukan Pelancongan Sarawak",
    url: "https://amp.utusanborneo.com.my/2016/09/14/kaji-selidik-majukan-lagi-pelancongan-sarawak",
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto pt-24 px-4 pb-16 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold font-playfair text-gray-900 mb-3">News Feeds</h1>
          <p className="text-lg text-gray-600">Latest publications and media coverage</p>
        </div>

        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-red-500 p-6 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <p className="text-sm text-red-500 font-medium mb-1">{item.date}</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline break-all"
              >
                {item.url}
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
