# KIỂM TRA SAI LỆCH NỘI DUNG VÀ DANH SÁCH CẦN SỬA  
## Portfolio của Prof. Dr. Hiram Ting

**Ngày kiểm tra:** 04/08/2026  
**Repository tham chiếu:** `IzzatD03/hiram-ting-portfolio-portal` — nhánh `main`, commit gần nhất được kiểm tra: `09578e72a755ba2bf67f7b0f435269501360c0f5`  
**Repository redesign:** `nmtrucworking/hiramting-portfolio` — nhánh `main`, commit gần nhất được kiểm tra: `d8b38383707608572e42bbd22fef7e498daf8a2b`  
**Phạm vi:** Nội dung, định vị học thuật, cấu trúc thông tin, mức độ bảo toàn dữ liệu, các tuyên bố chưa có căn cứ trực tiếp và rủi ro sai lệch khi hiển thị.  
**Nguồn phản hồi bổ sung:** Hai ảnh nhận xét sơ bộ của Prof. Dr. Hiram Ting đối với trang Home.

> Tài liệu này chỉ là báo cáo kiểm tra cục bộ. Không có commit, push, pull request hoặc thay đổi nào được thực hiện trên hai repository.

---

# 1. Kết luận tổng quát

Dữ liệu có cấu trúc trong repository redesign nhìn chung đã sao chép khá đầy đủ từ website tham chiếu, đặc biệt đối với:

- biography;
- thông tin liên hệ;
- danh sách academic affiliations;
- professional engagements;
- editorial roles;
- research projects;
- industry projects;
- events;
- news archive;
- journal articles, books, chapters và conference proceedings;
- các tệp CV và hình ảnh.

Sai lệch chính không nằm ở việc sao chép dữ liệu thô, mà nằm ở **cách diễn giải và định vị lại dữ liệu** trong giao diện mới. Website redesign đang:

1. rút gọn hồ sơ của Prof. Hiram thành một chuyên gia marketing;
2. tự xây dựng mô hình “bốn lĩnh vực nghiên cứu” không tồn tại như một cấu trúc chính thức trong repository tham chiếu;
3. tạo thêm các thông điệp, phân loại, “outcome”, cơ hội hợp tác và vai trò nghiên cứu chưa được dữ liệu nguồn xác nhận;
4. gộp nhiều trang cũ vào `Profile` và `Impact`, làm một phần dữ liệu không còn được hiển thị;
5. đưa các nội dung placeholder của `Research Team` lên như thông tin thật;
6. duy trì một số mâu thuẫn nội bộ đã tồn tại trong nguồn mà chưa được xác minh với Prof. Hiram.

Nhận xét trong ảnh đính kèm phù hợp với kết quả kiểm tra:

- “Scholar & expert in marketing” không đại diện đầy đủ;
- đoạn hero summary cần sửa;
- bốn thẻ research hiện tại không phản ánh đầy đủ công trình của Prof. Hiram.

---

# 2. Nguyên tắc xác định sai lệch

Các phát hiện được chia thành ba loại:

| Loại | Ý nghĩa |
|---|---|
| **Sai hoặc mâu thuẫn** | Nội dung trái với dữ liệu khác trong repository tham chiếu hoặc hai nơi trên website đang nói khác nhau. |
| **Không được nguồn hỗ trợ** | Có thể đúng trên thực tế nhưng không có dữ liệu trong repository tham chiếu để khẳng định. Cần Prof. Hiram xác nhận trước khi xuất bản. |
| **Rút gọn gây sai định vị** | Không nhất thiết sai từng câu, nhưng bỏ sót các vai trò/lĩnh vực quan trọng đến mức làm người đọc hiểu sai hồ sơ. |

Repository tham chiếu cũng có một số mâu thuẫn nội bộ. Những điểm này không nên được “tự sửa” theo phỏng đoán; cần hỏi trực tiếp Prof. Hiram.

---

# 3. Các vấn đề cần xử lý trước khi công bố

## 3.1. Mức C0 — Phải xử lý trước khi xem nội dung là hoàn chỉnh

### C0-01 — Trang Research Team đang trình bày dữ liệu giả định như dữ liệu thật

**Tệp:** `app/team/page.tsx`

Các nội dung chưa có trong repository tham chiếu nhưng đang được hiển thị như thông tin chính thức:

- Prof. Dr. Hiram Ting được gán vai trò **“Research Director”**;
- tồn tại một **“Core Research Team”**;
- tồn tại các nhóm **Research Associates**, **Postgraduate Researchers**, **Students & Alumni**, **International Collaborators**, **Advisors & Partners**;
- có các cơ hội đang mở về:
  - postgraduate supervision;
  - research collaboration;
  - methods support;
  - community projects;
- “the network is led by Prof. Dr. Hiram Ting”.

Repository tham chiếu không có danh sách thành viên, chức danh nhóm, trạng thái tham gia, cơ hội đang mở hoặc điều kiện ứng tuyển.

**Rủi ro:** Người xem có thể hiểu đây là một nhóm nghiên cứu đã được thành lập chính thức và Prof. Hiram đang nhận nghiên cứu sinh/cộng tác viên.

**Cần sửa:**

- Không công bố trang này ở trạng thái hiện tại.
- Chọn một trong hai phương án:
  1. Ẩn route `/team` cho đến khi có dữ liệu được xác nhận.
  2. Đổi trang thành “Research Team — information being updated”, không hiển thị chức danh, nhóm, cơ hội hoặc silhouette giả định.
- Chỉ xuất bản sau khi có:
  - tên thành viên;
  - ảnh được phép sử dụng;
  - vai trò;
  - cơ quan;
  - chủ đề phụ trách;
  - trạng thái current/alumni/collaborator;
  - sự đồng ý công bố;
  - cơ hội đang thực sự mở.

---

### C0-02 — Mâu thuẫn chức danh tại International Journal of Tourism Research

**Nguồn biography:**  
`data/profile.ts` và trang Home tham chiếu ghi:

- **Associate Editor of International Journal of Tourism Research**

**Nguồn affiliations:**  
`data/affiliations.ts` ghi:

- **Regional Editor, International Journal of Tourism Research**

Hai chức danh không tương đương.

**Rủi ro:** Website hiện có thể đồng thời hiển thị cả hai chức danh trên cùng một hồ sơ.

**Cần sửa:**

- Hỏi Prof. Hiram chức danh hiện tại và khoảng thời gian áp dụng.
- Chỉ duy trì một bản ghi hiện hành.
- Nếu cả hai đều đúng ở các giai đoạn khác nhau, thêm trường:
  - `period`;
  - `status: current | former`;
  - nguồn xác nhận.

---

### C0-03 — “World’s Top 2 Scientists” thiếu ký hiệu phần trăm

**Tệp:** `data/profile.ts`

Biography đang ghi:

> ranked in the World's Top 2 Scientists

Trong `data/affiliations.ts`, nội dung là:

> World's Top 2% Scientists

Đây là sai khác có ý nghĩa. “Top 2 scientists” và “Top 2% scientists” là hai khẳng định hoàn toàn khác nhau.

**Cần sửa:**

- Sau khi đối chiếu tài liệu xác nhận, thống nhất thành **World’s Top 2% Scientists** nếu đó là danh hiệu đúng.
- Ghi rõ:
  - lĩnh vực: Business, Management and Marketing;
  - năm công nhận;
  - đơn vị/xếp hạng;
  - đường dẫn bằng chứng nếu được phép công bố.

---

### C0-04 — Không bảo toàn đầy đủ nội dung nguồn trên giao diện

Mục tiêu đã nêu của dự án là giữ toàn bộ thông tin, nhưng giao diện mới đang chỉ hiển thị một phần:

| Nhóm dữ liệu | Nguồn | Giao diện redesign hiện tại |
|---|---:|---:|
| Academic affiliations | 10 | 10 |
| Professional engagements | 8 | 8 |
| Editorial records | 10 | 6 |
| Other notable roles | 2 | Không có section đầy đủ |
| Research projects | 6 | 6 ở Research; 4 ở Home |
| Industry projects | 8 | 8 ở Impact; 4 ở Home |
| Events | 9 | 9 |
| News/media records | 30 | 6 |
| CV | Có PDF | Có download/open |
| Motto | Có trong dữ liệu | Không được dùng trong production pages đã kiểm tra |

**Cần sửa:**

- Tạo cơ chế truy cập toàn bộ archive.
- Nếu Home chỉ hiển thị subset, phải ghi rõ **Selected**, **Featured** hoặc **Recent**.
- `Impact` phải có:
  - nút “View all media coverage”;
  - archive đầy đủ 30 bản ghi;
  - bộ lọc theo năm/ngôn ngữ/chủ đề nếu cần.
- `Profile` phải hiển thị đủ editorial roles hoặc có nút mở toàn bộ.
- Khôi phục `Other Notable Roles` thành một nhóm riêng.

---

## 3.2. Mức C1 — Sai định vị hoặc tuyên bố chưa có căn cứ trực tiếp

### C1-01 — “Scholar & Expert in Marketing” quá hẹp và không phải tagline đang hoạt động ở nguồn

**Tệp:** `data/profile.ts`, `app/page.tsx`

Nội dung hiện tại:

> Scholar & expert in marketing

Trong trang Home của repository tham chiếu, dòng:

> Scholar & Expert in Marketing

đã bị comment và không được hiển thị. Việc redesign đưa lại nội dung này thành thông điệp nổi bật đã phục hồi một câu mà phiên bản tham chiếu không còn dùng.

Ngoài marketing, repository tham chiếu thể hiện rõ các trục:

- consumer behaviour;
- responsible tourism;
- research methods;
- responsible business;
- youth and community engagement;
- editorial leadership;
- cultural and heritage tourism;
- responsible food production, consumption and disposition;
- institutional and regional academic roles.

**Cần sửa:**

- Không dùng “Scholar & expert in marketing” làm định vị chính.
- Dùng cấu trúc nhiều lớp:
  - chức danh/identity;
  - các lĩnh vực nghiên cứu;
  - editorial leadership;
  - regional and community engagement.

---

### C1-02 — Hero summary là câu mới, chưa được Prof. Hiram phê duyệt

**Tệp:** `app/page.tsx`

Nội dung hiện tại:

> Advancing responsible tourism, marketing and consumer research through scholarship, collaboration and community impact across Asia-Pacific.

Câu này không có nguyên văn trong repository tham chiếu. Câu không nhất thiết sai, nhưng:

- quá tổng quát;
- bỏ research methods;
- bỏ editorial leadership;
- bỏ responsible business;
- bỏ youth/generation research;
- bỏ food production/consumption/disposition;
- dùng “community impact” như một kết quả đã chứng minh;
- dùng “across Asia-Pacific” như định vị bao quát mà chưa có statement chính thức.

**Cần sửa:** Chỉ sử dụng sau khi Prof. Hiram duyệt. Không dùng các từ “impact”, “advancing” hoặc “leading” nếu chưa xác định bằng chứng hoặc phạm vi.

---

### C1-03 — Mô hình “Four interconnected research domains” là cấu trúc do redesign tự tạo

**Tệp:** `app/page.tsx`, `app/research/page.tsx`

Bốn nhóm hiện tại:

1. Responsible Tourism  
2. Marketing & Consumer Behaviour  
3. Research Methods  
4. Culture, Food & Heritage  

Repository tham chiếu không xác định bốn nhóm này như taxonomy chính thức. Danh sách research projects trong nguồn gồm sáu mục cụ thể:

1. Responsible Marketing and Consumerism  
2. Responsible Tourism in Southeast Asia  
3. British Food Journal: Responsible Food Production, Consumption and Disposition  
4. Journal of Consumer Behaviour: Consumer Online and Offline Behaviour  
5. Young Consumer: Youth Behaviour through the Lens of Generation Theories  
6. Cultural and Heritage Tourism  

**Các sai lệch do mô hình bốn nhóm gây ra:**

- bỏ mất **Youth Behaviour through Generation Theories**;
- không thể hiện rõ **Responsible Food Production, Consumption and Disposition**;
- làm mờ **Responsible Marketing and Consumerism**;
- làm mờ **Consumer Online and Offline Behaviour**;
- biến research methods thành một “domain” ngang hàng dù nguồn không tuyên bố như vậy;
- thêm các cụm như “sustainable recovery”, “market segmentation”, “digital channels” và “new media spaces” vào description mà chưa có taxonomy chính thức.

**Cần sửa:**

- Dùng sáu research programmes theo tên nguồn.
- Trình bày Research Methods như **cross-cutting methodological expertise**, không tự động xem là một programme chính.
- Chỉ gom nhóm sau khi Prof. Hiram xác nhận taxonomy.

---

### C1-04 — Tên research programme bị rút gọn làm mất ngữ cảnh nguồn

**Tệp:** `app/research/page.tsx`

Ví dụ:

- `Responsible Food Production, Consumption and Disposition` đã bỏ tiền tố **British Food Journal**.
- `Youth Behaviour through Generation Theories` đã bỏ tiền tố **Young Consumer**.
- Các programme được chia thành “Responsibility & place” và “Behaviour & culture” mà không có cấu trúc này trong nguồn.

**Cần sửa:**

- Bảo toàn tên chính thức.
- Nếu tiền tố là tên special issue/journal chứ không phải programme, cần xác minh rồi tách thành các trường:
  - `programmeTitle`;
  - `journalOrPlatform`;
  - `status`;
  - `period`.

---

### C1-05 — Các tuyên bố về collaboration opportunities chưa được nguồn hỗ trợ

**Tệp:** `app/research/page.tsx`, `app/team/page.tsx`, `components/ui.tsx`

Các câu đang ngụ ý Prof. Hiram đang chủ động nhận:

- joint publications;
- special issues;
- postgraduate supervision;
- institutional research;
- methodological support;
- community-oriented projects.

Nguồn chỉ cho thấy ông có kinh nghiệm và mạng lưới; không xác nhận mọi cơ hội trên đang mở.

**Cần sửa:**

- Thay “Opportunities” bằng “Areas of engagement” hoặc “Previous and potential collaboration areas” nếu chưa có trạng thái mở.
- Mỗi cơ hội cần:
  - trạng thái;
  - thời hạn;
  - eligibility;
  - institution/programme;
  - contact route;
  - ngày cập nhật.

---

### C1-06 — Footer và CTA sử dụng nhiều slogan mới chưa được phê duyệt

**Tệp:** `components/footer.tsx`, `components/ui.tsx`, `app/layout.tsx`

Các thông điệp mới gồm:

- Research with purpose. Impact with responsibility.
- Scholarship, responsible impact and value co-creation...
- Research · Responsibility · Value co-creation.
- Explore opportunities for collaboration.
- Turn research into responsible action.
- Join a purposeful research conversation.

Các câu này không phải nội dung nguyên văn của nguồn. Trong khi đó, nguồn có motto chính thức:

> BE A MAN OF VALUE, REMAIN GRATEFUL, LIVE IN THE MOMENT & STAY PURPOSEFUL

**Cần sửa:**

- Chọn một hệ thống message được Prof. Hiram duyệt.
- Không để mỗi section tạo một slogan khác nhau.
- Cân nhắc sử dụng motto chính thức ở footer hoặc Profile.
- Phân biệt rõ:
  - personal motto;
  - academic positioning;
  - CTA;
  - REBORN positioning.

---

### C1-07 — Home authority strip làm mất thông tin phân biệt quan trọng

**Tệp:** `app/page.tsx`

Các mục hiện tại rút gọn:

- World’s Top 2% Scientists;
- UN Tourism Panel of Experts;
- Emerald Ambassador — East Asia;
- Editor-in-Chief of international journals.

Các điểm bị mất:

- lĩnh vực xếp hạng;
- năm;
- “first Ambassador” nếu claim này được xác nhận;
- “first Malaysian” tham gia panel nếu claim này được xác nhận;
- tên các journal;
- chức danh chính xác của từng journal.

**Cần sửa:**

- Không dùng badge quá chung chung.
- Mỗi recognition nên có:
  - title;
  - issuing body;
  - year;
  - category;
  - evidence URL;
  - status.

---

### C1-08 — Profile fact cards là diễn giải mới, không phải dữ liệu nguồn

**Tệp:** `app/profile/page.tsx`

Các thẻ:

- Primary domains;
- Regional focus;
- Leadership;
- Methodological work.

Đây là synthesis của redesign. Chúng có thể hữu ích, nhưng đang được trình bày như sự thật chính thức.

**Cần sửa:**

- Hoặc xin Prof. Hiram phê duyệt;
- hoặc thay bằng dữ liệu định lượng/trực tiếp:
  - current academic appointments;
  - editorial roles;
  - professional roles;
  - publication categories;
  - recognitions;
  - regions/institutions được liệt kê chính xác.

---

### C1-09 — “Research Director” là chức danh không có trong nguồn

**Tệp:** `app/team/page.tsx`

Nguồn có các vai trò như:

- President — Responsible Borneo;
- Chairman — Sarawak Research Society;
- Founder Director — SEARA;
- Senior Research Fellow;
- Senior Professor;
- Professorial Chairholder;
- editorial roles.

Không có chức danh “Research Director” cho network đang hiển thị.

**Cần sửa:** Xóa hoặc thay bằng chức danh được Prof. Hiram xác nhận cho chính research team này.

---

### C1-10 — Impact page khẳng định “outcomes” mà chỉ có danh sách tên dự án

**Tệp:** `app/impact/page.tsx`

Các câu như:

- From research questions to community outcomes;
- initiatives that support destinations, institutions, young people...;
- research translated into initiatives...;
- evidence-led projects.

Nguồn hiện chỉ cung cấp tên dự án/sự kiện, không có:

- mục tiêu;
- vai trò của Prof. Hiram;
- đối tác;
- thời gian;
- output;
- outcome;
- KPI;
- bằng chứng;
- trạng thái.

**Cần sửa:**

- Trước khi dùng từ “outcome” hoặc “impact”, bổ sung schema:
  - `projectName`;
  - `category`;
  - `role`;
  - `partner`;
  - `period`;
  - `status`;
  - `outputs`;
  - `outcomes`;
  - `evidenceLinks`;
  - `approvedSummary`.
- Nếu chưa có, chỉ gọi là **Projects and Engagements**.

---

### C1-11 — Phân loại project bằng vị trí mảng gây sai nghĩa

**Tệp:** `app/impact/page.tsx`

Code hiện tại:

```ts
const tourismProjects = industryProjects.filter((_, index) =>
  [0, 1, 4, 5, 6].includes(index)
);

const youthProjects = industryProjects.filter((_, index) =>
  [2, 3, 7].includes(index)
);
```

Mục index `7`:

> Responsible Borneo and Sarawak Commitment to Responsible Tourism

được đưa vào nhóm **Youth & responsibility**, dù tên dự án không cho thấy đây là dự án youth.

**Cần sửa:**

- Không phân loại theo index.
- Chuyển `industryProjects` từ `string[]` thành object:

```ts
{
  title,
  category,
  role,
  period,
  partner,
  status,
  evidence
}
```

- Category phải được xác nhận theo từng project.

---

### C1-12 — Event cards gắn cùng một mô tả cho mọi sự kiện

**Tệp:** `app/impact/page.tsx`

Mọi event đều được gắn:

> Research exchange · Community engagement

Nguồn không cung cấp metadata này cho từng event. Một award, conference, experimental tour và community programme không nên dùng cùng một mô tả.

**Cần sửa:** Tạo metadata riêng theo từng event hoặc chỉ hiển thị tên khi chưa có mô tả.

---

### C1-13 — Các statistic dùng ngôn ngữ không chính xác

**Tệp:** `app/impact/page.tsx`

Hiện tại:

- `8+` applied industry projects;
- `9+` research & public events;
- `10` academic affiliations;
- `APAC` primary regional network.

Vấn đề:

- dữ liệu nguồn có đúng 8 industry projects và 9 events, nên dấu `+` không có căn cứ;
- “research & public events” là nhãn mới;
- “primary regional network” là synthesis chưa được xác nhận;
- statistic có thể nhanh chóng lỗi thời.

**Cần sửa:**

- Dùng số chính xác và ghi “records currently listed”.
- Tính số từ data thay vì hard-code.
- Thêm `lastUpdated`.
- Không dùng APAC như KPI.

---

### C1-14 — CV page trộn dữ liệu của CV 2025 với publication data đến 2026

**Tệp:** `app/cv/page.tsx`

Trang ghi:

- CV edition: 2025;
- Publication range: 2012–2026.

Điều này tạo ấn tượng CV 2025 chứa publication records đến 2026. Trong khi publication dataset của website đã có record năm 2026.

**Cần sửa:**

- Nếu `2012–2026` được lấy từ publication catalogue, đổi nhãn thành:
  - `Publication records on this website`;
- hoặc loại bỏ khỏi CV overview.
- Chỉ hiển thị dữ liệu thực sự nằm trong CV 2025 nếu section mang tên CV.

---

### C1-15 — Structured education cần được xác minh trực tiếp từ CV

**Tệp:** `app/cv/page.tsx`

Website tham chiếu chỉ embed và download PDF. Redesign đã chuyển thành dữ liệu có cấu trúc:

- Post-Doctorate — 2016;
- PhD in Marketing — 2010–2014;
- Corporate MBA — 2008–2010;
- Bachelor of Commerce — 1996–1999.

Có thể các thông tin này đúng, nhưng chúng không được lấy từ component nguồn hiển thị; chúng được suy ra từ PDF/extracted text.

**Cần sửa:**

- Kiểm tra từng dòng với bản CV đang được Prof. Hiram xác nhận là mới nhất.
- Thêm `sourcePage`.
- Không tự động gọi bản PDF là “2025” nếu file đã được cập nhật nhưng tên không đổi.
- Kiểm tra privacy trước khi đưa thêm nội dung CV lên HTML.

---

## 3.3. Mức C2 — Rủi ro kỹ thuật và quản trị nội dung

### C2-01 — Publication title được trích xuất bằng regex, có thể hiển thị sai

**Tệp:** `lib/publications.ts`

`extractTitle()` suy luận title từ dấu ngoặc kép hoặc biểu thức chính quy. Điều này có thể sai với:

- citation không dùng quotation marks;
- citation chứa nhiều quoted phrases;
- book chapter;
- conference proceeding;
- title có dấu chấm;
- multilingual title;
- typographic punctuation không đồng nhất.

**Cần sửa:**

- Chuyển mỗi record thành object có các trường đã xác minh:
  - `authors`;
  - `year`;
  - `title`;
  - `venue`;
  - `volume`;
  - `issue`;
  - `pages`;
  - `doi`;
  - `type`;
  - `award`;
  - `sourceCitation`.
- Không dùng parser heuristic làm nguồn hiển thị chính.
- Giữ raw citation để đối chiếu.

---

### C2-02 — `cleanText()` chỉ sửa một phần lỗi encoding

**Tệp:** `lib/publications.ts`, `data/README.md`

Repository đã thừa nhận có mojibake trong dữ liệu lịch sử. Hàm hiện tại chỉ thay một số chuỗi cụ thể.

**Cần sửa:**

- Lập danh sách record có lỗi;
- sửa thủ công theo nguồn;
- không áp dụng replace toàn cục nếu có khả năng làm sai tên riêng;
- lưu `originalText` và `correctedText`;
- thêm trạng thái `editoriallyVerified`.

---

### C2-03 — Navigation data và production navigation không đồng nhất

**Tệp:**

- `data/navigation.ts`
- `components/header.tsx`

`data/navigation.ts` vẫn định nghĩa:

- Affiliations;
- Projects;
- Events;
- News;
- publication subroutes.

Header production lại dùng:

- Profile;
- Research;
- Publications;
- Research Team;
- Impact;
- CV.

Một phần route trong data không tồn tại trong app hiện tại.

**Cần sửa:**

- Chỉ duy trì một navigation source.
- Xác định rõ mapping:
  - Affiliations → Profile;
  - Projects/Events/News → Impact;
- hoặc khôi phục các archive pages.
- Xóa hoặc đánh dấu deprecated data để tránh tạo link 404 trong tương lai.

---

### C2-04 — SEO metadata bị lặp và không đồng nhất

**Tệp:**

- `data/profile.ts`
- `app/layout.tsx`
- `components/footer.tsx`

Ví dụ:

- `data/profile.ts`: “Dr. Hiram Ting”;
- active metadata: “Prof. Dr. Hiram Ting”;
- copyright data cố định 2025;
- footer dùng năm động;
- description ở các nơi nhấn mạnh các lĩnh vực khác nhau.

**Cần sửa:**

- Tạo một metadata source duy nhất.
- Chọn quy tắc tên:
  - `Prof. Dr. Hiram Ting` cho title chính;
  - `Hiram Ting` cho brand ngắn;
  - không luân phiên “Dr.” và “Prof. Dr.” thiếu chủ đích.
- Tạo `lastUpdated`.
- Dùng description đã được phê duyệt.

---

### C2-05 — Tổ chức APU bị rút gọn không nhất quán

**Tệp:** `app/page.tsx`

Home ghi:

> Strategic Research Institute, Asia Pacific University

Nguồn ghi:

> Strategic Research Institute, Asia Pacific University of Technology and Innovation

**Cần sửa:** Dùng tên đầy đủ hoặc abbreviation được xác nhận: `Asia Pacific University of Technology and Innovation (APU)`.

---

### C2-06 — Home previews không được gắn nhãn “selected”

Home chỉ hiển thị:

- 3 publications;
- 4/6 research projects;
- 4/8 industry projects;
- 4 locations/regions;
- 4 recognition summaries.

Nếu không ghi rõ “Selected”, người xem có thể hiểu đó là toàn bộ phạm vi.

**Cần sửa:** Dùng các nhãn:

- Selected publications;
- Selected projects;
- Selected affiliations;
- Selected recognitions.

---

### C2-07 — Claim quan trọng chưa có evidence link

Các claim nổi bật:

- World’s Top 2% Scientists;
- first Emerald Ambassador in East Asia;
- first Malaysian in UNWTO/UN Tourism Panel;
- most cited researcher in Southeast Asia based on Emerald journals, 2019–2024.

Repository tham chiếu có nội dung claim nhưng chưa có evidence field nhất quán.

**Cần sửa:** Mỗi claim cần có source URL, year và wording đã duyệt trước khi đưa vào authority strip hoặc metadata.

---

# 4. Ma trận bảo toàn nội dung

| Nguồn tham chiếu | Vị trí redesign | Tình trạng | Nhận xét |
|---|---|---|---|
| Home biography | `data/profile.ts`, `/profile` | Đã giữ | Có lỗi “Top 2 Scientists” và mâu thuẫn IJTR. |
| Personal motto | `data/profile.ts` | Chưa hiển thị rõ | Footer dùng slogan mới. |
| Contact details | Footer | Đã giữ | Email, phone, address có mặt. |
| Social profiles | Footer/data | Một phần | LinkedIn, Scholar, ResearchGate có; Facebook không nổi bật. |
| Academic affiliations | `/profile` | 10/10 | Nên thêm current/former và period. |
| Professional engagement | `/profile` | 8/8 | Cần xác minh các chức danh hiện hành. |
| Journal editorial | `/profile` | 6/10 | Bốn record còn lại không được hiển thị. |
| Other notable roles | Home strip | Không đầy đủ | Không có section riêng; thiếu năm và evidence. |
| Research projects | `/research` | 6/6 | Tên đã bị rút gọn và tái phân nhóm. |
| Industry projects | `/impact` | 8/8 | Phân loại theo index; thiếu role/outcome/evidence. |
| Events | `/impact` | 9/9 | Gắn mô tả chung không có trong nguồn. |
| News | `/impact` | 6/30 | Cần archive đầy đủ. |
| Journal articles | `/publications` | Được load đầy đủ | Có rủi ro title parser. |
| Books & chapters | `/publications` | Được load | Có rủi ro title parser. |
| Conference proceedings | `/publications` | Được load | Có rủi ro title parser/award parsing. |
| CV PDF | `/cv` | Đã giữ | Structured summary cần kiểm tra. |
| Legacy hidden content | `data/legacyHomepageContent.ts` | Đã lưu | Không nên coi commented records là current facts. |

---

# 5. Đề xuất định vị nội dung mới cho Home

Các nội dung dưới đây là **đề xuất biên tập**, không phải nội dung đã được Prof. Hiram phê duyệt.

## 5.1. Nguyên tắc

Hero cần trả lời bốn câu hỏi:

1. Prof. Hiram là ai?
2. Ông làm việc trong những lĩnh vực nào?
3. Điểm khác biệt của hồ sơ là gì?
4. Người xem nên đi tiếp đến đâu?

Không nên dùng một nhãn duy nhất như “expert in marketing”.

---

## 5.2. Phương án định vị ngắn

### Eyebrow

```text
Professor · Researcher · Editor
```

### Headline

```text
Prof. Dr. Hiram Ting
```

### Summary đề xuất

```text
A scholar working across marketing, consumer behaviour, responsible tourism
and research methods, with academic appointments, editorial leadership and
community-oriented engagement across Asia-Pacific.
```

### Lưu ý

- Không dùng “impact” nếu chưa có outcome evidence.
- Không dùng “expert” nếu Prof. Hiram không muốn tự định danh theo cách này.
- Có thể bổ sung President of REBORN và Chairman of Sarawak Research Society ở authority block thay vì nhồi vào tagline.

---

## 5.3. Phương án định vị đầy đủ hơn

```text
Prof. Dr. Hiram Ting is a professor, researcher and journal editor whose work
connects responsible marketing, consumer behaviour, responsible tourism,
research methodology, youth and community engagement, and cultural and
heritage studies. His portfolio spans academic appointments, editorial
leadership, regional collaboration and applied initiatives across Asia-Pacific.
```

Câu này vẫn cần Prof. Hiram duyệt vì là synthesis từ nhiều nguồn.

---

# 6. Đề xuất cấu trúc Research phù hợp hơn

## 6.1. Sáu research programmes theo repository tham chiếu

1. **Responsible Marketing and Consumerism**
2. **Responsible Tourism in Southeast Asia**
3. **Responsible Food Production, Consumption and Disposition**
4. **Consumer Online and Offline Behaviour**
5. **Youth Behaviour through the Lens of Generation Theories**
6. **Cultural and Heritage Tourism**

Nếu “British Food Journal”, “Journal of Consumer Behaviour” và “Young Consumer” là journal/special-issue context, không nên ghép vào tên programme cho đến khi xác minh. Có thể hiển thị chúng dưới trường `platform`.

---

## 6.2. Research Methods nên là một lớp xuyên suốt

Thay vì thẻ nghiên cứu thứ ba, trình bày thành:

### Cross-cutting methodological expertise

- survey design;
- sampling and sample-size guidance;
- qualitative inquiry;
- PLS-SEM/structural equation modelling;
- mediation and moderation;
- research training and publication development.

Cần liên kết mỗi method với publication tương ứng.

---

## 6.3. Hai trục khác không nên trộn vào research domain

### Academic and editorial leadership

- current academic appointments;
- journal editorial roles;
- research societies;
- regional academic network.

### Projects and engagement

- industry projects;
- events;
- youth programmes;
- responsible tourism initiatives;
- media archive.

Cách này tránh việc một thẻ “Culture, Food & Heritage” phải đại diện cho quá nhiều loại hoạt động khác nhau.

---

# 7. Đề xuất cấu trúc lại Home

1. **Hero — Identity and approved positioning**
2. **Current roles and selected recognitions**
3. **Six research programmes**
4. **Cross-cutting research methods**
5. **Selected publications**
6. **Academic and editorial leadership**
7. **Selected projects and engagements**
8. **Research Team**
   - chỉ hiển thị khi có dữ liệu được xác minh;
9. **Full biography**
10. **Contact and official motto**

---

# 8. Danh sách chỉnh sửa theo tệp

## `data/profile.ts`

- Thay `profession`.
- Sửa “Top 2 Scientists” sau khi xác nhận.
- Đồng bộ chức danh IJTR.
- Tách biography thành các trường có cấu trúc:
  - current roles;
  - academic roles;
  - editorial roles;
  - recognitions;
  - founding roles;
  - research interests.
- Đồng bộ `Dr.` và `Prof. Dr.`.
- Thêm `lastVerifiedAt` và `verifiedBy`.

## `app/page.tsx`

- Thay hero summary.
- Xóa portrait note “Scholar & expert in marketing”.
- Thay bốn research cards bằng sáu programme hoặc cấu trúc được Prof. Hiram duyệt.
- Gắn “Selected” cho publication/project/recognition previews.
- Dùng tên APU đầy đủ.
- Không hard-code recognition thiếu năm/evidence.
- Không dùng generic project impact claims.

## `app/profile/page.tsx`

- Xóa hoặc duyệt lại fact cards.
- Hiển thị đủ 10 editorial records.
- Thêm Other Notable Roles.
- Thêm period và current/former.
- Xử lý mâu thuẫn Associate Editor/Regional Editor.
- Cân nhắc hiển thị official motto.

## `app/research/page.tsx`

- Bỏ tuyên bố “Four interconnected research domains” nếu chưa được phê duyệt.
- Dùng sáu programme từ nguồn.
- Tách Research Methods thành cross-cutting expertise.
- Chỉ hiển thị collaboration opportunities khi đang thực sự mở.
- Liên kết programme với publication/project tương ứng.

## `app/team/page.tsx`

- Ẩn hoặc chuyển sang pending state.
- Xóa “Research Director”.
- Xóa các team categories giả định.
- Xóa active opportunities chưa xác minh.
- Chỉ sử dụng dữ liệu có tên, vai trò và consent.

## `app/impact/page.tsx`

- Không phân loại project bằng index.
- Chuyển project thành object.
- Đổi “Impact” thành “Projects & Engagement” nếu chưa có outcomes.
- Bỏ hard-coded stats hoặc tính từ data.
- Xóa mô tả chung của event.
- Hiển thị toàn bộ news archive hoặc link đến archive page.
- Bổ sung role, partner, period, status và evidence.

## `app/cv/page.tsx`

- Xác minh education trực tiếp với CV mới nhất.
- Bỏ hoặc đổi “Publication range 2012–2026”.
- Không trộn website publication dataset vào CV summary.
- Thêm ngày cập nhật CV.
- Kiểm tra dữ liệu riêng tư.

## `lib/publications.ts`

- Không suy luận title bằng regex cho production.
- Chuyển citation thành structured data.
- Giữ raw citation.
- Thêm DOI/source URL.
- Thêm editorial verification flag.

## `components/header.tsx`

- Quyết định rõ có cần dedicated pages:
  - Affiliations;
  - Projects;
  - Events;
  - News archive.
- Nếu tiếp tục gộp, cần subnavigation và link đến full archive.
- Không để `data/navigation.ts` mô tả route khác với route production.

## `components/footer.tsx`

- Thay slogan bằng message được duyệt.
- Cân nhắc dùng official motto.
- Đồng bộ honorific và metadata.

## `app/layout.tsx`

- Đồng bộ description với approved positioning.
- Không giới hạn SEO keywords vào vài lĩnh vực quá hẹp.
- Thêm evidence-backed structured data sau khi content được xác minh.

---

# 9. Các câu hỏi bắt buộc cần Prof. Hiram xác nhận

1. Chức danh hiện tại tại International Journal of Tourism Research là **Associate Editor** hay **Regional Editor**?
2. Vai trò hiện tại với REBORN là:
   - President of Responsible Borneo;
   - Director of Centre for Responsible Borneo;
   - hay một chức danh khác?
3. Cụm định vị chính thức ông muốn sử dụng là gì?
4. Sáu research projects trong repository còn là các programme hiện hành hay chỉ là archive?
5. Research Methods có nên là một research domain chính hay là năng lực phương pháp xuyên suốt?
6. Những tên nào thuộc Research Team?
7. Prof. Hiram có đang nhận:
   - postgraduate students;
   - collaboration proposals;
   - methods consultation;
   - community projects?
8. Những editorial roles nào hiện tại và roles nào đã kết thúc?
9. Danh hiệu World’s Top 2% Scientists áp dụng cho năm nào?
10. Có được sử dụng claim:
    - first Emerald Ambassador in East Asia;
    - first Malaysian in UN Tourism Panel;
    - most cited researcher in Southeast Asia?
11. Có evidence URL chính thức cho từng recognition không?
12. Có muốn hiển thị đủ 30 news records không?
13. Kênh contact chính nên là email, WhatsApp hay form?
14. Official motto có nên xuất hiện ở footer không?
15. Các thông tin trong CV 2025 đã là bản mới nhất chưa?

---

# 10. Tiêu chí nghiệm thu nội dung

Website chỉ nên được xem là hoàn thiện về nội dung khi đáp ứng đủ:

- [ ] Không có chức danh chưa được xác nhận.
- [ ] Không có team member hoặc team category giả định.
- [ ] Không quảng bá cơ hội chưa thực sự mở.
- [ ] Tất cả dữ liệu nguồn đều truy cập được trên website.
- [ ] Mọi subset đều có nhãn “Selected/Featured/Recent”.
- [ ] Biography, affiliations và editorial roles không mâu thuẫn.
- [ ] “Top 2%” được viết chính xác và có năm.
- [ ] Research taxonomy được Prof. Hiram phê duyệt.
- [ ] Project categories không dựa trên index.
- [ ] “Impact/outcome” chỉ dùng khi có bằng chứng.
- [ ] Publication titles không được suy luận sai bằng regex.
- [ ] News archive có full view.
- [ ] CV summary khớp với PDF mới nhất.
- [ ] SEO, header, footer và profile dùng cùng một định vị.
- [ ] Tất cả recognition quan trọng có evidence.
- [ ] Mỗi nội dung có `lastVerifiedAt`.

---

# 11. Thứ tự triển khai đề xuất

## Giai đoạn 1 — Content correction

1. Xác minh các câu hỏi ở mục 9.
2. Sửa mâu thuẫn biography/editorial/recognition.
3. Thay hero và research taxonomy.
4. Ẩn Research Team chưa xác minh.
5. Xóa unsupported outcomes/opportunities.

## Giai đoạn 2 — Information completeness

1. Khôi phục full news archive.
2. Hiển thị đầy đủ editorial and notable roles.
3. Gắn selected labels.
4. Tạo project/event structured data.
5. Đồng bộ navigation.

## Giai đoạn 3 — Evidence and maintainability

1. Thêm evidence URL.
2. Thêm period/status.
3. Thêm verification metadata.
4. Chuẩn hóa publication records.
5. Xây dựng quy trình cập nhật định kỳ.

---

# 12. Danh sách tệp đã đối chiếu chính

## Repository tham chiếu

- `src/App.tsx`
- `src/pages/Index.tsx`
- `src/pages/Affiliations.tsx`
- `src/pages/Projects.tsx`
- `src/pages/Events.tsx`
- `src/pages/News.tsx`
- `src/pages/Curriculum-Vitae.tsx`
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- các publication pages và dữ liệu thể hiện qua current repository/commit history.

## Repository redesign

- `app/layout.tsx`
- `app/page.tsx`
- `app/profile/page.tsx`
- `app/research/page.tsx`
- `app/publications/page.tsx`
- `app/team/page.tsx`
- `app/impact/page.tsx`
- `app/cv/page.tsx`
- `components/header.tsx`
- `components/footer.tsx`
- `components/ui.tsx`
- `data/profile.ts`
- `data/affiliations.ts`
- `data/projects.ts`
- `data/events.ts`
- `data/news.ts`
- `data/journalArticles.ts`
- `data/booksAndChapters.ts`
- `data/conferenceProceedings.ts`
- `data/cv.ts`
- `data/navigation.ts`
- `data/legacyHomepageContent.ts`
- `lib/publications.ts`

---

# 13. Kết luận cuối

Repository redesign đã làm tốt phần thu thập và chuyển dữ liệu sang cấu trúc có thể tái sử dụng. Tuy nhiên, giao diện production hiện đang vượt khỏi dữ liệu nguồn ở nhiều điểm: tự tạo định vị, tự phân loại lĩnh vực, tự suy ra impact, tự mở rộng collaboration opportunities và tạo Research Team chưa có dữ liệu.

Ưu tiên hiện tại không phải tiếp tục chỉnh visual, mà là:

1. xây dựng một **approved positioning statement**;
2. xác minh các chức danh và recognition;
3. thay taxonomy bốn lĩnh vực bằng cấu trúc phản ánh đúng các programme;
4. loại bỏ dữ liệu placeholder;
5. đảm bảo toàn bộ thông tin cũ vẫn truy cập được;
6. tách rõ fact, synthesis, archive và proposed content.

Sau khi hoàn tất các bước trên, visual system hiện tại có thể được giữ lại và tinh chỉnh mà không cần thiết kế lại toàn bộ.
