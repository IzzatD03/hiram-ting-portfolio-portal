# HIRAM PORTFOLIO — ĐẶC TẢ CẬP NHẬT THEO PHẢN HỒI PROF. DR. HIRAM TING

**Repository:** `nmtrucworking/hiramting-portfolio`  
**Mục tiêu tài liệu:** Đặc tả chi tiết các thay đổi cần thực hiện cho phiên bản tiếp theo của website portfolio Prof. Dr. Hiram Ting, dựa trên phản hồi trực tiếp của Prof. Hiram và cấu trúc repository hiện tại.  
**Phạm vi:** Frontend, Content Architecture, Data Schema, Navigation, UX, Content Update Workflow, Validation và Acceptance Criteria.  
**Trạng thái:** Implementation Specification  
**Nguyên tắc vận hành:** Không tự động tạo PR, commit hoặc push. Tài liệu này chỉ dùng làm đặc tả triển khai.

---

# 1. Bối cảnh và định hướng

Phiên bản hiện tại của website đã chuyển sang kiến trúc content-driven với các nguồn dữ liệu chính nằm trong thư mục `content/`, được đọc qua `src/content/loaders.ts` và kiểm tra bằng Zod schema trong `src/content/schemas.ts`.

Cấu trúc này phù hợp để tiếp tục phát triển. Không cần thay đổi nền tảng hay xây dựng lại toàn bộ hệ thống.

Phản hồi mới của Prof. Hiram cho thấy yêu cầu chính không còn là tăng mức độ trực quan hóa hoặc tạo nhiều thành phần dashboard, mà là:

1. Giảm độ phức tạp của website.
2. Chỉ hiển thị những thông tin thật sự cần thiết.
3. Loại bỏ các số liệu đếm không cần thiết hoặc có nguy cơ sai lệch.
4. Ưu tiên hồ sơ cá nhân, thành tích, affiliations, publications, projects/events, research team và professional links.
5. Đảm bảo nội dung dễ cập nhật theo thời gian.
6. Cho phép bổ sung chi tiết sau, không cố hoàn thiện mọi dữ liệu ở phiên bản hiện tại.
7. Không dùng visualization nếu nguồn dữ liệu chưa đủ chính xác.
8. Đưa các academic/professional profile links lên homepage.
9. Bổ sung Chinese name trên homepage.
10. Không để tên “Hiram Ting” bị xuống dòng xấu trong các heading.

---

# 2. Mục tiêu phiên bản tiếp theo

## 2.1. Mục tiêu nghiệp vụ

Website phải trả lời nhanh các câu hỏi sau:

- Prof. Hiram Ting là ai?
- Hồ sơ và biodata chính là gì?
- Những thành tích nổi bật nào đã được xác nhận?
- Ông đang liên kết với những tổ chức nào?
- Các công bố khoa học chính là gì?
- Các project và event gần đây là gì?
- Research Team gồm những ai?
- Thành viên Research Team đang tham gia project nào?
- Có thể truy cập Google Scholar, ResearchGate, Scopus, Web of Science và các hồ sơ chuyên môn khác ở đâu?

## 2.2. Mục tiêu UX

Người dùng phải hiểu cấu trúc hồ sơ trong vòng khoảng 1–2 phút.

Website không được tạo cảm giác như một dashboard thống kê học thuật.

Trang chủ phải ưu tiên:

1. Identity.
2. Positioning statement.
3. Professional/academic profile links.
4. Selected profile information.
5. Selected affiliations.
6. Latest publications.
7. Projects & Events.
8. Research Team.

## 2.3. Nguyên tắc thiết kế

Thiết kế phải tuân theo:

- Information-first.
- Professional.
- Presentable.
- Simple.
- Không decorative visualization nếu không tạo giá trị thông tin.
- Không sử dụng số liệu “impact” hoặc “record counts” làm điểm nhấn.
- Không lặp cùng một dữ liệu ở nhiều nguồn.
- UI chỉ render dữ liệu từ `content/`.
- Không hard-code dữ liệu cá nhân trực tiếp trong page component.

---

# 3. Phạm vi nội dung chính thức

Phiên bản này lấy 7 nhóm nội dung do Prof. Hiram xác định làm phạm vi chính:

1. **Personal Profile and Biodata**
2. **Personal Achievement**
3. **Affiliations**
4. **Publication**
5. **Projects and Events**
6. **Research Team**
   - profile của research members;
   - biodata;
   - research areas;
   - current projects.
7. **Professional Links**
   - REBORN;
   - SEARA;
   - academic profile links;
   - professional organizations;
   - các hồ sơ liên quan khác.

Các module như statistics, world map, collaboration footprint hoặc impact analytics được xem là **out of scope cho phiên bản hiện tại**, trừ khi sau này có dataset đã được xác minh.

---

# 4. Information Architecture mục tiêu

## 4.1. Primary Navigation

```text
Home
Profile
Achievements
Affiliations
Publications
Projects & Events
Research Team
```

## 4.2. Secondary / Utility Navigation

Các mục sau không cần nằm trong primary navigation:

```text
CV
Research
Contact
Facebook
```

Có thể đặt ở:

- footer;
- profile;
- button;
- utility links.

## 4.3. Route đề xuất

```text
/
├── /profile
├── /achievements
├── /affiliations
├── /publications
├── /impact              # giữ route cũ, đổi label thành Projects & Events
├── /team
├── /research            # giữ route nhưng không ưu tiên trong navigation
└── /cv                  # giữ route dưới dạng utility page
```

Không bắt buộc đổi `/impact` thành `/projects` ở phase hiện tại vì thay route có thể tạo thêm việc xử lý redirect, sitemap và internal links.

---

# 5. Kiến trúc dữ liệu mục tiêu

## 5.1. Cấu trúc thư mục

```text
content/
├── site.json
├── home.json
├── profile.json
├── achievements.json
├── affiliations.json
├── publications.json
├── publications.csv
├── projects.json
├── events.csv
├── research.json
├── team.json
├── news.csv
└── cv.json
```

## 5.2. Asset structure

```text
public/uploads/
├── profile/
├── team/
├── projects/
├── events/
├── brand/
└── documents/
```

## 5.3. Quy tắc Single Source of Truth

| Dữ liệu | Nguồn chính |
|---|---|
| Tên, Chinese name, credentials, biography | `content/profile.json` |
| Navigation, SEO, contact, profile links | `content/site.json` |
| Homepage labels và section configuration | `content/home.json` |
| Personal achievements | `content/achievements.json` |
| Affiliations | `content/affiliations.json` |
| Publications | `content/publications.csv` |
| Projects | `content/projects.json` |
| Events | `content/events.csv` |
| Research Team | `content/team.json` |
| Research programmes | `content/research.json` |
| CV metadata | `content/cv.json` |

Không được nhập lại cùng một publication, affiliation hoặc project trực tiếp trong `app/page.tsx`.

---

# 6. Đặc tả Homepage

## 6.1. Mục tiêu

Homepage là “professional profile landing page”, không phải dashboard.

## 6.2. Section order

```text
Hero
Professional / Academic Profile Links
Profile Preview
Selected Affiliations
Latest Publications
Projects & Events
Research Team
Contact
```

## 6.3. Hero

### Bắt buộc hiển thị

```text
Prof. Dr. Hiram Ting 陈芳尧教授
B.COM · MBA · PhD

A Sarawakian and Global Citizen Driven by
Passion, Value and Responsibility
```

### Không hiển thị

```text
Academic Portfolio
```

### Không hiển thị dưới dạng statistic

```text
Research programmes listed
Publications listed
Academic appointments listed
Media records listed
```

### Không hiển thị

Global network visualization nếu dữ liệu chưa xác minh.

## 6.4. Profile links trong Hero

Các link được xác minh có thể gồm:

- My Website
- Google Scholar
- ResearchGate
- LinkedIn
- Scopus
- Clarivate Web of Science
- World's Top 2% Scientists
- World's Top 5% Scientists

Các URL chưa được xác minh không được tự suy đoán.

### Render rule

- Text link phải nhìn thấy rõ.
- Không chỉ dùng icon.
- `target="_blank"`.
- `rel="noreferrer"`.
- Có thể wrap thành nhiều dòng.
- Ưu tiên academic profile links trước Facebook.

## 6.5. Profile Preview

Nội dung:

- 1 đoạn biodata ngắn.
- CTA `View Profile`.

Không cần statistics.

## 6.6. Selected Affiliations

Hiển thị khoảng 4–6 affiliations đã xác minh.

Không dùng bản đồ.

Ví dụ format:

```text
President
Responsible Borneo (REBORN)

Founding Director
Southeast Asia Research Academy (SEARA)

Professor
Asia Pacific University of Technology and Innovation
```

CTA:

```text
View Affiliations
```

## 6.7. Latest Publications

Giữ logic hiện tại:

- lấy từ `content/publications.csv`;
- sort descending theo year;
- giới hạn khoảng 3 records trên homepage.

Không hiển thị count tổng số publications.

## 6.8. Projects & Events

Hiển thị hình ảnh nếu có.

Card gồm:

```text
Image
Title
Date/Period
Short summary
View Details / Source
```

Không cần đánh số card `01`, `02` nếu không có giá trị nghiệp vụ.

## 6.9. Research Team

Hiển thị tối đa khoảng 3–4 thành viên trên homepage.

Card gồm:

```text
Portrait
Name
Role
Affiliation
Research areas
```

CTA:

```text
Meet the Research Team
```

## 6.10. Contact

Tên phải giữ trên một cụm không bị ngắt giữa `Hiram` và `Ting`.

Ví dụ:

```text
Contact Prof. Dr. Hiram Ting
```

CSS hoặc markup phải đảm bảo `Hiram Ting` không bị tách dòng.

---

# 7. Thay đổi `content/home.json`

## 7.1. Hero eyebrow

Hiện tại:

```json
"eyebrow": {
  "text": "Academic Portfolio",
  "status": "approved"
}
```

Target:

```json
"eyebrow": {
  "text": "Academic Portfolio",
  "status": "archived"
}
```

Không để chuỗi rỗng nếu schema vẫn yêu cầu `managedCopy`.

## 7.2. Hero summary

Target:

```json
"summary": {
  "text": "A Sarawakian and Global Citizen Driven by Passion, Value and Responsibility",
  "status": "approved"
}
```

## 7.3. Affiliations title

Target:

```json
"affiliations": {
  "eyebrow": "Affiliations",
  "title": "Selected Affiliations"
}
```

## 7.4. Projects

Target label:

```json
"projects": {
  "eyebrow": "Projects & Events",
  "title": "Selected Projects & Events"
}
```

---

# 8. Thay đổi `content/profile.json`

## 8.1. Mở rộng model

Target:

```json
{
  "page": {
    "eyebrow": "Profile",
    "title": "Personal Profile & Biodata",
    "description": {
      "text": "",
      "status": "approved"
    }
  },
  "name": "Hiram Ting",
  "displayName": "Prof. Dr. Hiram Ting",
  "chineseName": "陈芳尧教授",
  "credentials": [
    "B.COM",
    "MBA",
    "PhD"
  ],
  "profession": {
    "text": "",
    "status": "draft"
  },
  "biography": {
    "text": "...",
    "status": "approved"
  },
  "portrait": "/uploads/profile/hiram-ting-main.png",
  "portraitAlt": "Prof. Dr. Hiram Ting"
}
```

## 8.2. Schema requirement

Trong `profileSchema` bổ sung:

```ts
chineseName: z.string().min(1),
credentials: z.array(z.string().min(1)),
```

## 8.3. Rendering

Profile page phải hiển thị:

```text
Prof. Dr. Hiram Ting
陈芳尧教授
B.COM · MBA · PhD
Biography
```

Không hiển thị affiliation counts.

---

# 9. Personal Achievements

## 9.1. Lý do tạo module riêng

`recognitions` trong `affiliations.json` không đồng nghĩa hoàn toàn với Personal Achievements.

Vì vậy cần module riêng.

## 9.2. File mới

```text
content/achievements.json
```

## 9.3. Schema

```ts
export const achievementsSchema = z.object({
  page: pageSchema,
  items: z.array(
    z.object({
      id: z.string().min(1),
      title: z.string().min(1),
      organization: z.string(),
      year: z.string(),
      description: managedCopySchema,
      url: optionalUrlSchema,
      image: z.union([z.literal(""), assetPathSchema]),
      featured: z.boolean(),
      visible: z.boolean(),
      status: recordStatusSchema,
    })
  ),
});
```

## 9.4. Example data

```json
{
  "page": {
    "eyebrow": "Achievements",
    "title": "Personal Achievements",
    "description": {
      "text": "",
      "status": "approved"
    }
  },
  "items": []
}
```

## 9.5. Loader

```ts
export function getAchievements() {
  const content = loadJson("achievements.json", achievementsSchema);

  return {
    ...content,
    items: content.items.filter(isPublished),
  };
}
```

## 9.6. Route

```text
app/achievements/page.tsx
```

## 9.7. Acceptance rule

Không tự động chuyển tất cả `recognitions` sang achievements.

Chỉ migrate dữ liệu sau khi xác định đó là thành tích cá nhân phù hợp.

---

# 10. Affiliations

## 10.1. Mục tiêu

Tách các professional/academic/editorial roles ra khỏi `/profile`.

## 10.2. Route mới

```text
app/affiliations/page.tsx
```

## 10.3. Nội dung

```text
Affiliations

Academic Appointments
Professional Roles
Editorial Roles
Other Professional Affiliations
```

## 10.4. Data

Tiếp tục dùng:

```text
content/affiliations.json
```

## 10.5. Mở rộng schema

Bổ sung URL:

```ts
url: optionalUrlSchema,
```

cho mỗi affiliation item.

Ví dụ:

```json
{
  "id": "reborn-president",
  "title": "President",
  "organization": "Responsible Borneo (REBORN)",
  "location": "Malaysia",
  "period": "",
  "url": "https://...",
  "featured": true,
  "visible": true,
  "status": "published"
}
```

## 10.6. Không hiển thị

- count số academic appointments;
- count số professional roles;
- count số editorial roles.

---

# 11. Publications

## 11.1. Giữ kiến trúc hiện tại

`content/publications.csv` tiếp tục là nguồn chính.

## 11.2. Các field bắt buộc

```text
id
type
year
title
citation
url
featured
visible
status
editoriallyVerified
```

## 11.3. Homepage

- chỉ hiển thị 3 latest hoặc featured records;
- không hiển thị total publication count.

## 11.4. Publications page

Có thể giữ search/filter hiện tại.

Không cần thêm analytics hoặc summary counters.

---

# 12. Projects & Events

## 12.1. Label

Đổi UI label:

```text
Projects & Engagement
```

thành:

```text
Projects & Events
```

## 12.2. Route

Giữ:

```text
/impact
```

ở phase này.

## 12.3. Project schema

Bổ sung:

```ts
image: z.union([z.literal(""), assetPathSchema]),
```

## 12.4. Example

```json
{
  "id": "project-001",
  "title": "Project Name",
  "summary": {
    "text": "Short summary",
    "status": "approved"
  },
  "category": "",
  "role": "",
  "partner": "",
  "period": "",
  "evidence": "",
  "image": "/uploads/projects/project-001.webp",
  "featured": true,
  "visible": true,
  "status": "published"
}
```

## 12.5. Event schema

Bổ sung:

```ts
image: z.union([z.literal(""), assetPathSchema]),
```

## 12.6. CSV target

```csv
id,date,displayDate,title,scope,url,image,featured,visible,status
```

## 12.7. UI

Project/Event card:

```text
Image
Title
Period / Date
Summary
Source
```

Không render count statistics ở đầu hoặc giữa page.

---

# 13. Research Team

## 13.1. Trạng thái hiện tại

`content/team.json` đã tồn tại nhưng:

```json
"enabled": false,
"members": []
```

Module cần được mở rộng trước khi bật chính thức.

## 13.2. Requirement

Mỗi research member phải hỗ trợ:

```text
Name
Role
Affiliation
Biodata
Research areas
Current projects
Image
```

## 13.3. Team schema target

```ts
export const teamSchema = z.object({
  enabled: z.boolean(),
  page: pageSchema,
  members: z.array(
    z.object({
      id: z.string().min(1),
      name: z.string().min(1),
      role: z.string().min(1),
      affiliation: z.string(),
      bio: managedCopySchema,
      areas: z.array(z.string()),
      projectIds: z.array(z.string()),
      image: z.union([z.literal(""), assetPathSchema]),
      visible: z.boolean(),
      status: recordStatusSchema,
    })
  ),
});
```

## 13.4. Referential relation với Projects

Không lưu lại tên project bằng text trong member.

Dùng:

```json
"projectIds": [
  "project-001",
  "project-003"
]
```

Sau đó resolve bằng `getProjects()`.

## 13.5. Suggested loader

```ts
export function getTeamWithProjects() {
  const team = getTeam();
  const projects = getProjects().items;

  return {
    ...team,
    members: team.members.map((member) => ({
      ...member,
      currentProjects: member.projectIds
        .map((id) => projects.find((project) => project.id === id))
        .filter(Boolean),
    })),
  };
}
```

## 13.6. UI

Desktop card:

```text
[Portrait]

Name
Role
Affiliation

Short biodata

Research Areas
• ...
• ...

Current Projects
• ...
• ...
```

## 13.7. Images

Nếu `image === ""`:

- dùng placeholder trung tính;
- không crash;
- không hiển thị broken image.

---

# 14. Professional & Academic Links

## 14.1. Phân loại

### Group A — Academic/Profile Links

```text
Google Scholar
ResearchGate
LinkedIn
Scopus
Clarivate Web of Science
World's Top 2% Scientists
World's Top 5% Scientists
```

### Group B — Professional Organization Links

```text
REBORN
SEARA
Sarawak Research Society
other organizations
```

## 14.2. `site.json`

Tiếp tục dùng `socialLinks` cho Group A.

Có thể đổi tên schema sau này thành `profileLinks`, nhưng không bắt buộc trong phase hiện tại.

## 14.3. URL rule

Không được:

- đoán Scopus Author ID;
- đoán Clarivate profile;
- tự ghép URL nếu chưa xác minh.

Nếu URL chưa chắc chắn:

```json
"visible": false
```

cho đến khi xác minh.

## 14.4. Homepage

Render Group A ngay dưới hero identity.

## 14.5. Affiliations page

Render Group B tại từng organization hoặc một block `Professional Links`.

---

# 15. `site.json`

## 15.1. Identity

Target:

```json
"identity": {
  "shortName": "Hiram Ting",
  "displayName": "Prof. Dr. Hiram Ting",
  "portfolioLabel": "Portfolio"
}
```

## 15.2. SEO

Target:

```json
"seo": {
  "title": "Prof. Dr. Hiram Ting | Portfolio",
  "description": "Professional portfolio of Prof. Dr. Hiram Ting.",
  "canonicalUrl": "https://hiramting.nguyenminhtruc.site",
  "socialImage": "/uploads/brand/hiram-ting-social.png",
  "keywords": [
    "Hiram Ting",
    "research",
    "publications",
    "consumer behaviour",
    "responsible tourism"
  ]
}
```

Không ưu tiên keyword `academic portfolio`.

## 15.3. Navigation

Target:

```json
"navigation": [
  { "label": "Home", "href": "/", "visible": true },
  { "label": "Profile", "href": "/profile", "visible": true },
  { "label": "Achievements", "href": "/achievements", "visible": true },
  { "label": "Affiliations", "href": "/affiliations", "visible": true },
  { "label": "Publications", "href": "/publications", "visible": true },
  { "label": "Projects & Events", "href": "/impact", "visible": true },
  { "label": "Research Team", "href": "/team", "visible": true },
  { "label": "Research", "href": "/research", "visible": false },
  { "label": "CV", "href": "/cv", "visible": false }
]
```

---

# 16. Loại bỏ Statistics

## 16.1. Homepage

Xóa:

```ts
import { getHomeStatistics } from "@/src/content/statistics";
```

Xóa:

```ts
const statistics = getHomeStatistics();
```

Xóa toàn bộ `authority-strip`.

## 16.2. Profile

Xóa `fact-grid` đếm:

- Academic Appointments
- Professional Roles
- Editorial Roles
- Recognitions

## 16.3. Projects & Events

Xóa:

```ts
getEngagementStatistics()
```

và `stats-grid`.

## 16.4. CV

Xóa hoặc giảm phụ thuộc vào `getCvStatistics()`.

CV nên ưu tiên:

- document download;
- profile links;
- record navigation;

không dùng các count làm nội dung chính.

## 16.5. `statistics.ts`

Phase đầu:

- có thể giữ file nhưng không import.

Phase cleanup:

- xóa nếu không còn consumer.

---

# 17. Loại bỏ Global Network Visualization

Trong homepage hiện tại có network/globe visualization.

Target:

- bỏ `Globe2`;
- bỏ `.network-art`;
- bỏ network dots;
- giữ danh sách affiliations.

Không thay bằng visualization mới.

---

# 18. Quy tắc Typography và Name Wrapping

## 18.1. Yêu cầu

Không để:

```text
Prof. Dr. Hiram
Ting
```

nếu có thể tránh.

## 18.2. Utility class

```css
.nowrap {
  white-space: nowrap;
}
```

## 18.3. Hero

Có thể render:

```tsx
<h1 className="hero-title">
  <span className="nowrap">{profile.displayName}</span>
  <span className="hero-chinese-name">{profile.chineseName}</span>
</h1>
```

## 18.4. Contact CTA

```tsx
<h2>
  Contact Prof. Dr. <span className="nowrap">Hiram Ting</span>
</h2>
```

## 18.5. Responsive rule

Không dùng `white-space: nowrap` cho toàn bộ câu dài.

Chỉ áp dụng cho identity hoặc cụm tên.

---

# 19. UI Style Rules

## 19.1. Cards

Giảm số lượng border.

Ưu tiên:

- whitespace;
- typography hierarchy;
- subtle background;
- image hierarchy.

## 19.2. Không dùng số thứ tự trang trí

Ví dụ:

```text
01
02
03
```

trên project cards không cần thiết nếu không mang ý nghĩa.

## 19.3. Không dùng dashboard pattern

Tránh:

- stat cards;
- KPI strips;
- circular metrics;
- chart-like decoration.

## 19.4. Images

Dùng ảnh chủ yếu ở:

- Projects & Events;
- Research Team.

Profile portrait được giữ.

---

# 20. Loader Architecture

Tiếp tục dùng:

```ts
loadJson()
loadCsv()
approvedText()
isPublished()
```

## 20.1. Functions cần thêm

```ts
getAchievements()
getTeamWithProjects()
```

Có thể thêm:

```ts
getFeaturedAchievements()
getFeaturedTeamMembers()
```

## 20.2. Home loader helpers

Đề xuất:

```ts
export const getFeaturedAchievements = (limit: number) =>
  getAchievements().items
    .filter((item) => item.featured)
    .slice(0, limit);

export const getFeaturedTeamMembers = (limit: number) =>
  getTeam().members.slice(0, limit);
```

---

# 21. Validation Rules

## 21.1. Chung

Mỗi build phải kiểm tra:

- JSON parse được;
- CSV UTF-8;
- Zod schema pass;
- ID không trùng;
- URL hợp lệ;
- asset tồn tại;
- `featured=true` không đi với `visible=false`;
- `visible=true` phải có `status="published"`.

## 21.2. Profile

- `displayName` bắt buộc;
- `chineseName` bắt buộc;
- credentials ít nhất 1 item;
- portrait phải tồn tại.

## 21.3. Achievements

- title bắt buộc;
- nếu visible thì status phải published;
- URL được phép để rỗng;
- image được phép để rỗng.

## 21.4. Affiliations

- organization bắt buộc;
- title bắt buộc nếu published;
- URL optional;
- không render count.

## 21.5. Team

- name bắt buộc;
- role bắt buộc;
- affiliation có thể rỗng;
- bio có thể rỗng nếu `status=draft`;
- `projectIds` phải resolve được.

Nên bổ sung validation cross-reference:

```text
Nếu team.member.projectIds chứa ID không tồn tại trong projects.json
→ fail validation.
```

## 21.6. Projects / Events

- image optional;
- nếu image tồn tại phải nằm dưới `/uploads/`;
- event date phải đúng ISO nếu không để rỗng.

---

# 22. Content Update Workflow

## 22.1. Nguồn đầu vào

Thông tin có thể đến từ:

- Facebook;
- Google;
- WhatsApp;
- email;
- official organization pages;
- publication database;
- trực tiếp từ Prof. Hiram.

## 22.2. Trạng thái dữ liệu

Mọi nội dung mới nên đi qua:

```text
Candidate
↓
Verification
↓
Approved
↓
Published
```

## 22.3. Không tự động publish từ social media

Không triển khai:

```text
Facebook post
→ auto publish website
```

Thay vào đó:

```text
Facebook post
→ candidate record
→ human review
→ content file
→ website
```

## 22.4. Mapping nguồn → file

| Nội dung mới | File |
|---|---|
| Biodata | `content/profile.json` |
| Achievement | `content/achievements.json` |
| Role/Affiliation | `content/affiliations.json` |
| Publication | `content/publications.csv` |
| Project | `content/projects.json` |
| Event | `content/events.csv` |
| Research member | `content/team.json` |
| Academic profile link | `content/site.json` |
| CV | `public/uploads/documents/` + `content/cv.json` |

---

# 23. Asset Naming

## 23.1. Rule

Chỉ dùng:

```text
lowercase
kebab-case
không dấu cách
không ký tự đặc biệt
```

## 23.2. Ví dụ đúng

```text
hiram-ting-main.webp
research-team-john-doe.webp
reborn-event-2026.webp
project-tourism-2026.webp
```

## 23.3. Ví dụ không dùng

```text
Final.png
Dr_Hiram_2.png
new photo.jpg
latest-final-2.webp
```

---

# 24. Implementation Plan

## Phase 0 — Backup & Baseline

- ghi nhận current commit;
- chạy `npm run check`;
- ghi lại route đang hoạt động;
- chụp screenshot homepage/profile/impact.

Không thay đổi dữ liệu trong bước này.

## Phase 1 — Homepage simplification

Thực hiện:

- bỏ Academic Portfolio;
- sửa tagline;
- Chinese name;
- credentials;
- profile links;
- bỏ statistics;
- bỏ globe;
- sửa name wrapping.

### Acceptance

Homepage không còn counter hoặc globe.

## Phase 2 — Information Architecture

Thực hiện:

- thêm Achievements;
- thêm Affiliations route;
- cập nhật navigation;
- giữ Research/CV dưới utility.

## Phase 3 — Team

Thực hiện:

- mở rộng schema;
- thêm biodata;
- thêm affiliation;
- thêm current projects;
- render image;
- bật `/team` khi có dữ liệu.

## Phase 4 — Projects & Events

Thực hiện:

- đổi label;
- thêm image;
- bỏ engagement statistics.

## Phase 5 — Content QA

- xác minh các link;
- xác minh affiliation titles;
- xác minh achievements;
- xác minh team data;
- chạy validation.

## Phase 6 — Cleanup

- xóa dead statistics imports;
- xóa globe CSS;
- xóa unused classes;
- cập nhật sitemap;
- cập nhật docs.

---

# 25. File-by-file Change List

## `content/home.json`

- archive `Academic Portfolio`;
- update tagline;
- update section labels.

## `content/profile.json`

- add `chineseName`;
- add `credentials`;
- update page title.

## `content/site.json`

- portfolio label;
- SEO;
- academic links;
- navigation.

## `content/achievements.json`

- new file.

## `content/affiliations.json`

- add optional URL;
- review featured items.

## `content/projects.json`

- add image.

## `content/events.csv`

- add image column.

## `content/team.json`

- add new member fields;
- eventually `enabled=true`.

## `src/content/schemas.ts`

- extend profile schema;
- add achievements schema;
- extend affiliation schema;
- extend projects schema;
- extend event schema;
- extend team schema.

## `src/content/loaders.ts`

- `getAchievements()`;
- `getTeamWithProjects()`;
- featured helpers.

## `src/content/types.ts`

- import achievements schema;
- add `AchievementsContent`.

## `app/page.tsx`

- remove statistics;
- remove globe;
- render Chinese name;
- render credentials;
- render profile links;
- render simplified affiliations;
- add team preview.

## `app/profile/page.tsx`

- remove counters;
- remove affiliation sections;
- retain biodata/profile identity.

## `app/affiliations/page.tsx`

- new page.

## `app/achievements/page.tsx`

- new page.

## `app/team/page.tsx`

- render image;
- render bio;
- render affiliation;
- render current projects.

## `app/impact/page.tsx`

- remove statistics;
- add images;
- update wording.

## `components/ui.tsx`

- adjust CTA name wrapping if necessary.

## `app/globals.css`

- remove network visualization styles;
- remove obsolete statistics styles when unused;
- add `.nowrap`;
- add team/project image styles.

## `app/sitemap.ts`

- add `/achievements`;
- add `/affiliations`;
- retain `/team`.

---

# 26. Acceptance Criteria

## AC-01 — Hero Identity

**Given** user opens homepage  
**Then** page shows:

```text
Prof. Dr. Hiram Ting
陈芳尧教授
```

và Chinese name nằm trên homepage.

## AC-02 — Tagline

Homepage hiển thị chính xác:

```text
A Sarawakian and Global Citizen Driven by Passion, Value and Responsibility
```

## AC-03 — No Academic label

Homepage không hiển thị `Academic Portfolio`.

## AC-04 — No counts

Không có:

- publication count;
- appointment count;
- professional role count;
- media count;
- project count.

## AC-05 — No global visualization

Homepage không hiển thị globe/network map.

## AC-06 — Professional links

Homepage có các link đã được xác minh:

- Google Scholar;
- ResearchGate;
- LinkedIn;
- các link khác khi có dữ liệu.

## AC-07 — Name wrapping

Không xuất hiện tình trạng:

```text
Hiram
Ting
```

trong hero hoặc CTA ở viewport phổ biến.

## AC-08 — Profile

Profile page chỉ tập trung vào Personal Profile & Biodata.

## AC-09 — Affiliations

Có route `/affiliations` và hiển thị:

- Academic Appointments;
- Professional Roles;
- Editorial Roles.

## AC-10 — Achievements

Có route `/achievements`.

Nếu chưa có data:

- page có thể hiển thị trạng thái trống có kiểm soát;
- không tạo dữ liệu giả.

## AC-11 — Projects & Events

Primary navigation hiển thị `Projects & Events`.

## AC-12 — Team

Research Team page hỗ trợ:

- portrait;
- name;
- role;
- affiliation;
- biodata;
- areas;
- current projects.

## AC-13 — Data safety

Không có nội dung mới được publish nếu:

- URL chưa xác minh;
- role chưa xác minh;
- achievement chưa xác minh.

## AC-14 — Build

```bash
npm run check
```

phải pass.

---

# 27. Test Checklist

## Desktop

- 1440px
- 1280px
- 1024px

Kiểm tra:

- hero alignment;
- Chinese characters;
- link wrapping;
- contact name;
- team images;
- project images.

## Tablet

- 768px

Kiểm tra:

- nav;
- hero;
- profile links;
- selected affiliations;
- team cards.

## Mobile

- 390px
- 360px

Kiểm tra:

- Hiram Ting không bị tách sai;
- Chinese name không overflow;
- link list wrap hợp lý;
- không horizontal scroll;
- card images đúng aspect ratio.

---

# 28. Build & Validation Commands

Sau khi implementation:

```bash
npm run validate:content
npm run check:assets
npm run lint
npm run typecheck
npm run build
```

Hoặc:

```bash
npm run check
```

Không deploy nếu một bước fail.

---

# 29. Definition of Done

Phiên bản được xem là hoàn tất khi:

- Homepage đã đơn giản hóa.
- Không còn Academic Portfolio label trên homepage.
- Tagline đúng phản hồi.
- Chinese name xuất hiện.
- Professional profile links xuất hiện.
- Không còn statistics trên các page chính.
- Không còn globe visualization.
- Profile/Biodata được tách rõ.
- Achievements route tồn tại.
- Affiliations route tồn tại.
- Research Team model hỗ trợ current projects.
- Projects & Events hỗ trợ images.
- Navigation đúng phạm vi mới.
- `npm run check` pass.
- Không có dữ liệu chưa xác minh được tự động hiển thị.
- Không có commit/PR/push được tạo tự động ngoài quy trình người vận hành phê duyệt.

---

# 30. Ghi chú triển khai

## 30.1. Không over-engineer

Không cần xây CMS ở phase này.

Cơ chế Git-based content management hiện tại là đủ nếu:

- content được giữ ngoài React component;
- validation chặt;
- workflow cập nhật rõ ràng.

## 30.2. Không ưu tiên automation Facebook

Việc theo dõi Facebook nên được xem là quy trình thu thập candidate information.

Không xem Facebook là nguồn SSOT.

## 30.3. Ưu tiên accuracy hơn completeness

Nếu một field chưa chắc chắn:

- để draft;
- để invisible;
- hoặc để trống nếu schema cho phép.

Không điền bằng suy luận.

## 30.4. Future phase

Sau khi dữ liệu ổn định mới xem xét:

- global collaboration map;
- impact visualization;
- timeline visualization;
- automated content intake;
- lightweight admin CMS.

Các phần này không thuộc phạm vi bản cập nhật hiện tại.
