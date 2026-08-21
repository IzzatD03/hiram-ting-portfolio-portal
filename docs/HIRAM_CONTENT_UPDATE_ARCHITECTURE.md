# Định hướng cơ chế cập nhật nội dung thủ công  
## Prof. Dr. Hiram Ting Academic Portfolio

**Repository:** `nmtrucworking/hiramting-portfolio`  
**Mục tiêu:** Cho phép cập nhật nội dung bằng giao diện GitHub, không cần CMS, cơ sở dữ liệu hoặc người vận hành phải chỉnh sửa component React/Next.js.

---

## 1. Kết luận đề xuất

Với ngân sách triển khai thấp và yêu cầu “update content from time to time”, phương án phù hợp là:

1. Tách toàn bộ nội dung có khả năng thay đổi khỏi mã giao diện.
2. Lưu dữ liệu trong thư mục `content/` bằng:
   - JSON cho dữ liệu cấu trúc và nội dung trang;
   - CSV UTF-8 cho danh sách dài như publications, news, events;
   - file ảnh/PDF trong `public/uploads/`.
3. Mọi trang chỉ đọc dữ liệu thông qua một lớp `content loader`.
4. Dùng schema để kiểm tra dữ liệu trước khi build.
5. Người vận hành upload hoặc thay file trên GitHub.
6. GitHub Actions tự động chạy validate, lint, type-check và build.
7. Chỉ merge/deploy khi toàn bộ kiểm tra đạt yêu cầu.

Đây là cơ chế **Git-based content management**, không phải CMS. Nó phù hợp với website học thuật có tần suất cập nhật thấp hoặc trung bình.

---

## 2. Đánh giá cấu trúc hiện tại

### Điểm phù hợp

- Dự án sử dụng Next.js, React và TypeScript.
- Một phần nội dung đã được tách vào `data/`.
- Ảnh và PDF được lưu trong `public/`.
- Các nhóm dữ liệu chính đã tồn tại: profile, affiliations, publications, projects, events, news, CV.

### Vấn đề cần xử lý

#### 2.1. Dữ liệu đang dùng file TypeScript

Các file như:

- `data/profile.ts`
- `data/news.ts`
- `data/events.ts`
- `data/booksAndChapters.ts`
- `data/journalArticles.ts`

đều yêu cầu người cập nhật giữ đúng cú pháp TypeScript: dấu phẩy, dấu ngoặc, dấu nháy, `export const`, `as const`.

Đây không phải định dạng phù hợp cho người chỉ cập nhật nội dung.

#### 2.2. Nội dung vẫn bị hard-code trong component

Các trang như:

- `app/page.tsx`
- `app/research/page.tsx`
- `app/team/page.tsx`

đang chứa trực tiếp:

- tiêu đề;
- mô tả;
- research areas;
- selected publications;
- recognitions;
- network countries;
- opportunities;
- team structure;
- project previews.

Do đó, thay file trong `data/` chưa thể cập nhật toàn bộ website.

#### 2.3. Dữ liệu publication chưa thống nhất

Publication hiện được chia thành nhiều cấu trúc:

- journal articles: chuỗi citation;
- books and chapters: object có `index` và `citation`;
- conference proceedings: cấu trúc khác;
- title và year được suy luận từ citation bằng regular expression.

Cách này có thể lỗi khi:

- citation không có năm theo mẫu chuẩn;
- tên bài không dùng quotation marks;
- nội dung chứa ký tự Unicode không chuẩn;
- định dạng citation thay đổi.

#### 2.4. Có dữ liệu trùng lặp

Ví dụ:

- thông tin Hiram Ting xuất hiện trong `profile.ts` nhưng home page vẫn ghi trực tiếp;
- research areas xuất hiện ở home và research page dưới hai mảng riêng;
- selected publications được nhập trực tiếp ở home dù đã có publication dataset;
- project list xuất hiện ở data và đồng thời được viết trực tiếp tại home.

Khi cập nhật, một nơi thay đổi nhưng nơi khác có thể vẫn giữ dữ liệu cũ.

#### 2.5. Asset naming chưa chuẩn hóa

Các file hiện dùng đường dẫn như:

- `/lovable-uploads/dr_hiram.png`
- `/lovable-uploads/Dr_Hiram_Ting.png`
- `/lovable-uploads/dr_hiram_crop3.png`
- `/cv/HiramTing-CV2025.pdf`

Tên file chứa khác biệt viết hoa, số phiên bản và dấu cách ở một số asset lưu trữ. Điều này làm tăng khả năng chọn nhầm file hoặc làm hỏng đường dẫn.

#### 2.6. Chưa có content validation riêng

Các script hiện tại chỉ gồm:

- `dev`
- `build`
- `start`
- `lint`

Chưa có:

- `validate:content`;
- `typecheck`;
- kiểm tra file ảnh/PDF tồn tại;
- kiểm tra ID trùng;
- kiểm tra URL;
- kiểm tra date;
- kiểm tra publication bắt buộc có title/year/type.

---

## 3. Kiến trúc thư mục đề xuất

```text
hiramting-portfolio/
├─ app/
│  ├─ page.tsx
│  ├─ profile/page.tsx
│  ├─ research/page.tsx
│  ├─ publications/page.tsx
│  ├─ team/page.tsx
│  ├─ impact/page.tsx
│  └─ cv/page.tsx
│
├─ content/
│  ├─ site.json
│  ├─ profile.json
│  ├─ home.json
│  ├─ research.json
│  ├─ team.json
│  ├─ affiliations.json
│  ├─ projects.json
│  ├─ publications.csv
│  ├─ events.csv
│  └─ news.csv
│
├─ public/
│  └─ uploads/
│     ├─ profile/
│     │  └─ hiram-ting-main.webp
│     ├─ team/
│     ├─ projects/
│     ├─ news/
│     └─ documents/
│        └─ hiram-ting-cv.pdf
│
├─ src/
│  └─ content/
│     ├─ schemas.ts
│     ├─ loaders.ts
│     ├─ normalize.ts
│     └─ types.ts
│
├─ scripts/
│  ├─ validate-content.ts
│  └─ check-assets.ts
│
├─ docs/
│  ├─ CONTENT_UPDATE_GUIDE.md
│  ├─ CONTENT_FIELDS.md
│  └─ TROUBLESHOOTING.md
│
└─ .github/
   └─ workflows/
      └─ content-check.yml
```

---

## 4. Phân loại định dạng dữ liệu

### 4.1. JSON cho nội dung trang

Dùng JSON cho:

- profile;
- biography;
- research areas;
- team structure;
- affiliations;
- projects;
- home page labels;
- SEO;
- contact information.

Ví dụ `content/profile.json`:

```json
{
  "name": "Hiram Ting",
  "displayName": "Prof. Dr. Hiram Ting",
  "profession": "Scholar & Expert in Marketing",
  "biography": "Biography content...",
  "contact": {
    "email": "hiramparousia@gmail.com",
    "phone": "+60183653472"
  },
  "portrait": "/uploads/profile/hiram-ting-main.webp"
}
```

### 4.2. CSV cho danh sách lớn

Dùng CSV UTF-8 cho:

- publications;
- news;
- events.

Ví dụ `content/publications.csv`:

```csv
id,type,year,title,citation,url,featured,visible
pub-2026-001,journal,2026,"Article title","Full citation","https://doi.org/...",true,true
```

Trường bắt buộc:

| Trường | Ý nghĩa |
|---|---|
| `id` | Mã duy nhất, không đổi sau khi đã công bố |
| `type` | `journal`, `book`, `chapter`, `conference` |
| `year` | Năm xuất bản |
| `title` | Tên công trình |
| `citation` | Citation đầy đủ |
| `url` | DOI hoặc nguồn chính thức |
| `featured` | Có hiển thị tại home hay không |
| `visible` | Có công khai hay không |

Không tiếp tục suy luận title và year từ citation. Các giá trị này phải được nhập thành cột riêng.

### 4.3. Markdown chỉ dùng khi có bài viết dài

Markdown phù hợp nếu sau này website có:

- bài viết;
- project case study;
- news detail page;
- research story.

Không nên dùng Markdown cho dữ liệu bảng lớn.

---

## 5. Nguyên tắc nguồn dữ liệu duy nhất

Mỗi thông tin chỉ có **một nguồn chính thức**.

| Nội dung | Nguồn duy nhất |
|---|---|
| Tên, chức danh, biography | `content/profile.json` |
| Research areas | `content/research.json` |
| Publications | `content/publications.csv` |
| Team members | `content/team.json` |
| Projects | `content/projects.json` |
| Events | `content/events.csv` |
| News | `content/news.csv` |
| CV | `public/uploads/documents/hiram-ting-cv.pdf` |
| Contact/SEO | `content/site.json` hoặc `profile.json` |

Home page phải **dẫn xuất** dữ liệu:

- selected publications: lấy các publication có `featured=true`;
- latest publications: sort theo year/date;
- recognitions: lấy từ profile;
- statistics: tính từ dataset;
- projects preview: lấy project có `featured=true`.

Không nhập lại cùng một publication hoặc project trong `app/page.tsx`.

---

## 6. Lớp content loader

Component giao diện không đọc CSV/JSON trực tiếp. Tạo lớp trung gian:

```ts
getSiteContent()
getProfile()
getResearchAreas()
getPublications()
getFeaturedPublications()
getTeamMembers()
getProjects()
getNews()
getEvents()
```

Nhiệm vụ của loader:

1. Đọc file.
2. Parse dữ liệu.
3. Validate bằng schema.
4. Chuẩn hóa khoảng trắng và Unicode.
5. Chuẩn hóa boolean.
6. Sort theo thứ tự hoặc thời gian.
7. Loại bản ghi `visible=false`.
8. Trả dữ liệu đã định kiểu cho page/component.

Component chỉ render dữ liệu đã hợp lệ.

---

## 7. Validation bắt buộc

Khuyến nghị dùng Zod hoặc một schema validator tương đương.

### Kiểm tra chung

- thiếu trường bắt buộc;
- ID trùng;
- URL sai định dạng;
- date không đúng ISO;
- file ảnh/PDF không tồn tại;
- đường dẫn asset không bắt đầu bằng `/uploads/`;
- publication type không thuộc danh sách cho phép;
- publication year không phải số hợp lệ;
- item được đánh dấu featured nhưng hidden;
- ký tự lỗi encoding;
- file CSV không phải UTF-8.

### Quy tắc riêng

#### Publications

- `id`, `type`, `year`, `title`, `citation` bắt buộc;
- không suy luận title/year từ citation;
- `featured` tối đa một số lượng cấu hình, ví dụ 3–6 item.

#### News

- `date`, `title`, `url` bắt buộc;
- date lưu theo `YYYY-MM-DD`;
- phần hiển thị ngày được format trong code.

#### Team

- mỗi thành viên có `id`, `name`, `role`, `areas`, `visible`;
- ảnh có thể để trống và dùng placeholder;
- không hard-code thành viên trong page.

#### Assets

- chỉ dùng chữ thường;
- không dùng dấu cách;
- không dùng ký tự đặc biệt;
- không ghi phiên bản bằng các tên như `final`, `new`, `latest`, `crop3`.

---

## 8. Script đề xuất trong `package.json`

```json
{
  "scripts": {
    "dev": "next dev",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "validate:content": "tsx scripts/validate-content.ts",
    "check:assets": "tsx scripts/check-assets.ts",
    "build": "next build",
    "check": "npm run validate:content && npm run check:assets && npm run lint && npm run typecheck && npm run build"
  }
}
```

`npm run check` là lệnh kiểm tra đầy đủ trước khi deploy.

---

## 9. CI đề xuất

File: `.github/workflows/content-check.yml`

```yaml
name: Validate and Build Website

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]
    paths:
      - "content/**"
      - "public/uploads/**"
      - "app/**"
      - "components/**"
      - "src/**"
      - "scripts/**"
      - "package.json"
      - "package-lock.json"
  workflow_dispatch:

concurrency:
  group: website-${{ github.ref }}
  cancel-in-progress: true

jobs:
  check:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version-file: ".nvmrc"
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Validate content
        run: npm run validate:content

      - name: Check assets
        run: npm run check:assets

      - name: Lint
        run: npm run lint

      - name: Type check
        run: npm run typecheck

      - name: Build
        run: npm run build
```

### Quy tắc deploy

Job deploy phải phụ thuộc job check:

```yaml
deploy:
  needs: check
```

Nếu validation hoặc build thất bại:

- không deploy;
- website đang chạy giữ nguyên bản trước;
- người vận hành sửa file và commit lại.

Không nên để hệ thống hosting tự deploy một commit trước khi CI hoàn tất.

---

## 10. Quy trình cập nhật khuyến nghị

### Phương án an toàn

1. Mở repository trên GitHub.
2. Tạo branch theo mẫu:
   - `content/update-2026-08`
   - `content/add-publications-2026`
3. Upload hoặc thay file trong `content/` hoặc `public/uploads/`.
4. Commit bằng GitHub UI.
5. Tạo Pull Request vào `main`.
6. Chờ GitHub Actions chạy.
7. Chỉ merge khi tất cả check màu xanh.
8. Hosting tự triển khai branch `main`.
9. Kiểm tra website sau deploy.

### Phương án tối giản

Có thể upload trực tiếp lên `main`, nhưng chỉ nên dùng khi:

- người vận hành hiểu rollback;
- deploy workflow chỉ chạy sau khi job check thành công;
- website hosting không tự deploy độc lập trước CI.

Phương án Pull Request an toàn hơn và vẫn hoàn toàn thao tác trên giao diện GitHub.

---

## 11. Hướng dẫn theo từng loại cập nhật

### 11.1. Thêm publication

1. Tải template `publications.csv`.
2. Mở bằng Excel hoặc Google Sheets.
3. Không đổi tên cột.
4. Thêm một dòng mới.
5. Lưu CSV UTF-8.
6. Upload đè `content/publications.csv`.
7. Tạo Pull Request.
8. Kiểm tra CI.
9. Merge.

### 11.2. Cập nhật biography hoặc chức danh

1. Mở `content/profile.json`.
2. Chọn biểu tượng Edit.
3. Chỉ sửa value, không sửa key.
4. Preview thay đổi.
5. Commit vào branch update.
6. Tạo Pull Request và kiểm tra CI.

### 11.3. Thay ảnh chân dung

1. Chuẩn bị ảnh WebP hoặc JPG đã tối ưu.
2. Đặt tên `hiram-ting-main.webp`.
3. Upload đè file cùng tên.
4. Không tạo tên `hiram-ting-main-new.webp`.
5. Commit và kiểm tra CI.
6. Sau deploy, hard refresh trình duyệt nếu cache vẫn giữ ảnh cũ.

### 11.4. Thay CV

1. Xuất PDF đã kiểm tra thông tin cá nhân.
2. Đặt đúng tên `hiram-ting-cv.pdf`.
3. Upload đè file tại `public/uploads/documents/`.
4. Không cần sửa code hoặc đổi đường dẫn.
5. Kiểm tra file mở được sau deploy.

### 11.5. Ẩn nội dung cũ

Không xóa ngay bản ghi. Đổi:

```text
visible=false
```

Sau một chu kỳ kiểm tra, mới xóa nếu cần.

---

## 12. Quy ước tên file

### Được phép

```text
hiram-ting-main.webp
hiram-ting-cv.pdf
reborn-logo-black.svg
project-borneo-cultures-museum.webp
```

### Không nên dùng

```text
Dr Hiram New Final.png
logo-final-final-2.png
CV 2026 latest.pdf
ảnh giáo sư mới.jpg
```

Quy tắc:

- chữ thường;
- dùng dấu gạch ngang;
- không dấu cách;
- không ký tự tiếng Việt;
- không dùng tên phiên bản mơ hồ;
- ưu tiên giữ nguyên tên file khi thay asset.

---

## 13. Tài liệu bàn giao nên có

### `docs/CONTENT_UPDATE_GUIDE.md`

Nội dung:

1. Mục tiêu cơ chế cập nhật.
2. Sơ đồ luồng cập nhật.
3. Danh sách file được phép chỉnh sửa.
4. Hướng dẫn upload qua GitHub.
5. Hướng dẫn tạo branch và Pull Request.
6. Hướng dẫn đọc trạng thái Actions.
7. Hướng dẫn từng loại nội dung.
8. Quy tắc đặt tên file.
9. Rollback.
10. Phạm vi hỗ trợ.

### `docs/CONTENT_FIELDS.md`

Mô tả từng trường:

- tên trường;
- kiểu dữ liệu;
- bắt buộc hay không;
- giá trị cho phép;
- ví dụ đúng;
- ví dụ sai.

### `docs/TROUBLESHOOTING.md`

Các lỗi thường gặp:

- JSON invalid;
- CSV sai encoding;
- thiếu cột;
- trùng ID;
- ảnh không tồn tại;
- URL sai;
- build fail;
- deployment fail;
- dữ liệu đã merge nhưng chưa thấy trên web;
- cache ảnh/PDF.

### Template mẫu

```text
templates/
├─ publications-template.csv
├─ news-template.csv
├─ events-template.csv
├─ profile-template.json
├─ team-template.json
└─ project-template.json
```

---

## 14. Thứ tự triển khai mã nguồn

### Giai đoạn 1 — Bắt buộc

1. Chuyển nội dung hard-code khỏi:
   - Home;
   - Research;
   - Research Team;
   - Impact headings/statistics;
   - CTA text có khả năng thay đổi.
2. Hợp nhất publication thành một dataset.
3. Chuẩn hóa asset path.
4. Tạo content loader.
5. Tạo schema validation.
6. Thêm `typecheck` và `validate:content`.
7. Tạo CI build gate.
8. Viết tài liệu update cơ bản.

### Giai đoạn 2 — Nên làm

1. Tự động tính statistics.
2. Tự động chọn latest/featured publications.
3. Kiểm tra broken link.
4. Kiểm tra duplicate publication.
5. Tạo changelog nội dung.
6. Tạo preview deployment cho Pull Request.

### Giai đoạn 3 — Chỉ khi có ngân sách

1. Decap CMS hoặc headless CMS.
2. Dashboard quản trị.
3. Form upload ảnh.
4. Phân quyền editor.
5. Draft/publish workflow.
6. Search index nâng cao.

Với mức ngân sách hiện tại, không nên triển khai giai đoạn 3.

---

## 15. Phạm vi bảo trì cần ghi rõ

Để tránh hiểu “update time to time” là hỗ trợ không giới hạn, biên bản bàn giao nên nêu:

> Website được bàn giao với cơ chế tự cập nhật nội dung thông qua GitHub. Người quản trị có thể thay thế các file dữ liệu, hình ảnh và CV theo tài liệu hướng dẫn. Các yêu cầu thay đổi cấu trúc trang, thiết kế, chức năng, schema dữ liệu hoặc xử lý lỗi do nội dung nhập sai không thuộc phạm vi cập nhật nội dung thông thường và cần được báo giá riêng.

Có thể quy định thêm:

- bảo hành lỗi mã nguồn ban đầu trong một khoảng thời gian xác định;
- không bao gồm nhập dữ liệu định kỳ;
- không bao gồm kiểm chứng tính chính xác học thuật;
- không bao gồm tối ưu ảnh do khách hàng cung cấp;
- không bao gồm thay đổi UI hoặc thêm loại nội dung mới;
- backup và rollback dựa trên lịch sử Git.

---

## 16. Tiêu chí hoàn thành

Cơ chế cập nhật được xem là hoàn chỉnh khi:

- không cần sửa `app/*.tsx` để thêm publication, news, event, project hoặc team member;
- thay CV không cần sửa code;
- thay ảnh chính không cần đổi đường dẫn;
- dữ liệu sai làm CI thất bại với thông báo rõ;
- dữ liệu đúng build thành công;
- deployment chỉ diễn ra sau validation;
- home page không chứa bản sao publication/project;
- có template và tài liệu cập nhật;
- có hướng dẫn rollback;
- người không biết React có thể cập nhật bằng GitHub UI.

---

## 17. Kiến nghị cuối cùng

Không chuyển trực tiếp toàn bộ website sang CMS. Đối với dự án này, giải pháp có tỷ lệ chi phí/lợi ích tốt nhất là:

> **Next.js giao diện cố định + content files chuẩn hóa + schema validation + GitHub Actions + tài liệu self-service.**

Giải pháp này đáp ứng yêu cầu cập nhật định kỳ nhưng giới hạn trách nhiệm kỹ thuật sau bàn giao.
