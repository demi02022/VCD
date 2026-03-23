(() => {
  const STORAGE_KEY = "kmu-vd-language";
  const SUPPORTED = ["ko", "en"];
  const path = window.location.pathname;
  const pageName = path.split("/").pop() || "index.html";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  const currentLanguage = SUPPORTED.includes(stored) ? stored : "ko";

  const titles = {
    "index.html": {
      ko: "국민대학교 시각디자인학과",
      en: "Kookmin University Visual Design Department",
      zh: "国民大学视觉设计系"
    },
    "room-schedule.html": {
      ko: "각 과실 시간표",
      en: "Studio Room Schedule",
      zh: "各工作室时间表"
    },
    "calendar.html": {
      ko: "2026 학사일정 캘린더",
      en: "2026 Academic Calendar",
      zh: "2026 学年日历"
    },
    "cafeteria.html": {
      ko: "오늘의 학식 메뉴",
      en: "Today's Cafeteria Menu",
      zh: "今日食堂菜单"
    },
    "students.html": {
      ko: "재학생 소통 창구",
      en: "Current Students Portal",
      zh: "在校生交流窗口"
    },
    "returning.html": {
      ko: "휴학생 · 복학생 소통 창구",
      en: "Returning Students Portal",
      zh: "休学生·复学生交流窗口"
    }
  };

  const months = {
    ko: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    zh: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
  };

  const weekdays = {
    ko: ["일", "월", "화", "수", "목", "금", "토"],
    en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    zh: ["日", "一", "二", "三", "四", "五", "六"]
  };

  const roomDays = {
    ko: ["월", "화", "수", "목", "금"],
    en: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    zh: ["周一", "周二", "周三", "周四", "周五"]
  };

  const timeLabels = {
    ko: { 9: "오전 9시", 10: "오전 10시", 11: "오전 11시", 12: "오후 12시", 13: "오후 1시", 14: "오후 2시", 15: "오후 3시", 16: "오후 4시", 17: "오후 5시", 18: "오후 6시" },
    en: { 9: "9 AM", 10: "10 AM", 11: "11 AM", 12: "12 PM", 13: "1 PM", 14: "2 PM", 15: "3 PM", 16: "4 PM", 17: "5 PM", 18: "6 PM" },
    zh: { 9: "上午9点", 10: "上午10点", 11: "上午11点", 12: "下午12点", 13: "下午1点", 14: "下午2点", 15: "下午3点", 16: "下午4点", 17: "下午5点", 18: "下午6点" }
  };

  const textMap = {
    ko: {},
    en: {
      "Visual Design Student Council 2026": "Visual Design Student Council 2026",
      "국민대학교 시각디자인학과": "Kookmin University Visual Design Department",
      "조형대학": "College of Design",
      "시각디자인학과": "Visual Design",
      "출력실": "Print Room",
      "기자재실": "Equipment Room",
      "실크스크린실": "Silkscreen Room",
      "시각디자인학과의 모든 것을 한 곳에": "Everything in Visual Design, All in One Place",
      "소통창구": "Communication",
      "재학생 소통 창구": "Current Students Portal",
      "수업, 공지, 행사, 학과 소식 확인": "Classes, notices, events, and department updates",
      "휴학생 · 복학생 소통 창구": "Returning Students Portal",
      "복학 준비, 일정 확인, 문의 연결": "Return preparation, schedule checks, and support",
      "각 과실 시간표": "Studio Room Schedule",
      "각 과실 시간표 보기": "Open Room Schedule",
      "학생회 건의함": "Student Council Suggestion Box",
      "학생회 건의함 바로가기": "Open Suggestion Box",
      "국민대 e-campus": "Kookmin e-campus",
      "오늘의 학식 메뉴": "Today's Cafeteria Menu",
      "교수님 연락처": "Faculty Contacts",
      "국민대학교 교내식당 주간 메뉴": "Weekly Cafeteria Menu at Kookmin University",
      "이번 주 학식 메뉴": "This Week's Cafeteria Menu",
      "오늘 날짜가 초록색으로 강조됩니다.": "Today's date is highlighted in green.",
      "메뉴를 불러오는 중입니다.": "Loading cafeteria menu.",
      "학식 메뉴가 아직 등록되지 않았습니다.": "This week's cafeteria menu is not available yet.",
      "메뉴를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.": "Unable to load the cafeteria menu right now. Please try again later.",
      "공식 학식 페이지 기준": "Based on the official cafeteria page",
      "실크스크린실 이용 방법": "How to Use the Silkscreen Room",
      "2026학년도 연간 캘린더": "2026 Academic Year Calendar",
      "학사 일정": "Academic Schedule",
      "행사": "Events",
      "1학기": "Semester 1",
      "여름방학": "Summer Break",
      "2학기": "Semester 2",
      "학생회 행사 일정": "Student Council Events",
      "메인으로 돌아가기": "Back to Home",
      "재학생 창구": "Current Students Portal",
      "재학생 소통 게시판": "Current Students Board",
      "휴학생 · 복학생 소통 게시판": "Returning Students Board",
      "내 프로필": "My Profile",
      "설정 전": "Not Set",
      "학년 미선택": "No Grade Selected",
      "프로필 수정": "Edit Profile",
      "글쓰기": "Write",
      "날짜 / 시간": "Date / Time",
      "제목": "Title",
      "작성자": "Author",
      "댓글": "Comments",
      "공지": "Notice",
      "닉네임과 학년을 설정해주세요": "Set your nickname and grade",
      "입장하기": "Enter",
      "학년 선택": "Select Grade",
      "새 게시글 작성": "Write a New Post",
      "닫기": "Close",
      "게시하기": "Post",
      "게시글 보기": "Post Detail",
      "게시글을 선택해주세요.": "Select a post.",
      "아직 댓글이 없습니다.": "No comments yet.",
      "댓글 달기": "Add Comment",
      "수정": "Edit",
      "삭제": "Delete",
      "이달의 주요 일정": "Monthly Highlights",
      "공식 페이지": "Official Page",
      "복학 신청 바로가기": "Open Reinstatement Page",
      "휴학 신청 바로가기": "Open Leave Page",
      "2학기 복학 신청 기간": "Second Semester Reinstatement Period",
      "2학기 휴학 신청 안내": "Second Semester Leave of Absence Guide",
      "ON국민 포털에서 휴학 신청과 승인 상태를 확인할 수 있습니다.": "Check leave applications and approvals on the ON Kookmin portal.",
      "1학년": "Year 1",
      "2학년": "Year 2",
      "3학년": "Year 3",
      "4학년": "Year 4",
      "기초디자인": "Basic Design",
      "2D 디지털그래픽스": "2D Digital Graphics",
      "드로잉": "Drawing",
      "시각디자인학과 내전": "Visual Design Department Event",
      "게시판 이용 안내": "Board Guide",
      "복학 준비하면서 궁금한 점을 자유롭게 남겨주세요.": "Feel free to ask questions while preparing to return.",
      "학년별 닉네임 색상: 1학년 흰색, 2학년 노란색, 3학년 파란색, 4학년 빨간색": "Nickname colors by year: Year 1 white, Year 2 yellow, Year 3 blue, Year 4 red"
    },
    zh: {
      "Visual Design Student Council 2026": "视觉设计学生会 2026",
      "국민대학교 시각디자인학과": "国民大学视觉设计系",
      "조형대학": "造型学院",
      "시각디자인학과": "视觉设计系",
      "출력실": "打印室",
      "기자재실": "器材室",
      "실크스크린실": "丝网印刷室",
      "시각디자인학과의 모든 것을 한 곳에": "视觉设计系的一切都在这里",
      "소통창구": "沟通窗口",
      "재학생 소통 창구": "在校生交流窗口",
      "수업, 공지, 행사, 학과 소식 확인": "查看课程、公告、活动与系内消息",
      "휴학생 · 복학생 소통 창구": "休学生·复学生交流窗口",
      "복학 준비, 일정 확인, 문의 연결": "复学准备、日程确认与咨询帮助",
      "각 과실 시간표": "各工作室时间表",
      "각 과실 시간표 보기": "查看工作室时间表",
      "학생회 건의함": "学生会意见箱",
      "학생회 건의함 바로가기": "前往意见箱",
      "국민대 e-campus": "国民大学 e-campus",
      "오늘의 학식 메뉴": "今日食堂菜单",
      "교수님 연락처": "教授联系方式",
      "2026학년도 연간 캘린더": "2026学年全年日历",
      "학사 일정": "学事日程",
      "행사": "活动",
      "1학기": "第一学期",
      "여름방학": "暑假",
      "2학기": "第二学期",
      "학생회 행사 일정": "学生会活动日程",
      "메인으로 돌아가기": "返回主页",
      "재학생 창구": "在校生窗口",
      "재학생 소통 게시판": "在校生交流板",
      "휴학생 · 복학생 소통 게시판": "休学生·复学生交流板",
      "내 프로필": "我的资料",
      "설정 전": "未设置",
      "학년 미선택": "未选择年级",
      "프로필 수정": "修改资料",
      "글쓰기": "写帖子",
      "날짜 / 시간": "日期 / 时间",
      "제목": "标题",
      "작성자": "作者",
      "댓글": "评论",
      "공지": "公告",
      "닉네임과 학년을 설정해주세요": "请设置昵称和年级",
      "입장하기": "进入",
      "학년 선택": "选择年级",
      "새 게시글 작성": "撰写新帖子",
      "닫기": "关闭",
      "게시하기": "发布",
      "게시글 보기": "查看帖子",
      "게시글을 선택해주세요.": "请选择帖子。",
      "아직 댓글이 없습니다.": "暂无评论。",
      "댓글 달기": "发表评论",
      "수정": "修改",
      "삭제": "删除",
      "이달의 주요 일정": "本月重点日程",
      "공식 페이지": "官方页面",
      "복학 신청 바로가기": "前往复学申请",
      "휴학 신청 바로가기": "前往休学申请",
      "2학기 복학 신청 기간": "第二学期复学申请期间",
      "2학기 휴학 신청 안내": "第二学期休学申请 안내",
      "ON국민 포털에서 휴학 신청과 승인 상태를 확인할 수 있습니다.": "可在ON Kookmin门户查看休学申请与审批状态。",
      "1학년": "一年级",
      "2학년": "二年级",
      "3학년": "三年级",
      "4학년": "四年级",
      "기초디자인": "基础设计",
      "2D 디지털그래픽스": "2D数字图形",
      "드로잉": "素描",
      "시각디자인학과 내전": "视觉设计系活动",
      "게시판 이용 안내": "公告板使用说明",
      "복학 준비하면서 궁금한 점을 자유롭게 남겨주세요.": "准备复学时有任何疑问都可以自由留言。",
      "학년별 닉네임 색상: 1학년 흰색, 2학년 노란색, 3학년 파란색, 4학년 빨간색": "按年级区分昵称颜色：一年级白色，二年级黄色，三年级蓝色，四年级红色"
    }
  };

  const placeholderMap = {
    en: {
      "닉네임": "Nickname",
      "제목을 입력하세요": "Enter a title",
      "내용을 입력하세요.": "Enter the content.",
      "댓글을 입력하세요": "Write a comment"
    },
    zh: {
      "닉네임": "昵称",
      "제목을 입력하세요": "请输入标题",
      "내용을 입력하세요.": "请输入内容。",
      "댓글을 입력하세요": "请输入评论"
    }
  };

function buildLanguageSwitch() {
  const switcher = document.createElement("div");
  switcher.className = "language-switch";
  switcher.setAttribute("aria-label", "Language switch");
  switcher.dataset.activeLang = currentLanguage;

  const items = [
    { code: "ko", label: "KO" },
    { code: "en", label: "EN" }
  ];

  const thumb = document.createElement("span");
  thumb.className = "language-switch-thumb";
  switcher.appendChild(thumb);

  items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `lang-button${currentLanguage === item.code ? " active" : ""}`;
    button.dataset.lang = item.code;
    button.textContent = item.label;
    button.addEventListener("click", () => {
      if (item.code === currentLanguage) {
        return;
      }
      switcher.dataset.activeLang = item.code;
      switcher.classList.add("is-switching");
      window.localStorage.setItem(STORAGE_KEY, item.code);
      window.setTimeout(() => {
        window.location.reload();
      }, 240);
    });
    switcher.appendChild(button);
  });

  return switcher;
}

function buildMenuButton() {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "menu-trigger";
  button.setAttribute("aria-label", "Open menu");
  button.innerHTML = `
    <span class="menu-trigger-icon" aria-hidden="true">
      <span class="menu-trigger-line menu-trigger-line-top"></span>
      <span class="menu-trigger-line menu-trigger-line-mid"></span>
      <span class="menu-trigger-line menu-trigger-line-bottom"></span>
    </span>
    <span class="menu-trigger-label">MENU</span>
  `;
  return button;
}

function setupMenuHoverLayer() {
  if (document.querySelector(".menu-hover-layer")) {
    return;
  }

  const layer = document.createElement("div");
  layer.className = "menu-hover-layer";
  layer.innerHTML = `
    <div class="menu-dim"></div>
    <aside class="menu-panel" aria-hidden="true">
      <div class="menu-panel-body">
        <div class="menu-shortcut-grid">
          <a class="menu-shortcut-card" href="https://ecampus.kookmin.ac.kr/login/index.php" target="_blank" rel="noreferrer" data-menu-link="ecampus">
            <span class="menu-shortcut-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="9" y="10" width="30" height="21" rx="4" stroke="currentColor" stroke-width="2.4"/>
                <path d="M19 37H29" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
                <path d="M15 31H33" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
              </svg>
            </span>
            <span class="menu-shortcut-copy">
              <strong>국민대 e-campus</strong>
            </span>
          </a>
          <a class="menu-shortcut-card" href="cafeteria.html" data-menu-link="cafeteria">
            <span class="menu-shortcut-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24C10 19.5817 13.5817 16 18 16H30C34.4183 16 38 19.5817 38 24V25C38 30.5228 33.5228 35 28 35H20C14.4772 35 10 30.5228 10 25V24Z" stroke="currentColor" stroke-width="2.4"/>
                <path d="M14 35H34" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
                <path d="M36 21H39C40.6569 21 42 22.3431 42 24V24C42 25.6569 40.6569 27 39 27H38" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
              </svg>
            </span>
            <span class="menu-shortcut-copy">
              <strong>오늘의 학식 메뉴</strong>
            </span>
          </a>
          <a class="menu-shortcut-card" href="faculty.html" data-menu-link="faculty">
            <span class="menu-shortcut-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="16" r="7" stroke="currentColor" stroke-width="2.4"/>
                <path d="M13 36C13 30.4772 17.4772 26 23 26H25C30.5228 26 35 30.4772 35 36V37H13V36Z" stroke="currentColor" stroke-width="2.4"/>
              </svg>
            </span>
            <span class="menu-shortcut-copy">
              <strong>교수님 연락처</strong>
            </span>
          </a>
          <a class="menu-shortcut-card" href="https://www.youtube.com/watch?si=YS-jY3oZ1Q3gaN5B&v=cOAaayciE0A&feature=youtu.be" target="_blank" rel="noreferrer" data-menu-link="silkscreen-video">
            <span class="menu-shortcut-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="13" width="32" height="22" rx="8" stroke="currentColor" stroke-width="2.4"/>
                <path d="M21 20L29 24L21 28V20Z" fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
              </svg>
            </span>
            <span class="menu-shortcut-copy">
              <strong>실크스크린실 이용 방법</strong>
            </span>
          </a>
        </div>
      </div>
    </aside>
  `;
  document.body.appendChild(layer);

  const panel = layer.querySelector(".menu-panel");
  let closeTimer = null;

  const openMenu = () => {
    if (closeTimer) {
      window.clearTimeout(closeTimer);
      closeTimer = null;
    }
    document.body.classList.add("menu-hover-open");
    panel?.setAttribute("aria-hidden", "false");
  };

  const closeMenuSoon = () => {
    if (closeTimer) {
      window.clearTimeout(closeTimer);
    }
    closeTimer = window.setTimeout(() => {
      document.body.classList.remove("menu-hover-open");
      panel?.setAttribute("aria-hidden", "true");
    }, 40);
  };

  const triggers = Array.from(document.querySelectorAll(".menu-trigger"));

  triggers.forEach((button) => {
    button.addEventListener("mouseenter", openMenu);
    button.addEventListener("mouseleave", closeMenuSoon);
    button.addEventListener("focus", openMenu);
  });

  panel?.addEventListener("mouseenter", openMenu);
  panel?.addEventListener("mouseleave", closeMenuSoon);

  document.addEventListener("pointermove", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) {
      return;
    }

    const insideTrigger = triggers.some((button) => button.contains(target));
    const insidePanel = panel?.contains(target);

    if (!insideTrigger && !insidePanel) {
      closeMenuSoon();
    }
  });

  document.addEventListener("pointerdown", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) {
      return;
    }

    const insideTrigger = triggers.some((button) => button.contains(target));
    const insidePanel = panel?.contains(target);

    if (!insideTrigger && !insidePanel) {
      document.body.classList.remove("menu-hover-open");
      panel?.setAttribute("aria-hidden", "true");
    }
  });
}


function setupTopHeaderClone() {
  return;
}

function mountLanguageSwitches() {
  document.querySelectorAll(".site-header-inner").forEach((inner) => {
    const header = inner.closest(".site-header");
    const isHomepageTop = pageName === "index.html" && header?.classList.contains("site-header-top-copy");
    const isHomepageBottom = pageName === "index.html" && !header?.classList.contains("site-header-top-copy");
    let tools = inner.querySelector(".header-tools");

    if (isHomepageBottom) {
      tools?.remove();
      return;
    }

    if (!tools) {
      tools = document.createElement("div");
      tools.className = "header-tools";
      const social = inner.querySelector(".social-links");
      if (social && !isHomepageTop) {
        tools.appendChild(social);
      }
      inner.appendChild(tools);
    }

    if (!tools.querySelector(".language-switch")) {
      tools.appendChild(buildLanguageSwitch());
    }

    if (!tools.querySelector(".menu-trigger")) {
      tools.appendChild(buildMenuButton());
    }
  });
}

function updateDocumentTitle() {

    const entry = titles[pageName];
    if (entry) {
      document.title = entry[currentLanguage];
    }
    document.documentElement.lang = currentLanguage;
  }

  function replaceExactTexts() {
    if (currentLanguage === "ko") {
      return;
    }
    const map = textMap[currentLanguage];
    document.querySelectorAll("h1,h2,h3,p,span,a,button,strong,option,label").forEach((el) => {
      if (el.childElementCount > 0) {
        return;
      }
      const raw = el.textContent.trim();
      if (map[raw]) {
        el.textContent = map[raw];
      }
    });
  }

  function replacePlaceholders() {
    const map = placeholderMap[currentLanguage] || {};
    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((el) => {
      const raw = el.getAttribute("placeholder") || "";
      if (map[raw]) {
        el.setAttribute("placeholder", map[raw]);
      }
    });
  }

  function translateMonthText(text) {
    const match = text.match(/^(\d{1,2})월$/);
    if (!match) {
      return text;
    }
    const month = Number(match[1]);
    return months[currentLanguage][month - 1] || text;
  }

  function translateEventCount(text) {
    const match = text.match(/^(\d+)개 일정$/);
    if (!match) {
      return text;
    }
    const count = match[1];
    if (currentLanguage === "en") {
      return `${count} events`;
    }
    if (currentLanguage === "zh") {
      return `${count}个日程`;
    }
    return text;
  }

  function translateTimeText(text) {
    const hourMap = {
      "오전 9시": 9, "오전 10시": 10, "오전 11시": 11,
      "오후 12시": 12, "오후 1시": 13, "오후 2시": 14,
      "오후 3시": 15, "오후 4시": 16, "오후 5시": 17, "오후 6시": 18
    };
    const hour = hourMap[text.trim()];
    if (!hour || currentLanguage === "ko") {
      return text;
    }
    return timeLabels[currentLanguage][hour] || text;
  }

  function translateDateLabels(text) {
    if (currentLanguage === "ko") {
      return text;
    }
    return text.replace(/(\d{1,2})월\s*(\d{1,2})일/g, (_, month, day) => {
      const monthIndex = Number(month) - 1;
      if (currentLanguage === "en") {
        return `${months.en[monthIndex]} ${day}`;
      }
      return `${month}月${day}日`;
    }).replace(/2026년\s*(\d{1,2})월\s*(\d{1,2})일/g, (_, month, day) => {
      if (currentLanguage === "en") {
        return `${months.en[Number(month) - 1]} ${day}, 2026`;
      }
      return `2026年${month}月${day}日`;
    });
  }

  function updateSourceNotes() {
    document.querySelectorAll(".source-note").forEach((note) => {
      const link = note.querySelector("a");
      if (!link) {
        return;
      }
      const prefix = currentLanguage === "en"
        ? "Schedule source: Kookmin University Academic Affairs 2026 Academic Calendar"
        : currentLanguage === "zh"
          ? "日程依据：国民大学学事指南 2026学年学事日程"
          : "일정 기준: 국민대학교 학사안내 2026학년도 학사일정";
      const official = currentLanguage === "en" ? "Official Page" : currentLanguage === "zh" ? "官方页面" : "공식 페이지";
      note.innerHTML = `${prefix} <a href="${link.href}" target="_blank" rel="noreferrer">${official}</a>`;
    });
  }

  function translateStructuredContent() {
    document.querySelectorAll(".month-card h3, #month-navigation a").forEach((el) => {
      el.textContent = translateMonthText(el.textContent.trim());
    });

    document.querySelectorAll(".event-count").forEach((el) => {
      el.textContent = translateEventCount(el.textContent.trim());
    });

    document.querySelectorAll(".mini-weekdays span, .calendar-weekdays span").forEach((el, index) => {
      const labels = weekdays[currentLanguage];
      if (labels[index % labels.length]) {
        el.textContent = labels[index % labels.length];
      }
    });

    document.querySelectorAll(".room-schedule-day").forEach((el, index) => {
      const labels = roomDays[currentLanguage];
      if (labels[index % labels.length]) {
        el.textContent = labels[index % labels.length];
      }
    });

    document.querySelectorAll(".room-schedule-time-left").forEach((el) => {
      el.textContent = translateTimeText(el.textContent.trim());
    });

    document.querySelectorAll(".schedule-date, .notice-card p, #month-title, #month-description, .month-event-list li").forEach((el) => {
      el.textContent = translateDateLabels(el.textContent.trim());
    });

    document.querySelectorAll(".month-summary").forEach((el) => {
      if (el.textContent.trim() === "공개된 주요 일정이 없습니다." && currentLanguage === "en") {
        el.textContent = "No public events are available.";
      } else if (el.textContent.trim() === "공개된 주요 일정이 없습니다." && currentLanguage === "zh") {
        el.textContent = "暂无公开主要日程。";
      }
    });
  }

  function applyLanguage() {
    updateDocumentTitle();
    replaceExactTexts();
    replacePlaceholders();
    updateSourceNotes();
    translateStructuredContent();
  }

  let translating = false;
  let scheduled = false;

  function scheduleApply() {
    if (scheduled) {
      return;
    }
    scheduled = true;
    window.requestAnimationFrame(() => {
      scheduled = false;
      if (translating) {
        return;
      }
      translating = true;
      applyLanguage();
      translating = false;
    });
  }

  function observeDom() {
    const observer = new MutationObserver(() => {
      if (!translating) {
        scheduleApply();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: false });
  }

  setupTopHeaderClone();
  mountLanguageSwitches();
  setupMenuHoverLayer();
  applyLanguage();
  observeDom();
})();
