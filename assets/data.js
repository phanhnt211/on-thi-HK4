// ĐÂY LÀ NƠI DUY NHẤT BẠN CẦN SỬA NỘI DUNG.
// Mỗi môn có: mô tả, mục tiêu, danh sách chương/bài, phạm vi thi, nội dung trọng tâm.
// Nội dung dưới đây chỉ là KHUNG MẪU — hãy thay bằng đề cương thật của giảng viên.

const COURSES = [
  {
    id: "triet-hoc-an-do",
    icon: "🕉️",
    name: "Dẫn nhập Triết học Ấn Độ",
    tagline: "Các trường phái tư tưởng lớn của Ấn Độ cổ đại",
    overview:
      "Mẫu mô tả: môn học giới thiệu bối cảnh hình thành và các trường phái triết học chính của Ấn Độ, từ hệ thống Vệ-đà đến các trường phái chính thống (Āstika) và phi chính thống (Nāstika), làm nền tảng để hiểu bối cảnh ra đời của Phật giáo.",
    goals: [
      "Nắm được các mốc hình thành tư tưởng Ấn Độ cổ đại",
      "Phân biệt được các trường phái chính thống và phi chính thống",
      "Hiểu vị trí của Phật giáo trong bức tranh triết học Ấn Độ",
    ],
    chapters: [
      { title: "Chương 1 — Bối cảnh & nguồn tư liệu", lessons: ["Bài 1: Văn minh sông Ấn & thời kỳ Vệ-đà", "Bài 2: Hệ thống kinh điển Veda, Upaniṣad"] },
      { title: "Chương 2 — Các trường phái chính thống (Āstika)", lessons: ["Bài 3: Sāṃkhya – Yoga", "Bài 4: Nyāya – Vaiśeṣika", "Bài 5: Mīmāṃsā – Vedānta"] },
      { title: "Chương 3 — Các trường phái phi chính thống (Nāstika)", lessons: ["Bài 6: Jaina giáo", "Bài 7: Các trường phái duy vật (Cārvāka)", "Bài 8: Vị trí của Phật giáo"] },
    ],
    examScope:
      "Mẫu: tập trung vào đặc điểm cốt lõi của từng trường phái, điểm giống/khác giữa Āstika và Nāstika, và bối cảnh tư tưởng trước khi Phật giáo ra đời.",
    keyPoints: [
      "So sánh Āstika vs. Nāstika — tiêu chí phân loại",
      "Khái niệm Ātman, Brahman trong Upaniṣad",
      "Vì sao Phật giáo được xếp vào Nāstika",
    ],
  },
  {
    id: "pali-1",
    icon: "🪷",
    name: "Văn học Pāli I",
    tagline: "Nhập môn ngữ pháp & văn bản Pāli căn bản",
    overview:
      "Mẫu mô tả: môn học nhập môn ngôn ngữ Pāli — hệ thống chữ viết, ngữ pháp căn bản (danh từ, động từ, biến cách) và cách đọc hiểu các đoạn văn bản Pāli đơn giản trong Tam tạng.",
    goals: [
      "Đọc và viết được bảng chữ cái Pāli, quy tắc phát âm",
      "Nắm ngữ pháp căn bản: biến cách danh từ, chia động từ thì hiện tại",
      "Dịch được các câu/đoạn văn Pāli đơn giản",
    ],
    chapters: [
      { title: "Chương 1 — Ngữ âm & chữ viết", lessons: ["Bài 1: Bảng chữ cái, nguyên âm – phụ âm", "Bài 2: Quy tắc phát âm & trọng âm"] },
      { title: "Chương 2 — Danh từ & biến cách", lessons: ["Bài 3: Biến cách nhóm -a (giống đực)", "Bài 4: Biến cách nhóm -ā (giống cái)", "Bài 5: Đại từ nhân xưng"] },
      { title: "Chương 3 — Động từ", lessons: ["Bài 6: Chia động từ thì hiện tại", "Bài 7: Đọc hiểu đoạn văn mẫu"] },
    ],
    examScope: "Mẫu: nhận diện bảng biến cách, chia động từ, dịch câu Pāli – Việt và ngược lại ở mức căn bản.",
    keyPoints: [
      "Bảng biến cách danh từ -a, -ā (thuộc lòng)",
      "Cách chia động từ thì hiện tại ngôi 1/2/3",
      "Từ vựng thường gặp trong các đoạn văn mẫu",
    ],
  },
  {
    id: "kinh-truong-a-ham",
    icon: "☸️",
    name: "Kinh Trường A-hàm",
    tagline: "Nội dung & tư tưởng các bài kinh trong Trường A-hàm",
    overview:
      "Mẫu mô tả: môn học đi sâu vào nội dung, cấu trúc và tư tưởng của các bài kinh tiêu biểu trong Trường A-hàm — một trong bốn bộ A-hàm thuộc Hán tạng, tương đương Dīgha Nikāya trong Pāli tạng.",
    goals: [
      "Nắm được cấu trúc tổng thể của Trường A-hàm",
      "Hiểu nội dung, bối cảnh và ý nghĩa của các bài kinh trọng tâm",
      "Liên hệ được với các bản tương đương trong Pāli tạng (nếu có)",
    ],
    chapters: [
      { title: "Chương 1 — Tổng quan Trường A-hàm", lessons: ["Bài 1: Vị trí trong hệ thống A-hàm / Nikāya", "Bài 2: Lược đồ các nhóm kinh"] },
      { title: "Chương 2 — Các bài kinh trọng tâm (nhóm 1)", lessons: ["Bài 3: Kinh số ...", "Bài 4: Kinh số ...", "Bài 5: Kinh số ..."] },
      { title: "Chương 3 — Các bài kinh trọng tâm (nhóm 2)", lessons: ["Bài 6: Kinh số ...", "Bài 7: Kinh số ..."] },
    ],
    examScope: "Mẫu: nội dung chính, nhân vật, và ý nghĩa giáo lý của các bài kinh được giảng viên nhấn mạnh trên lớp.",
    keyPoints: [
      "Tóm tắt nội dung từng bài kinh trọng tâm",
      "Nhân vật & bối cảnh thuyết kinh",
      "Ý nghĩa giáo lý rút ra từ mỗi bài",
    ],
  },
  {
    id: "pali-4",
    icon: "📜",
    name: "Pāli 4",
    tagline: "Ngữ pháp nâng cao & đọc hiểu văn bản dài",
    overview:
      "Mẫu mô tả: môn học nâng cao của chuỗi Pāli — ngữ pháp phức tạp hơn (câu ghép, phân từ, hợp âm - sandhi) và luyện đọc hiểu các đoạn kinh văn dài hơn.",
    goals: [
      "Nắm vững hiện tượng hợp âm (sandhi) thường gặp",
      "Đọc hiểu đoạn văn Pāli có cấu trúc câu phức",
      "Tự tra cứu và dịch một đoạn kinh văn ngắn",
    ],
    chapters: [
      { title: "Chương 1 — Ôn tập & nâng cao ngữ pháp", lessons: ["Bài 1: Ôn biến cách, chia động từ", "Bài 2: Hợp âm (Sandhi) cơ bản"] },
      { title: "Chương 2 — Cấu trúc câu phức", lessons: ["Bài 3: Phân từ (Participle)", "Bài 4: Câu ghép & liên từ"] },
      { title: "Chương 3 — Thực hành đọc hiểu", lessons: ["Bài 5: Đọc đoạn kinh văn mẫu 1", "Bài 6: Đọc đoạn kinh văn mẫu 2"] },
    ],
    examScope: "Mẫu: phân tích ngữ pháp trong đoạn văn cho sẵn, dịch đoạn kinh văn có độ dài trung bình.",
    keyPoints: ["Nhận diện & giải thích hiện tượng sandhi", "Phân biệt các loại phân từ", "Từ vựng kinh văn thường gặp"],
  },
  {
    id: "lich-su-phat-giao-trung-quoc",
    icon: "🏯",
    name: "Lịch sử Phật giáo Trung Quốc",
    tagline: "Quá trình du nhập, phát triển và các tông phái lớn",
    overview:
      "Mẫu mô tả: môn học trình bày quá trình Phật giáo du nhập vào Trung Quốc, giai đoạn phiên dịch kinh điển, và sự hình thành các tông phái lớn (Thiên Thai, Hoa Nghiêm, Thiền, Tịnh Độ...).",
    goals: [
      "Nắm mốc thời gian du nhập & các giai đoạn phát triển chính",
      "Hiểu đặc điểm cơ bản của các tông phái lớn",
      "Liên hệ ảnh hưởng của Phật giáo Trung Quốc đến khu vực (trong đó có Việt Nam)",
    ],
    chapters: [
      { title: "Chương 1 — Du nhập & giai đoạn đầu", lessons: ["Bài 1: Con đường du nhập (đường tơ lụa, đường biển)", "Bài 2: Các dịch giả & trung tâm phiên dịch lớn"] },
      { title: "Chương 2 — Hình thành các tông phái", lessons: ["Bài 3: Thiên Thai tông", "Bài 4: Hoa Nghiêm tông", "Bài 5: Thiền tông", "Bài 6: Tịnh Độ tông"] },
      { title: "Chương 3 — Giai đoạn sau & ảnh hưởng", lessons: ["Bài 7: Pháp nạn & phục hưng", "Bài 8: Ảnh hưởng đến Phật giáo Việt Nam"] },
    ],
    examScope: "Mẫu: mốc thời gian quan trọng, đặc điểm phân biệt các tông phái, nhân vật lịch sử tiêu biểu.",
    keyPoints: [
      "Bảng mốc thời gian du nhập – phát triển",
      "Đặc điểm cốt lõi của từng tông phái (giáo lý + pháp môn tu)",
      "Tên các dịch giả & tác phẩm dịch tiêu biểu",
    ],
  },
];
