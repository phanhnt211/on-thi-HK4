// Dựng nội dung trang từ dữ liệu trong data.js — bạn không cần sửa file này.

const RESOURCE_ICON = {
  drive: "📁",
  notebooklm: "🧠",
  mindmap: "🗺️",
  pdf: "📄",
  doc: "📝",
  youtube: "🎥",
  link: "🔗",
};

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

function getCourseFromQuery() {
  const id = new URLSearchParams(window.location.search).get("c");
  return COURSES.find((c) => c.id === id);
}

function renderCourse() {
  const root = document.getElementById("course-root");
  if (!root) return;
  const course = getCourseFromQuery();

  if (!course) {
    root.innerHTML = `
      <div class="wrap section">
        <p>Không tìm thấy môn học này. <a href="index.html" style="color:var(--gold)">← Quay lại trang chủ</a></p>
      </div>`;
    return;
  }

  document.title = course.name + " — Ôn thi Học kỳ 4";
  const resources = course.resources || [];
  const hasQuiz = (course.quiz || []).length > 0;

  root.innerHTML = `
    <header class="course-hero wrap">
      <a class="breadcrumb" href="index.html">← Tất cả môn học</a>
      <div class="course-hero-icon">${course.icon}</div>
      <h1>${course.name}</h1>
      <div class="course-hero-tagline">${course.tagline}</div>
      <div class="course-hero-actions">
        ${hasQuiz ? `<a class="btn btn-gold" href="quiz.html?c=${course.id}">📝 Làm trắc nghiệm</a>` : ""}
        <a class="btn btn-ghost" href="#tai-lieu">📁 Xem tài liệu</a>
      </div>
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

    <section class="section wrap" id="tai-lieu">
      <h2 class="section-title"><span class="num">06</span> Tài liệu</h2>
      <div class="resource-list">
        ${
          resources.length
            ? resources
                .map(
                  (r) => `
          <a class="resource-item" href="${r.url}" target="_blank" rel="noopener">
            <span class="resource-icon">${RESOURCE_ICON[r.type] || RESOURCE_ICON.link}</span>
            <span class="resource-title">${r.title}</span>
            <span class="resource-open">Mở ↗</span>
          </a>`
                )
                .join("")
            : `<div class="resource-empty">Chưa có tài liệu nào — thêm vào mảng "resources" của môn này trong data.js.</div>`
        }
      </div>
    </section>

    ${
      hasQuiz
        ? `
    <section class="section wrap">
      <h2 class="section-title"><span class="num">07</span> Trắc nghiệm ôn tập</h2>
      <p>${course.quiz.length} câu hỏi — tự chấm điểm ngay khi làm xong.</p>
      <a class="btn btn-gold" href="quiz.html?c=${course.id}">Bắt đầu làm bài →</a>
    </section>`
        : ""
    }
  `;

  const chaptersEl = document.getElementById("chapters");
  chaptersEl.innerHTML = course.chapters
    .map(
      (ch, i) => `
    <div class="chapter" id="ch-${i}">
      <div class="chapter-head" onclick="toggleChapter(${i})">
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

function toggleChapter(i) {
  const el = document.getElementById("ch-" + i);
  el.classList.toggle("open");
  const body = el.querySelector(".chapter-body");
  body.style.maxHeight = el.classList.contains("open") ? body.scrollHeight + "px" : null;
}

/* ---------------- TRẮC NGHIỆM ---------------- */

function renderQuiz() {
  const root = document.getElementById("quiz-root");
  if (!root) return;
  const course = getCourseFromQuery();

  if (!course || !(course.quiz || []).length) {
    root.innerHTML = `
      <div class="wrap section">
        <p>Chưa có câu hỏi trắc nghiệm cho môn này. <a href="index.html" style="color:var(--gold)">← Quay lại trang chủ</a></p>
      </div>`;
    return;
  }

  document.title = "Trắc nghiệm — " + course.name;
  const answers = new Array(course.quiz.length).fill(null);

  function renderHeader() {
    return `
      <header class="course-hero wrap">
        <a class="breadcrumb" href="course.html?c=${course.id}">← ${course.name}</a>
        <h1>📝 Trắc nghiệm ôn tập</h1>
        <div class="course-hero-tagline">${course.quiz.length} câu hỏi</div>
      </header>`;
  }

  function renderQuestions(showResult) {
    return course.quiz
      .map((item, qi) => {
        const chosen = answers[qi];
        return `
        <div class="quiz-q ${chosen !== null ? "answered" : ""}" id="q-${qi}">
          <div class="quiz-q-title"><span class="quiz-q-num">${qi + 1}.</span>${item.q}</div>
          <div class="quiz-options">
            ${item.options
              .map((opt, oi) => {
                let cls = "quiz-option";
                if (chosen !== null) {
                  if (oi === item.correct) cls += " correct";
                  else if (oi === chosen) cls += " wrong";
                }
                if (chosen === oi) cls += " selected";
                return `
                <label class="${cls}" onclick="selectAnswer(${qi}, ${oi})">
                  <input type="radio" name="q${qi}" ${chosen === oi ? "checked" : ""} ${showResult ? "disabled" : ""} />
                  <span>${opt}</span>
                </label>`;
              })
              .join("")}
          </div>
          ${item.explain ? `<div class="quiz-explain">💡 ${item.explain}</div>` : ""}
        </div>`;
      })
      .join("");
  }

  function renderFooter(showResult) {
    if (!showResult) {
      return `
        <div class="wrap" style="padding-bottom:3rem">
          <button class="btn btn-gold" onclick="submitQuiz()">Nộp bài</button>
        </div>`;
    }
    const correctCount = answers.filter((a, i) => a === course.quiz[i].correct).length;
    const pct = Math.round((correctCount / course.quiz.length) * 100);
    return `
      <div class="wrap" style="padding-bottom:3rem">
        <div class="quiz-result">
          <div class="quiz-result-score">${correctCount}/${course.quiz.length}</div>
          <div class="quiz-result-label">Đúng ${pct}% — ${
      pct >= 80 ? "Rất tốt, gần như nắm chắc bài! 🎉" : pct >= 50 ? "Ổn, nhưng nên ôn lại phần sai. 💪" : "Cần ôn lại kỹ hơn phần này nhé. 📚"
    }</div>
        </div>
        <button class="btn btn-ghost" onclick="resetQuiz()">Làm lại</button>
      </div>`;
  }

  let submitted = false;

  window.selectAnswer = function (qi, oi) {
    if (submitted) return;
    answers[qi] = oi;
  };

  window.submitQuiz = function () {
    if (answers.includes(null)) {
      if (!confirm("Bạn chưa trả lời hết tất cả câu hỏi. Vẫn muốn nộp bài?")) return;
    }
    submitted = true;
    draw();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.resetQuiz = function () {
    submitted = false;
    for (let i = 0; i < answers.length; i++) answers[i] = null;
    draw();
  };

  function draw() {
    root.innerHTML = renderHeader() + `<div class="wrap section">${renderQuestions(submitted)}</div>` + renderFooter(submitted);
  }

  draw();
}

renderIndex();
renderCourse();
renderQuiz();
