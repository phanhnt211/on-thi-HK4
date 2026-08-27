// Dựng nội dung trang từ dữ liệu trong data.js — bạn không cần sửa file này.

function renderIndex() {
  const grid = document.getElementById("course-grid");
  if (!grid) return;
  grid.innerHTML = COURSES.map(
    (c) => `
    <a class="course-card" href="course.html?c=${c.id}">
      <span class="course-card-icon">${c.icon}</span>
      <div class="course-card-name">${c.name}</div>
      <p class="course-card-tagline">${c.tagline}</p>
      <span class="course-card-cta">Ôn tập ngay →</span>
    </a>`
  ).join("");
}

function renderCourse() {
  const root = document.getElementById("course-root");
  if (!root) return;
  const id = new URLSearchParams(window.location.search).get("c");
  const course = COURSES.find((c) => c.id === id);

  if (!course) {
    root.innerHTML = `
      <div class="wrap section">
        <p>Không tìm thấy môn học này. <a href="index.html" style="color:var(--gold)">← Quay lại trang chủ</a></p>
      </div>`;
    return;
  }

  document.title = course.name + " — Ôn thi Học kỳ 4";

  root.innerHTML = `
    <header class="course-hero wrap">
      <a class="breadcrumb" href="index.html">← Tất cả môn học</a>
      <div class="course-hero-icon">${course.icon}</div>
      <h1>${course.name}</h1>
      <div class="course-hero-tagline">${course.tagline}</div>
    </header>

    <section class="section wrap">
      <h2 class="section-title"><span class="num">01</span> Mô tả môn học</h2>
      <p>${course.overview}</p>
    </section>

    <section class="section wrap">
      <h2 class="section-title"><span class="num">02</span> Mục tiêu môn học</h2>
      <ul class="plain">${course.goals.map((g) => `<li>${g}</li>`).join("")}</ul>
    </section>

    <section class="section wrap">
      <h2 class="section-title"><span class="num">03</span> Danh sách chương &amp; bài</h2>
      <div id="chapters"></div>
    </section>

    <section class="section wrap">
      <h2 class="section-title"><span class="num">04</span> Phạm vi thi</h2>
      <p>${course.examScope}</p>
    </section>

    <section class="section wrap">
      <h2 class="section-title"><span class="num">05</span> Nội dung trọng tâm</h2>
      <div class="callout">
        <ul class="plain" style="margin:0">${course.keyPoints.map((k) => `<li>${k}</li>`).join("")}</ul>
      </div>
    </section>
  `;

  const chaptersEl = document.getElementById("chapters");
  chaptersEl.innerHTML = course.chapters
    .map(
      (ch, i) => `
    <div class="chapter" id="ch-${i}">
      <div class="chapter-head" onclick="document.getElementById('ch-${i}').classList.toggle('open'); this.parentElement.querySelector('.chapter-body').style.maxHeight = this.parentElement.classList.contains('open') ? this.parentElement.querySelector('.chapter-body').scrollHeight + 'px' : null;">
        <span>${ch.title}</span>
        <span class="chev">›</span>
      </div>
      <div class="chapter-body">
        <ul>${ch.lessons.map((l) => `<li>${l}</li>`).join("")}</ul>
      </div>
    </div>`
    )
    .join("");
}

renderIndex();
renderCourse();
