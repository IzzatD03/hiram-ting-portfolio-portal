import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const JournalArticles = () => {
  const indexedArticles = [
    'Hsu, C. Y., Cheah, J. H., Chen, M. Y., & **Ting, H.** (2026), “Does image fit matter to residents’ attitudes and intentions toward sports events and host communities: the mediating role of quality of life”, Journal of Sport & Tourism, 1-6',
    'Kittiprasan, K., **Ting, H.** , Kirdsiri, K., & Yankowski, A. (2025), “The Art of Salt Festival in Phetchaburi, Thailand: The nexus of nature and culture to sustain local identity”, Journal of Convention & Event Tourism, 1-8',
    `Cham, T.H., Aveziimetovch, S. K., Andoko, A., Wong, B. K. M., Lau, E., Paramita, W., Yide, L., **Ting, H.**, & Tan, K.-L. (2025), "Is Artificial intelligence (AI) the game-changer for business? Exploring current insights, opportunities, and potential research agenda", Asian Journal of Business Research, 15(3), 166-172`,
    `Soonsan, N., Pattanapokinsakul, K., Chunjan, K., & **Ting, H.** (2025), "Leveraging mega-event tourism: A review of Electric Daisy Carnival Thailand 2025 in Phuket", Journal of Convention & Event Tourism, 15(1), 1–5`,
    `Sangechumnong, A., Tham, A., **Ting, H.**, & Saengchanmong, M. (2025), "Animal influences for ecotourism? The case of Moo Deng", Journal of Ecotourism, 1–8`,
    `Yu, C., Cheah, J. H., **Ting, H.**, & Liu, Y. (2025), "Enhancing Business Performance Through Integrated B2B Systems in China: A Dynamic Capabilities Perspective", Journal of Business-to-Business Marketing, 1–22`,
    `Pattanapokinsakul, K., **Ting, H.**, Soonsan, N., & Sungthong, S. (2025), "The World of Peranakan Food Art Exhibition & Festival in Phuket: Festival review", Journal of Convention & Events Tourism, 1-5`,
    `**Ting, H.**, Memon, M. A., Ramayah, T., & Cheah, J. H. (2025), "Snowball Sampling: A Review and Guidelines for Survey Research", Asian Journal of Business Research, 15(1), 1-15`,
    `**Ting, H.**, Cheah, J. H., Tan, K., Tham, A., & Leong, Q. L. (2025), "Mobile Gamification's Impact on Tourism Visit Intention", International Journal of Tourism Research, 27(1)`,
    `**Ting, H.**, Turner, D., Memon, M. A., & Gong, J. (2024), "Qualitative data analysis software: Reflecting on 10 years of Quirkos", Asian Journal of Business Research, 14(3), 1-8`,
    `Tan, K. L., Hii, I. S. H., Kong, W. H., & **Ting, H.** (2024), "Guest editorial: Navigating global challenges: Asian perspectives of globally responsible business leadership", Journal of Global Responsibility, 15(4), 321-326 (SCOPUS Q2)`,
    `Tham, A., **Ting, H.**, Zhang, X. (N)., and Gretzel, U. (2024), "Heritage and new media spaces", Journal of Heritage Tourism, 19(5), 665-668 (SCOPUS Q1)`,
    `Tham, A., **Ting, H.**, and Kumarusamy, R. (2024). "An Opinion Piece on #ChatGPT – What do Generative Artificial Intelligence Technologies Reveal about Responsible Tourism Education that We don't Already Know?", Turizam, 28(2), 84-97`,
    `**Ting, H.**, Gong, J., Cheah, J. H., & Chan, K. (2024), "Editorial: The infodemic, young consumers, and responsible stakeholdership", Young Consumers, 25(4), 421-424 (SCOPUS Q1)`,
    `Nguyen, D. H., Tan, K. L., Nguyen, L. N. V., Nguyen, A. P., & **Ting, H.** (2024), "The Influence of Customer Relationship Management in Enhancing Hospitality Business Performance: The Conditional Mediation of Digital Marketing Capabilities", International Journal of Hospitality, 1-27 (SCOPUS Q2)`,
    `Lim, X. J., Quach, S., Thaichon, P., Cheah, J. H., & **Ting, H.** (2024), "Fact or Fake: Information, Misinformation and Disinformation via Social Media", Journal of Strategic Marketing, 32(5), 659-664 (SCOPUS Q1)`,
    `**Ting, H.**, Yusrini, L., & Aragon, L. (2024), "Integrating diversity, equity, and inclusion (DEI) in business education", Asian Journal of Business Research, 14(1), 1-12 (SCOPUS Q2)`,
    `Memon, M. A., Ramayah, T., **Ting, H.**, Cheah, J. H., & Chuah, F. (2024), "Control Variable: A Review And Proposed Guidelines", Journal of Applied Structural Equation Modeling, 8(2), 1-18 (SCOPUS Q1)`,
    `Leong, C. M., Cheah, J. H., **Ting, H.**, Lim, R., Ariffin, A. B., & Lim, X. J. (2024), "Enhancing Customer Retention: The Role of Customer Satisfaction and Delight in the Authorized Automotive After-Sales Service Sector", Journal of Applied Structural Equation Modeling, 8(1), 1-26 (SCOPUS Q1)`,
    `Quang, T. D., Vo. N. M. D., Nguyen, H. V., Nguyen, Q. X. T., **Ting, H.**, & Thanh, T. V. (2023), "Understanding tourists' experiences at war heritage sites in Ho Chi Minh city, Vietnam: a netnographic analysis of TripAdvisor reviews", Leisure Studies, 43(4), 624-643 (SSCI and SCOPUS)`,
    `Hafeez, S., Memon, M. A., Mirza, M. Z., Raziq, M. M., Sarwar, N., & **Ting, H.** (2023), "The dual impact of job variety on employee happiness and stress: the mediating role of employee engagement and burnout", Journal of Management Development, 43(2), 170-186 (ESCI and SCOPUS)`,
    `Sunkar, A., Yusrini, L., **Ting, H.**, & Tham, A. (2023), "The Third International Conference on Responsible Tourism and Hospitality", Anatolia, 35(1), 198-201 (ESCI and SCOPUS)`,
    `**Ting, H.**, Turner, D., Tan, K. L., Tan, S. R., Wong, M., & Gong, J. (2023), "Less is More? Review and Recommendations for Qualitative Sampling Strategy using the S.C.A.D.E Approach", Asian Journal of Business Research, 13(3), 1-9 (SCOPUS Q2)`,
    `Lim, X. J., Cheah, J. H., Ngo, L. V., Chan, K., & **Ting, H.** (2023), "How do crazy rich Asians perceive sustainable luxury? Investigating the determinants of consumers' willingness to pay a premium price", Journal of Retailing and Consumer Services, 75, 103502 (SSCI and SCOPUS)`,
    `**Ting, H.**, Le, A., Yusrini, L., Chen, S. S., Rengasamy, R., Ahamad, N. R., Sangchumnong, A., Le, H. P. L., & Ating, R. (2023), "International Conference on Responsible Tourism and Hospitality: Post-Event Reflection and Assessment", Journal of Responsible Tourism Management, 3(1), 1-8`,
    `Jordao, R. V. D., Raziq, M. M., Memon, M. A., **Ting, H.**, Ringle, C. M., & Muenjhon, N. (2023), "Editorial: Human capital, management and economics during and after the COVID-19 outbreak", The Bottom Line, 32(2), 101-111 (ESCI and SCOPUS)`,
    `Tham, A., **Ting, H.**, Yusrini, L., & Ho, J. S. Y (2023), "MICE tourism legacies: The International Conference on Responsible Tourism and Hospitality (ICRTH) 2022", Journal of Convention & Event Tourism, 24(3), 289-293 (SCOPUS – 2.4)`,
    `Arya, V., Sharma, A., **Ting, H.**, & Gowreesunkar V. G. B. (2023), "Guest editorial: Blue whistle for brands – consumers' and stakeholders' perspective towards reformation in marketing legal practices", International Journal of Law and Management, 65(1), 1-3 (ESCI and SCOPUS – 2.2)`,
    `Fam, K. S., Cheng, B. L., Cham, T. H., Tan, C. Y., & **Ting, H.** (2023), "The Role of Cultural Differences in Customer Retention: Evidence from the High-Contract Service Industry", Journal of Hospitality and Tourism Research, 47(1), 257-288 (SSCI – 5.161 and SCOPUS – 7.9)`,
    `Fam, K. S., Richard, J. E., & **Ting, H.** (2023), "Chopsticks Approach to Successful Cultural Tourism Marketing", Journal of Hospitality and Tourism Research, 47(1), 3-5 (SSCI – 5.161 and SCOPUS – 7.9)`,
    `Liu, Y., **Ting, H.**, & Ringle, C. (2023), "Appreciation to and Behavior Intention regarding Upscale Ethnic Restaurant", Journal of Hospitality and Tourism Research, 7(1), 235-256 (SSCI – 5.161 and SCOPUS – 7.9)`,
    `Gong, J., Said, F., **Ting, H.**, Firdaus, A., Aksar, I. A., & Xu, J. H. (2023), "Do Privacy Stress and Brand Trust still Matter? Implications on Continuous Online Purchasing Intention in China", Current Psychology, 42(18), 15515-15527 (SSCI and SCOPUS)`,
    `Kumar, P., Kumar, N., & **Ting, H.** (2023), "An impact of content delivery, equity, support and self-efficacy on student's learning during the COVID-19", Current Psychology, 42(3), 2460-2470 (SSCI – 4.297 and SCOPUS – 2.7)`,
    `Shakil, R. M., Memon, M. A., & **Ting, H.** (2023), "Inclusive leadership and innovative work behaviour: the mediating role of job autonomy", Quality & Quantity, 57(S4),707-721 (SCOPUS – 4.6)`,
    `Memon, M. A., Shaikh, S., Mirza, M. Z., Obaid, A., Muenjohn, N., & **Ting, H.** (2022), "Work-From-Home in the New Normal: A Phenomenological Inquiry into Employees' Mental Health", International Journal of Environmental Research and Public Health, 20(1), 48 (SSCI and SCOPUS)`,
    `Jussem, B. A. S., Kasuma, J., **Ting, H.**, ZA, S. Z., & Darma, D. C. (2022), "Revisit Homestay in Kuching, Sarawak: The Perspectives of Local and Foreign Tourist", Jurnal Manajemen Indonesia, 22(3), 377-396`,
    `Memon, M. A., **Ting, H.**, Ringle, C., Cheah, J. H., & Muenjohn, N. (2022), "Guest editorial: Green human resource management and the implications of culture on its practices in Asia", International Journal of Manpower, 43(3), 589-594 (SSCI and SCOPUS)`,
    `**Ting, H.**, Tham, A., & Gong, J. (2022), "Responsible Business–A Timely Introspection and Future Prospects", Asian Journal of Business Research, 12(2), 1-7 (SCOPUS)`,
    `Kumari, R., Verma, R., Debata, B. R., & **Ting, H.** (2022), "A systematic literature review on the enablers of green marketing adoption: Consumer perspective", Journal of Cleaner Production, 366, 132852 (SCI and SCOPUS)`,
    `Hsu, M. J., **Ting, H.**, Lui, T. W., Chen, S. C., & Cheah, J. H. (2022), "Guest editorial: Challenges and prospects of AIoT application in hospitality and tourism marketing", Journal of Hospitality and Tourism Technology, 13(3), 349-355 (SSCI and SCOPUS)`,
    `Thaichon, P., Cheah, J. H., & **Ting, H.** (2022), "The dark and bright side of online consumer behavior", Journal of Consumer Behaviour, 21(3), 445-449 (SSCI and SCOPUS)`,
    `Yusrini, L., Sochea, N., Ashton, A. S., Khanh, N. T. D., Islam, R., Rahmawati, S., Ky, V., Nhi, A. L. T. H., Annuar, S. N. S., & **Ting, H.** (2022), "An Outlook on Responsible Tourism in Southeast Asia", Journal of Responsible Tourism Management, 2(1), 58-78`,
    `**Ting, H.**, Yusrini, L., & Sita, S. E. D. (2022), "Responsible Tourism Management and Community Orientation", Journal of Responsible Tourism Management, 2(1), 1-9`,
    `Yek, P. N. Y., Mahari, W. A. W., Kong, S. H., Foong, S. Y., Peng, W., **Ting, H.**, Liew, R. K., Xia, C., Sonne, C., Tabatabaei, M., Almomani, F., Aghbashlo, M., & Lam, S. S. (2022), "Pilot-scale co-processing of lignocellulosic biomass, algae, shellfish waste via thermochemical approach: Recent progress and future directions", Bioresource Technology, 247, 126687 (SCI and SCOPUS)`,
    `Cheung, M. L., Leung, W. K. S., Cheah, J. H., & **Ting, H.** (2022), "Exploring the effectiveness of emotional and rational user-generated contents in digital tourism platforms", Journal of Vacation Marketing, 28(2), 152-170 (SSCI – 3.525 and SCOPUS – 4.3)`,
    `Ning, B., Omar, R., Ye, Y., **Ting, H.**, & Ning, M. (2022), "The role of Zhong-Yong thinking in business and management research: a review and future research agenda", Asia Pacific Business Review, 27(2), 150-179 (SSCI - 2.361 and SCOPUS – 2.7)`,
    `Cheah, J. H., Lim, X. J., **Ting, H.**, Liu, Y., & Quach, S. (2022), "Are privacy concerns still relevant? Revisiting consumer behaviour in omnichannel retailing", Journal of Retailing and Consumer Services, 65, 102242 (SSCI - 7.135 and SCOPUS – 9.0)`,
    `Sageng, C. W., **Ting, H.**, Chang, H. H., Leong, C.M., & Ting, H. B. (2021), "Motivation Factors Driving Travel Intention in the Controlled Pandemic Context: Perspectives from Malaysian and Taiwanese Travellers", Asian Journal of Business Research, 11(3), 92-112 (SCOPUS)`,
    `Turner, D., **Ting, H.**, Wong, M. W., Lim, T. Y., & Tan, K. L. (2021), "Applying Qualitative Approach in Business Research", Asian Journal of Business Research, 11(3), 1-13 (SCOPUS)`,
    `Cham, T. H., Cheah, J. H., **Ting, H.**, & Memon, M. A. (2021), "Will destination image drive the intention to revisit and recommend? Empirical evidence from golf tourism", International Journal of Sports Marketing and Sponsorship, 23(2), 385-409 (SSCI – 2.938 and SCOPUS – 2.4)`,
    `Yeong, S. W., Sandhu, M. K., & **Ting, H.** (2021), "The future of food: responsible production, acquisition, consumption and disposition", British Food Journal, 123(9), 2953-2958 (SCI – 2.518 and SCOPUS – 3.5)`,
    `Le, A., Tan, K. L., Yong, S. S., Soonsap, P., Lipa, C. J., & **Ting, H.** (2021), "Perceptions towards green image of trendy coffee cafés and intention to re-patronage: the mediating role of customer citizenship behavior", Young Consumers, 23(2), 165-178 (ESCI and SCOPUS – 3.6)`,
    `Phang, G., Balakrishnan, B. K. P. D., & **Ting, H.** (2021), "Does sustainable consumption matter? Consumer grocery shopping behaviour and the pandemic", Journal of Social Marketing, 11(4), 507-522 (SSCI – 2.020 and SCOPUS – 3.4)`,
    `**Ting, H.**, Morrison, A., Leong, C. M., Kumarusamy, R., & Leong, Q. L. (2021), "Responsibility, Responsible Tourism, and Our Response", Journal of Responsible Tourism Management, 1(2)`,
    `Chen, L. H., Wang, S., Morrison, A., **Ting, H.**, & Yeap, J. (2021), "Guest editorial: Opportunities and challenges at the nexus of coffee, tea, and tourism", International Journal of Culture, Tourism and Hospitality Research, 15(3), 285-289 (ESCI and SCOPUS – 2.7)`,
    `**Ting, H.**, Cheah, J. H., Lim, X. J., Ringle, C. M., Liu, Y., & Leong, C. M. (2021), "Are They All the Same? A Rethink of Young Consumers through the Lens of Generation Theories", Young Consumers, 22(1), 1-9 (ESCI and SCOPUS – 3.6)`,
    'Khan, S. K., Memon, M. A., Cheing, A., & **Ting, H.** (2021), “Organizational Citizenship Behaviour and the Mediating Role of Organizational Commitment: A Study of Private Universities”, International Journal of Business and Society, 22(1), 14-32 (ESCI and SCOPUS – 1.2)',
    'Yusrini, L., & **Ting, H.** (2021), “Responsible Tourism: A Call for Responsible Management”, Encyclopedia of Tourism Management and Marketing.',
    'Cheung, M. L., Pires, G. D., Rosenberger, P. J., Leung, W. K. S., & **Ting, H.** (2021), “Investigating the role of social media marketing on value co-creation and engagement: An empirical study in China and Hong Kong”, Australasian Marketing Journal, 29(2), 118-131 (ESCI and SCOPUS – 3.9)',
    'Cheer, J. M., **Ting, H.**, & Leong, C. M. (2021), “Responsible Tourism: A New Era of Responsibility?”, Journal of Responsible Tourism Management, 1(1), 1-17',
    'Ting, C. Y., Adruce, S. A. Z., Lim, C. J., Jabar, A. H. A. A., Ting, R. S. K., **Ting, H.**, Osman, N. A., Ngau, E., Talin, B. A., Muhammad, M., Loo, S. C., Lim, S. E., & Hassali, M. A. (2021), “Effectiveness of a pharmacist-led structured group-based intervention in improving medication adherence and glycaemic control among type 2 diabetes mellitus patients: A randomized controlled trial”, Research in Social and Administrative Pharmacy, 17(2), 344-355 (SSCI – 3.336 and SCOPUS – 4.0)',
    'Chuah, F., Memon, M. A., Ramayah, T., Cheah, J. H., **Ting, H.**, & Cham, T. H. (2021), “PLS-SEM using R: An introduction to cSEM and SEMinR”, Journal of Applied Structural Equation Modeling, 5(2), 1-35',
    'Hair, J. F., Cheah, J. H., Ringle, C. M., Sarstedt, M., & **Ting, H.** (2021), "Guest editorial: Predicting consumer behavior using partial least squares structural equation modeling (PLS-SEM)", European Business Review, 33(1), 1-8 (ESCI and SCOPUS – 5.3)',
    'Muenjohn, N., Ishikawa, J., Muenjohn, P., Memon, M. A., & **Ting, H.** (2021), “The effect of innovation and leadership on performance in China and Vietnam”, Asia Pacific Business Review, 27(1), 101-110 (SSCI - 2.361 and SCOPUS – 2.7)',
    'Cheung, M. L., **Ting, H.**, Cheah, J. H., & Sharipudin, M. N. S. (2021), “Examining the Role of Social Media-based Destination Brand Community in Evoking Tourists’ Emotions and Intention to Co-create and Visit”, Journal of Product and Brand Management, 30(1), 28-43 (SSCI - 4.335 and SCOPUS – 4.7)',
    'Wibowo, M. W., Permana, D., Hanafiah, A., Ahmad, S. F., & **Ting, H.**  (2021), “Halal Food Credence: Do the Malaysian non-Muslim Consumers Hesitate?”, Journal of Islamic Marketing, 12(8), 1405-1424 (ESCI and SCOPUS – 3.7)',
    'Cham, T. H., Lim, Y. M., Sia, B. C., Cheah, J. H., & **Ting, H.** (2020), “Medical tourism destination image and its relationship with the intention to revisit: A study of Chinese medical tourists in Malaysia”, Journal of China Tourism Research, 17(2), 163-191 (ESCI and SCOPUS – 1.7)',
    'Cheah, J. H., **Ting, H.**, Thaichon, P., Fam, K. S., & Bazylewich, M. (2020), “Can positioning strategies help influence willingness to pay for office space? Evidence on the moderating effect of office space grade and industry sector for occupiers of leased office space”, Journal of Strategic Marketing, 29(4), 337-358 (ESCI and SCOPUS – 4.0)',
    'Ye, Y., Omar, R., Ning, B., & **Ting, H.** (2020), “Intergenerational Transmission of Occupation: A Qualitative Inquiry into Frontline Factory Workers in China”, Sustainability, 12(20), 8486 (SSCI - 3.251 and SCOPUS – 3.9)',
    'Cheah, J., Thurasamy, R., Memon, M. A., Chuah, F., & **Ting, H.** (2020), “Multigroup Analysis using SmartPLS: Step-by-Step Guidelines for Business Research”, Asian Journal of Business Research, 10(3), 1-19 (SCOPUS – 0.5)',
    '**Ting, H.**, Tan, K. L., Lim, X. J., Cheah, J. H., Ting, Q. H., & Ting, H. B. (2020), “What determines customers’ loyalty towards telecommunication service? Mediating roles of satisfaction and trust”, International Journal of Services, Economics and Management, 11(3), 234-255 (SCOPUS – 0.9)',
    '**Ting, H.**, Lim, X. J., Leong, C. M., Cheah, J. H., & Joseph, M. C. (2020), “Editorial – Responsible Tourism: A Call to Action for Turbulent Times”, Asian Journal of Business Research, 10(2), 1-13 (SCOPUS – 0.5)',
    'Fam, K. S., Sharma, R. R., Newaz, F. T., Ahamed, A. F. M. J., & **Ting, H.** (2020), “Do Muslim generation cohorts differ in purchase intention? - The case of Islamic financial products”, Journal of Halal Service Research, 1(1), 1-17',
    'Ye, Y., Omar, R., Ning, B., & **Ting, H.** (2020), “Exploring the Interactions of Factory Workers in China: A Model Development using the Grounded Theory Approach”, Sustainability, 12(17), 6750 (SSCI - 3.251 and SCOPUS – 3.9)',
    'Chin, W., Cheah, J. H., Liu, Y., **Ting, H.**, Lim, X. J., & Cham, T. H. (2020), “Demystifying the Role of Causal-Predictive Modeling Using Partial Least Squares Structural Equation Modeling in IS Research”, Industrial Management and Data Systems, 120(12), 2161-2209 (SCIE - 3.329 and SCOPUS – 7.1)',
    'Memon, M. A., Salleh, R., Mirza, M. Z., Cheah, J. H., **Ting, H.**, Ahmad, M. S., & Tariq, A. (2020), “Satisfaction matters: the relationships between HRM practices, work engagement and turnover intention”, International Journal of Manpower, 42(1), 21-50 (SSCI - 1.750 and SCOPUS – 2.3)',
    'Lim, X. J., Ng, S. I., Kamal Basha, N., Cheah, J. H., & **Ting, H.** (2020), “To move or not to move? A study of sustainable retirement village in Malaysia", Current Psychology, 41(4), 2122-2138 (SSCI – 4.297 and SCOPUS – 2.7)',
    'Fam, K. S., **Ting, H.**, Tan, K. L., Hussain, K., & Cheah, J. H. (2020), "Does it Matter Where to Run? Intention to Participate in Destination Marathon", Asia Pacific Journal of Marketing and Logistics, 32(7), 1475-1494 (SSCI - 3.979 and SCOPUS – 4.5)',
    'Cheah, J. H., Waller, D., Park, T., Lim., X. J., & **Ting, H.**  (2020), “Price Image and the Sugrophobia Effect on Luxury Retail Purchase Intention”, Journal of Retailing and Consumer Services, 57, 102188 (SSCI - 7.135 and SCOPUS – 9.0)',
    'Cheah, J. H., Memon, M. A., Richard, J. E., **Ting, H.**, & Cham, T. H. (2020), “CB-SEM Latent Interaction: Unconstrained and Orthogonalized Approaches”, Australasian Marketing Journal, 28(4), 218-234 (ESCI and SCOPUS – 3.9)',
    '**Ting, H.**, Phang, G., Sarstedt & Cheah, J. H. (2020), “Editorial: Ethnic Food and Its Implications for Destination Tourism in Asia”, British Food Journal, 122(6), 1725-1729 (SCI – 2.518 and SCOPUS – 3.5)',
    'Tnay, J., Adruce, S. A., Lau, E., **Ting, H.**, Ting, C. Y., & Sandhu, M. K. (2020), “Teacher’s Engagement in Social and Emotional Guidance of Elementary School Students in Rural Areas of Malaysia: A Qualitative Inquiry”, International Journal of Instruction, 13(3), 827-844 (SCOPUS – 2.7)',
    'Tan, K. L., Sim, P. L., Goh, F. Q., Leong, C. M., & **Ting, H.** (2020), "Overwork and Overtime on Turnover Intention in Non-Luxury Hotels: Do incentives matter?", Journal of Hospitality and Tourism Insights, 3(4), 397-414 (ESCI and SCOPUS)',
    'Lyu, V. C., Lai, K. W., **Ting, H.**, & Zhang, H. F. (2020), “Destination food research: A bibliometric citation review (2000-2018)”, British Food Journal, 122(6), 2045-2057 (SCI – 2.518 and SCOPUS – 3.5)',
    'Cheah, J. H., Roldan, J. L., Ciavolino, E., **Ting, H.**, & Ramayah, T. (2020), “Sampling weight adjustments in Partial Least Squares Structural Equation Modelling: Guidelines and illustrations”, Total Quality Management and Business Excellence, 32(13-14), 1594-1613 (SSCI - 3.824 and SCOPUS – 6.2)',
    '**Ting, H.**, Ling, J., & Cheah, J. H. (2020), “It will go away!? Pandemic Crisis and Business in Asia”, Asian Journal of Business Research, 10(1), I-I (SCOPUS – 0.5)',
    'Lim, X., J., Cheah, J. H., **Ting, H.**, & Memon, M. (2020), “Compulsive buying of branded apparel, its antecedents, and the mediating role of brand attachment”, Asia Pacific Journal of Marketing and Logistics, 32(7), 1539-1563 (SSCI - 3.979 and SCOPUS – 4.5)',
    'Lim, X. J., Cheah, J. H., Waller, D. S., **Ting, H.**, & Ng, S. I. (2020), “What s-commerce implies? Repurchase intention and its antecedents”, Marketing Intelligence and Planning, 38(6), 760-776 (SSCI and SCOPUS)',
    'Lau, W. M., Jozsa, L., Chan, Y. W., Fong, Y. L., **Ting, H.**, & Tan, K. L. (2020), “Beliefs and attitude towards political advertising during Malaysia’s GE14 political tsunami”, International Journal of Business and Society, 21(1), 285-299 (ESCI and SCOPUS – 1.2)',
    'Sarstedt, M., Ringle, C. M., Cheah, J. H., **Ting, H.**, Moisescu, O. I., & Radomir, L. (2020), “Structural model robustness checks in PLS-SEM”, Tourism Economics, 26(4), 531-554 (SSCI - 4.438 and SCOPUS – 4.2)',
    'Memon, M. A., Salleh, R., Mirza, M. Z., Cheah, J. H., **Ting, H.**, & Ahmad, M. S. (2020), “Performance appraisal satisfaction and turnover intention: The mediating role of work engagement”, Management Decision, 58(6), 1053-1066 (SSCI and SCOPUS)',
    'Cheah, J. H., **Ting, H.**, Ramayah, T., Memon, M. A., Cham, T. H., & Ciavolino, E. (2019), “A comparison of five reflective–formative estimation approaches: Reconsideration and recommendations for tourism research”, Quality & Quantity, 53(3), 1421-1458 (SSCI and SCOPUS)',
    'Cheah, J. H., **Ting, H.**, Cham, T. H., & Memon, M. A. (2019), “The effect of selfie promotion and celebrity endorsed advertisement on decision-making processes: A model comparison”, Internet Research, 29(3), 552-577 (SSCI and SCOPUS)',
    'Cheah, J. H., Ng, S. I., **Ting, H.**, Memon, M. A., & Loo, S. C. S. (2019), “Customer orientation and office space performance: Assessing the moderating effect of building grade using PLS-MGA”, International Journal of Strategic and Property Management, 23(2), 117-129 (SSCI and SCOPUS)',
    'Hakimi, R. N., Lim, X. J., Cheah, J. H., **Ting, H.**, Soebandhi, S., Sudiyanti, S., Basha, N. K. (2019), “Determinants of consumer attitudes toward mobile advertising: A cross-border study between Malaysia and Indonesia using PLS-MGA”, International Journal of Economics and Management, 13(1) 21-36 (SCOPUS)',
    'Shmueli, G., Sarstedt, M., Hair, J. F., Cheah, J. H., **Ting, H.**, Vaithilingam, S., & Ringle, C. M. (2019), “Predictive model assessment in PLS-SEM: Guidelines for using PLSpredict”, European Journal of Marketing, 53(11), 2322-2347 (SSCI and SCOPUS)',
    'Tan, S., Lau, E., **Ting, H.**, Cheah, J. H., Simonetti, B., & Lip, T. H. (2019), “How do students evaluate instructors’ performance? Implication of teaching abilities, physical attractiveness and psychological factors”, Social Indicators Research, 146, 61-76 (SSCI and SCOPUS)',
    'Ting, C. Y., Adruce, S. A. Z., Loo, S. C., **Ting, H.**, & Tnay, J. (2019), “Interventions on improving medication adherence in Malaysia: A mini review”, Journal of Young Pharmacists, 11(2), 122-125 (ESCI)',
    '**Ting, H.**, Thaichon, P., Chuah, F., & Tan, S. R. (2019), “Consumer behaviour and disposition decisions: The why and how of smartphone disposition”, Journal of Retailing and Consumer Services, 51, 212-220 (SSCI - 7.135 and SCOPUS – 9.0)',
    'Ting, C. Y., Ismail, M. B., **Ting, H.**, Bahri, S. B., Sidek, A. B., Idris, S. F. B., Tan, R. T. H., Seman, S. S. B. A., Sethiaram, M. R., Ghazali, M. H. B. M., Lim, Q. H., Zaki, M. S. B. M., & Sohot, M. S. B. (2019), “Consumer behaviour towards pharmaceutical products: A model development”, International Journal of Pharmaceutical and Healthcare Marketing, 13(3), 387-402 (ESCI and SCOPUS)',
    'Ting, C. Y., Adruce, S. A. Z., Hassali, M. A., **Ting, H.**, Lim, C. J., Ting, R. S. K., Jabar, A. H. A. A., Osman, N. A., Shuib, I. S., Loo, S. C., Sim, S. T., Lim, S. E., & Morisky, D. E. (2019), “Correction to: Effectiveness and sustainability of a structured group-based educational program (MEDIHEALTH)...”, Trials, 20(1) (SSCI and SCOPUS)',
    '**Ting, H.**, Fam, K. S., Cheah, J. H., Richard, J. E., & Xing, N. (2019), “Ethnic food consumption intention at the touring destination: The national and regional perspectives using multi-group analysis”, Tourism Management, 71, 18-529 (SSCI and SCOPUS)',
    '**Ting, H.**, Fam, K. S., Chan, Y. W., & Cheah, J. H. (2019), “Editorial – Ten trends shaping the future of marketing: Considerations for the academics”, Asian Journal of Business Research, 9(1), I – IX (SCOPUS)',
    'Ting, C. Y., Ting, R. S., Lim, C. J., King, T. L., **Ting, H.**, & Gerofi, J. (2019), “Pilot study on functional performance and acceptability of two new synthetic adhesive male condoms (Wondaleaf): A randomized cross-over trial”, Contraception, 100(1), 65-71 (SCIE and SCOPUS)',
    'Cheah, J. H., Sarstedt, M., Ringle, C. M., Ramayah, T., & **Ting, H.** (2018), “Convergent validity assessment of formatively measured constructs in PLS-SEM...”, International Journal of Contemporary Hospitality Management, 30(11), 3192-3210 (SSCI and SCOPUS)',
    'Cheah, J. H., Memon, M. A., Chuah, F., **Ting, H.**, & Ramayah, T. (2018), “Assessing reflective models in marketing research...”, International Journal of Business and Society, 19(1), 139-160 (ESCI and SCOPUS)',
    'Memon, M. A., Salleh, R., Nordin, S. M., Cheah, J. H., **Ting, H.**, & Chuah, F. (2018), “Person-organisation fit and turnover intention...”, Journal of Management Development, 37(3), 285-298 (ESCI and SCOPUS)',
    'Tan, S. R., **Ting, H.**, Lajuni, N., Yacob, Y., & Hii, J. W. S. (2018), “Evaluating Malaysian palm oil industry using discounted cash flow approach”, International Research Journal of Finance and Economic, 167, 17-25 (SCOPUS)',
    'Ting, C. Y., Loo, S. C., Tee, E. C., Ang, W. C., Tnay, J., **Ting, H.**, Jabar, A. H. A. A., & Adruce, S. A. Z. (2018), “Knowledge and practice of beauty salon owners...”, Journal of Young Pharmacists, 10(4), 456-459 (ESCI and SCOPUS)',
    'Ting, C. Y., Adruce, S. A. Z., Hassali, M. A., **Ting, H.**, Lim, C. J., Ting, R. S. K., Jabar, A. H. A. A., Osman, N. A., Shuib, I. S., Loo, S. C., Sim, S. T., Lim, S. E., & Morisky, D. E. (2018), “Effectiveness and sustainability of a structured group-based educational program (MEDIHEALTH)...”, BMC Trials, 19(310), 1-13 (SCIE and SCOPUS)',
    '**Ting, H.**, Lau, W. M., Cheah, J. H., Yacob, Y., Memon, M. A., & Lau, E. (2018), “Perceived quality and intention to revisit coffee concept shops in Malaysia...”, British Food Journal, 120(5), 1106-1119 (SCI and SCOPUS)',
    '**Ting, H.**, Lim, T. Y., de Run, E. C., Koh, H., & Sahdan, M. (2018), “Are we baby boomers, Gen X and Gen Y? A qualitative inquiry...”, Kasetsart Journal of Social Sciences, 39(1), 109-115 (ACI and SCOPUS)',
    'Yacob, Y., Ali, J. K., Roslin, R. M., & **Ting, H.** (2018), “The relationships between member participation, trust, behavioural loyalty...”, International Journal of Business and Society, 19(2), 505-522 (ESCI and SCOPUS)',
    'Memon, M. A., Salleh, R., Baharom, M. N. R., Nordin, S. M., & **Ting, H.** (2017), “The relationship between training satisfaction, organisational citizenship behaviour, and turnover intention...”, Journal of Organizational Effectiveness: People and Performance, 4(3), 267-290 (ESCI and SCOPUS)',
    'Lajuni, N., Wong, W. P. M., Yacob, Y., **Ting, H.**, & Jausin, A. (2017), “Intention to use Islamic banking products...”, International Journal of Economics and Financial Issues, 7(1), 329-333 (SCOPUS)',
    'Richard, J. E., Fam, K. S., & **Ting, H.** (2017), “Marketing, tourism, and international business journal rankings 2014...”, Asian Journal of Business Research, 7(2), 1-18 (SCOPUS)',
    'Ting, C. Y., **Ting, H.**, Soh, Y. C., Aaj, A. H., & Lee, K. S. (2017), “Awareness of custom officers on counterfeit pharmaceutical products and the roles of pharmacy enforcement officers”, Journal of Young Pharmacists, 9(2), 258-262 (ESCI)',
    '**Ting, H.**, Mering, M. W., Adruce, S. A. Z., & Memon, M. A. (2017), “Intention to attend the Rainforest World Music festival: Local visitor perspectives”, Tourism Culture & Communication, 17(2), 119-129 (SCOPUS)',
    'Ting, C. Y., Loo, S. C., **Ting, H.**, Ang, W. C., & Jabar, A. H. A. A. (2017), “Compliance of community pharmacists and private general medical practitioners with Malaysian laws on poison and sale of drugs”, Therapeutic Innovation & Regulatory Science, 51, 439-445 (SCIE & SCOPUS)',
    '**Ting, H.**, Tan, S. R., & John, A. N. (2017), “Consumption intention toward ethnic food: Determinants of Dayak food choice by Malaysians”, Journal of Ethnic Foods, 4(1), 21-27 (SCOPUS)',
    'Chuah, F., Teoh, K., **Ting, H.**, & Lau. E. (2016), “A behavioural approach to modelling strategy execution: The role of organisational support and the moderated mediation effect of engagement and communication”, International Review of Management and Marketing, 6(8), 217-225 (SCOPUS)',
    'Huang, H. W., de Run, E. C., **Ting, H.**, & Ting, H. S. C. (2016), “Made in China products and the implication of ethnic identification strength”, International Review of Management and Marketing, 6(3), 631-640 (SCOPUS)',
    'Memon, M. A., **Ting, H.**, Salleh, R., Ali, J. K., & Yacob, Y. (2016), “Level of stress and job satisfaction among call operators: A case of Malaysian telecommunication sector”, International Review of Management and Marketing, 6(3), 442-447 (SCOPUS)',
    '**Ting, H.**, de Run, E. C., Sudiyanti, S., & Cheah, J. H. (2016), “Attitude towards advertising: Evidence from Malaysia and Indonesia using multi-group analysis”, International Journal of Business Research and Management, 16(4), 57-66 (SCOPUS)',
    '**Ting, H.**, & Ramayah, T. (2016), “What matters to infrequent customers: A pragmatic approach to understanding perceived value and intention to revisit trendy coffee café”, SpringerPlus, 5(651), 1-11 (SCIE and SCOPUS)',
    '**Ting, H.**, de Run, E. C., Cheah, J. H., & Chuah, F. (2016), “Food neophobia and ethnic food consumption intention: An extension of the theory of planned behaviour”, British Food Journal, 118(11), 2781-2797 (SCI and SCOPUS)',
    '**Ting, H.**, Chuah, C. W., & de Run, E. C. (2016), “Knowledge sharing behaviour in innovative working environment: A case of a software developing company”, International Business Management, 10(10), 1989-1997 (SCOPUS)',
    'Kashif, M., de Run, E. C., Abdul Rehman, M., & **Ting, H.** (2015), “Bringing Islamic tradition back to management development: A new Islamic Dawah based framework to foster workplace ethics”, Journal of Islamic Marketing, 6(3), 429-446 (ESCI and SCOPUS)',
    '**Ting, H.**, Chuah, F., Cheah, J. H., Memon, M. A., & Yacob, Y. (2015), “Revisiting attitude towards advertising, its antecedent and outcome: A two-stage approach using PLS-SEM”, International Journal of Economics and Management, 9(2), 382-402 (ESCI and SCOPUS)',
    '**Ting, H.**, de Run, E. C., & Ramayah, T. (2015), “Young adults’ attitude towards advertising: A multi-group analysis by ethnicity”, Review of Business Management, 17(54), 769-787 (SSCI and SCOPUS)',
    '**Ting, H.**, & de Run, E. C. (2015), “Attitude towards advertising: A young generation cohort’s perspective”, Asian Journal of Business Research, 5(1), 83-96 (SCOPUS)',
    'de Run, E. C., & **Ting, H.** (2014), “Determining attitudinal beliefs about controversial advertising”, International Journal of Business and Society, 15(3), 465-476 (ESCI and SCOPUS)',
    'Kashif, M., & **Ting, H.** (2014), “Service-orientation and teaching quality: Business degree students’ expectations of effective teaching”, Asian Education and Development Scopus, 3(2), 163-180 (ESCI and SCOPUS)',
    'de Run, E. C., & **Ting, H.** (2013), “Generational cohorts and their attitudes toward advertising”, Market-Trziste, 25(2), 143-160 (ESCI and SCOPUS)',
    '**Ting, H.**, & de Run, E. C. (2012), “Generation X and Y attitude towards controversial advertising”, Asian Journal of Business Research, 2(2), 18-32 (SCOPUS)'
  ];

  const refereedArticles = [
    `Mumtaz, A. M., **Ting, H.**, Cheah, J. H., Ramayah, T., Chuah, F., & Cham, T. H. (2020), “Sample Size for Survey Research: Review and Recommendations”, Journal of Applied Structural Equation Modeling, 4(1), i-xi.`,
    `Memon, M. A., Cheah, J. H., Ramayah, T., **Ting, H.**, Chuah, F., & Cham, T. H. (2019), “Moderation analysis: Issues and guidelines”, Journal of Applied Structural Equation Modeling, 3(1), i-xi.`,
    `Memon, M. A., Cheah, J. H., Ramayah, T., **Ting, H.**, & Chuah, F. (2018), “Mediation analysis issues and recommendations”, Journal of Applied Structural Equation Modeling, 2(1), i-ix.`,
    `Memon, M. A., **Ting, H.**, Ramayah, T., Chuah, F., & Cheah, J. H. (2017), “A Review of the methodological misconceptions and guidelines related to the application of Structural Equation Modelling: A Malaysian scenario”, Journal of Applied Structural Equation Modelling, 1(1), i-xiii.`,
    `Rajuli, K., Cheing, A., Zaidi Adrice, S. A., **Ting, H.**, Usop, H. H., & Memon, M. A. (2017), “Knowledge sharing traits and competitive advantage: A qualitative inquiry”, e-Journal of Social & Behavioural Research in Business, 8(2), 29-44.`,
    `Rasool, S., Kiyani, A. A., Siali, F., **Ting, H.**, & Abdu Shakur, M. M. (2017), “Consumer innovativeness in consumer-company relationship and mediating role of consumer value: An empirical study of cell phone users in Pakistan”, International Review of Management and Marketing, 7(1), 379-388.`,
    `Yacob, Y., Jati, K. A., **Ting, H.**, Lajuni, N., & Syed Hussin, S. M. O. (2017), “Determinants of members' loyalty in cooperatives”, Malaysian Journal of Co-operative Studies, 13(2), 1-11.`,
    `Chuah, F., **Ting, H.**, de Run, E. C., & Cheah, J. H. (2016), “Reconsidering what entrepreneurial intention implies: The evidence from Malaysian university students”, International Journal of Business and Social Science, 7(9), 85-98.`,
    `Jee, T. W., **Ting, H.**, de Run, E. C., & Tan, S. (2016), “Disposition and repurchase intention: A preliminary study of the how and why”, Procedia - Social and Behavioural Sciences, 224, 332-338.`,
    `**Ting, H.**, Yacob, Y., Liew, L., & Lau, W. M. (2016), “Intention to use mobile payment system:  A case of developing market by ethnicity”, Procedia Social and Behavioural Studies, 224, 368-375.`,
    `**Ting, H.**, Chuah, C. W., & de Run, E. C. (2016), “Knowledge sharing behaviour in innovative working environment: A case of a software developing company”, International Business Management, 10(10), 1989-1997.`,
    `**Ting, H.**, de Run, E. C., & Liew, S. L. (2016), “Intention to use Instagram by generation cohorts: The perspective of developing markets”, Global Business and Management Research: An International Journal, 8(1), 43-55.`,
    `**Ting, H.**, Wong, W. P. W., & de Run, E. C. (2016), “Compliant behaviour between generations and its transmissions: An exploratory study in Malaysia”, International Journal of Business and Management, 11(11), 279-288.`,
    `Yacob, Y., Ali, K. J., & **Ting, H.** (2016), “Value co-creation dimensions: Their effect on satisfaction of cooperative members”, Malaysian Journal of Co-operative Studies, 12, 93-106.`,
    `**Ting, H.**, & de Run, E. C. (2015), “A qualitative inquiry into the formation of generational cohorts: A case of an emerging market”, Journal of Economics and Business Research, 21(1), 126-143.`,
    `**Ting, H.**, Wong, P. M. W., de Run, E. C., & Choo, L. Y. S. (2015), “Beliefs about the use of Instagram: An exploratory study”, International Journal of Business and Innovation, 2(2), 15-31.`
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
              <li key={index + 1} className="leading-relaxed">
                {/* Parse markdown bold syntax for Ting, H. */}
                {item.split('**').map((part, i) => 
                  i % 2 === 0 ? part : <strong key={i}>{part}</strong>
                )}
              </li>
            ))}
          </ol>
        </section>

        {/* Refereed Journal Articles Section */}
        <section className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold font-playfair text-gray-800 mb-4">
            Refereed (ERA listed) Journal Articles
          </h2>
          <ol className="list-decimal pl-5 space-y-5 text-gray-700">
            {refereedArticles.map((item, index) => (
              <li key={index + 1} className="leading-relaxed">
                {item.split('**').map((part, i) =>
                  i % 2 === 0 ? part : <strong key={i}>{part}</strong>
                )}
              </li>
            ))}
          </ol>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default JournalArticles;
