/* =========================================================
   دنیای مجموعه‌ها
   app.js
   ساخته شده برای مبینا اعظمی
========================================================= */

"use strict";

/* =========================================================
   Storage
========================================================= */

const STORAGE_KEY = "donyaye-majmooahat-sets";

let sets = [];
let currentSetId = null;
let editingSetId = null;

let toastTimer = null;
let exerciseState = null;


/* =========================================================
   DOM Helpers
========================================================= */

const $ = (selector, parent = document) => {
  return parent.querySelector(selector);
};

const $$ = (selector, parent = document) => {
  return Array.from(parent.querySelectorAll(selector));
};


/* =========================================================
   DOM Elements
========================================================= */

const welcomePage = $("#welcomePage");
const dashboardPage = $("#dashboardPage");
const editorPage = $("#editorPage");
const toolsPage = $("#toolsPage");

const startBtn = $("#startBtn");
const homeBtn = $("#homeBtn");
const brandBtn = $("#brandBtn");

const newSetBtn = $("#newSetBtn");
const emptyNewSetBtn = $("#emptyNewSetBtn");

const backToDashboardBtn = $("#backToDashboardBtn");
const toolsBackBtn = $("#toolsBackBtn");

const setsGrid = $("#setsGrid");
const emptySets = $("#emptySets");

const editorTitle = $("#editorTitle");
const setForm = $("#setForm");
const setNameInput = $("#setName");
const setMembersInput = $("#setMembers");
const setPreview = $("#setPreview");
const previewCount = $("#previewCount");
const deleteSetBtn = $("#deleteSetBtn");

const currentSetTitle = $("#currentSetTitle");

const toolResult = $("#toolResult");
const resultIcon = $("#resultIcon");
const resultTitle = $("#resultTitle");
const resultBody = $("#resultBody");
const closeResultBtn = $("#closeResultBtn");

const keyboardSection = $("#keyboardSection");
const keyboardToggleBtn = $("#keyboardToggleBtn");
const closeKeyboardBtn = $("#closeKeyboardBtn");
const keyboardTabs = $("#keyboardTabs");
const keyboardKeys = $("#keyboardKeys");

const toast = $("#toast");
const toastIcon = $("#toastIcon");
const toastMessage = $("#toastMessage");


/* =========================================================
   Initialization
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  loadSets();
  bindEvents();
  renderDashboard();
  showPage("welcome");
  updatePreview();
});


/* =========================================================
   Event Binding
========================================================= */

function bindEvents() {

  startBtn?.addEventListener("click", () => {
    showPage("dashboard");
  });

  homeBtn?.addEventListener("click", () => {
    showPage("dashboard");
  });

  brandBtn?.addEventListener("click", () => {
    showPage("welcome");
  });

  newSetBtn?.addEventListener("click", () => {
    openNewSetEditor();
  });

  emptyNewSetBtn?.addEventListener("click", () => {
    openNewSetEditor();
  });

  backToDashboardBtn?.addEventListener("click", () => {
    showPage("dashboard");
  });

  toolsBackBtn?.addEventListener("click", () => {
    showPage("dashboard");
  });

  setForm?.addEventListener("submit", handleSetSubmit);

  setNameInput?.addEventListener("input", updatePreview);
  setMembersInput?.addEventListener("input", updatePreview);

  deleteSetBtn?.addEventListener("click", deleteCurrentSet);

  $$(".tool-card").forEach((button) => {
    button.addEventListener("click", () => {
      const tool = button.dataset.tool;
      openTool(tool);
    });
  });

  closeResultBtn?.addEventListener("click", closeResult);

  bindMembershipEvents();
  bindRelationEvents();
  bindOperationEvents();
  bindVennEvents();
  bindExerciseEvents();

  keyboardToggleBtn?.addEventListener("click", toggleKeyboard);
  closeKeyboardBtn?.addEventListener("click", closeKeyboard);

  keyboardTabs?.addEventListener("click", handleKeyboardTab);

  document.addEventListener("keydown", handleGlobalKeyboard);
}


/* =========================================================
   Page Navigation
========================================================= */

function showPage(pageName) {

  const pages = {
    welcome: welcomePage,
    dashboard: dashboardPage,
    editor: editorPage,
    tools: toolsPage
  };

  Object.values(pages).forEach((page) => {
    if (page) {
      page.hidden = true;
      page.classList.remove("active-page");
    }
  });

  const selectedPage = pages[pageName];

  if (!selectedPage) {
    return;
  }

  selectedPage.hidden = false;
  selectedPage.classList.add("active-page");

  closeResult();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (pageName === "dashboard") {
    renderDashboard();
  }
}


/* =========================================================
   Storage
========================================================= */

function loadSets() {

  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      sets = [];
      return;
    }

    const parsed = JSON.parse(saved);

    if (!Array.isArray(parsed)) {
      sets = [];
      return;
    }

    sets = parsed
      .filter((item) => item && typeof item === "object")
      .map((item) => ({
        id: String(item.id || createId()),
        name: String(item.name || "A"),
        members: Array.isArray(item.members)
          ? uniqueMembers(
              item.members.map((member) => String(member))
            )
          : [],
        type: String(item.type || "auto"),
        createdAt: item.createdAt || Date.now(),
        updatedAt: item.updatedAt || Date.now()
      }));

  } catch (error) {
    console.error("خطا در خواندن مجموعه‌ها:", error);

    sets = [];

    showToast(
      "امکان خواندن مجموعه‌های ذخیره‌شده وجود نداشت.",
      "error"
    );
  }
}


function saveSets() {

  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(sets)
    );

    return true;

  } catch (error) {

    console.error("خطا در ذخیره مجموعه‌ها:", error);

    showToast(
      "ذخیره اطلاعات انجام نشد. فضای ذخیره‌سازی مرورگر را بررسی کن.",
      "error"
    );

    return false;
  }
}


/* =========================================================
   ID
========================================================= */

function createId() {

  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }

  return (
    Date.now().toString(36) +
    Math.random().toString(36).slice(2)
  );
}


/* =========================================================
   Set Parsing
========================================================= */

function normalizeDigits(value) {

  return String(value)
    .replace(/[۰-۹]/g, (digit) => {
      return String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit));
    })
    .replace(/[٠-٩]/g, (digit) => {
      return String("٠١٢٣٤٥٦٧٨٩".indexOf(digit));
    });
}


function normalizeMember(value) {

  return normalizeDigits(String(value))
    .replace(/\s+/g, " ")
    .trim();
}


function parseSetInput(value) {

  let text = String(value ?? "");

  text = text.trim();

  if (!text || text === "∅") {
    return [];
  }

  const parts = text
    .split(/[,\u060C;؛\n\r]+/)
    .map(normalizeMember)
    .filter(Boolean);

  return uniqueMembers(parts);
}


function uniqueMembers(members) {

  const result = [];
  const seen = new Set();

  for (const member of members) {

    const normalized = normalizeMember(member);

    if (!normalized) {
      continue;
    }

    const key = normalized.toLocaleLowerCase("fa");

    if (!seen.has(key)) {
      seen.add(key);
      result.push(normalized);
    }
  }

  return result;
}


/* =========================================================
   Set Equality
========================================================= */

function memberKey(value) {
  return normalizeMember(value).toLocaleLowerCase("fa");
}


function setHas(setMembers, member) {

  const target = memberKey(member);

  return setMembers.some(
    (item) => memberKey(item) === target
  );
}


function setsEqual(a, b) {

  if (a.length !== b.length) {
    return false;
  }

  return a.every((member) => setHas(b, member));
}


function isSubset(a, b) {

  return a.every((member) => setHas(b, member));
}


function isProperSubset(a, b) {

  return isSubset(a, b) && !setsEqual(a, b);
}


/* =========================================================
   Set Operations
========================================================= */

function unionSets(a, b) {

  return uniqueMembers([
    ...a,
    ...b
  ]);
}


function intersectionSets(a, b) {

  return uniqueMembers(
    a.filter((member) => setHas(b, member))
  );
}


function differenceSets(a, b) {

  return uniqueMembers(
    a.filter((member) => !setHas(b, member))
  );
}


/* =========================================================
   Set Formatting
========================================================= */

function escapeHTML(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function setToString(members) {

  if (!members || members.length === 0) {
    return "∅";
  }

  return `{ ${members.map(escapeHTML).join("، ")} }`;
}


function setToPlainString(members) {

  if (!members || members.length === 0) {
    return "∅";
  }

  return `{ ${members.join("، ")} }`;
}


/* =========================================================
   Dashboard
========================================================= */

function renderDashboard() {

  if (!setsGrid || !emptySets) {
    return;
  }

  setsGrid.innerHTML = "";

  if (sets.length === 0) {
    emptySets.hidden = false;
    return;
  }

  emptySets.hidden = true;

  const sortedSets = [...sets].sort(
    (a, b) => Number(b.updatedAt) - Number(a.updatedAt)
  );

  sortedSets.forEach((set) => {

    const card = document.createElement("article");

    card.className = "set-card";

    card.innerHTML = `
      <div class="set-card-top">

        <div class="set-card-icon">
          ∈
        </div>

        <div class="set-card-menu">

          <button
            type="button"
            class="card-action edit-card-button"
            data-id="${escapeHTML(set.id)}"
            title="ویرایش"
            aria-label="ویرایش مجموعه"
          >
            ✏️
          </button>

          <button
            type="button"
            class="card-action delete-card-button"
            data-id="${escapeHTML(set.id)}"
            title="حذف"
            aria-label="حذف مجموعه"
          >
            🗑️
          </button>

        </div>

      </div>

      <h3>${escapeHTML(set.name)}</h3>

      <div class="set-card-members">
        ${setToString(set.members)}
      </div>

      <div class="set-card-footer">

        <span class="set-card-count">
          ${toPersianDigits(set.members.length)} عضو
        </span>

        <button
          type="button"
          class="open-set-button"
          data-id="${escapeHTML(set.id)}"
        >
          ابزارهای مجموعه ←
        </button>

      </div>
    `;

    setsGrid.appendChild(card);
  });

  $$(".edit-card-button", setsGrid).forEach((button) => {
    button.addEventListener("click", () => {
      openEditSetEditor(button.dataset.id);
    });
  });

  $$(".delete-card-button", setsGrid).forEach((button) => {
    button.addEventListener("click", () => {
      deleteSetById(button.dataset.id);
    });
  });

  $$(".open-set-button", setsGrid).forEach((button) => {
    button.addEventListener("click", () => {
      openTools(button.dataset.id);
    });
  });
}


/* =========================================================
   Editor
========================================================= */

function openNewSetEditor() {

  editingSetId = null;

  editorTitle.textContent = "مجموعه جدید";

  setNameInput.value = "";
  setMembersInput.value = "";

  const autoRadio = $(
    'input[name="setType"][value="auto"]'
  );

  if (autoRadio) {
    autoRadio.checked = true;
  }

  deleteSetBtn.hidden = true;

  updatePreview();

  showPage("editor");

  setTimeout(() => {
    setNameInput.focus();
  }, 100);
}


function openEditSetEditor(id) {

  const set = findSet(id);

  if (!set) {
    showToast("مجموعه پیدا نشد.", "error");
    return;
  }

  editingSetId = set.id;

  editorTitle.textContent =
    `ویرایش «${set.name}»`;

  setNameInput.value = set.name;
  setMembersInput.value = set.members.join("، ");

  const radio = $(
    `input[name="setType"][value="${CSS.escape(set.type)}"]`
  );

  if (radio) {
    radio.checked = true;
  } else {
    const autoRadio = $(
      'input[name="setType"][value="auto"]'
    );

    if (autoRadio) {
      autoRadio.checked = true;
    }
  }

  deleteSetBtn.hidden = false;

  updatePreview();

  showPage("editor");
}


function handleSetSubmit(event) {

  event.preventDefault();

  const name = setNameInput.value.trim();
  const members = parseSetInput(setMembersInput.value);

  const selectedType = $(
    'input[name="setType"]:checked'
  )?.value || "auto";

  if (!name) {
    showToast(
      "لطفاً نام مجموعه را وارد کن.",
      "warning"
    );

    setNameInput.focus();

    return;
  }

  if (editingSetId) {

    const set = findSet(editingSetId);

    if (!set) {
      showToast(
        "مجموعه موردنظر پیدا نشد.",
        "error"
      );

      return;
    }

    set.name = name;
    set.members = members;
    set.type = selectedType;
    set.updatedAt = Date.now();

    showToast(
      "مجموعه با موفقیت ویرایش شد."
    );

  } else {

    const newSet = {
      id: createId(),
      name,
      members,
      type: selectedType,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };

    sets.push(newSet);

    showToast(
      "مجموعه جدید با موفقیت ساخته شد."
    );
  }

  if (saveSets()) {
    editingSetId = null;
    renderDashboard();
    showPage("dashboard");
  }
}


function updatePreview() {

  if (!setPreview) {
    return;
  }

  const name =
    setNameInput?.value.trim() || "A";

  const members =
    parseSetInput(setMembersInput?.value || "");

  setPreview.innerHTML = `
    <span class="preview-name">
      ${escapeHTML(name)}
    </span>

    <span class="preview-equals">
      =
    </span>

    <span class="preview-brace">
      {
    </span>

    <span class="preview-members">
      ${members.length
        ? members.map(escapeHTML).join("، ")
        : "∅"
      }
    </span>

    <span class="preview-brace">
      }
    </span>
  `;

  if (previewCount) {
    previewCount.textContent =
      `${toPersianDigits(members.length)} عضو`;
  }
}


function deleteCurrentSet() {

  if (!editingSetId) {
    return;
  }

  deleteSetById(editingSetId);
}


function deleteSetById(id) {

  const set = findSet(id);

  if (!set) {
    showToast(
      "مجموعه پیدا نشد.",
      "error"
    );

    return;
  }

  const confirmed = window.confirm(
    `آیا مطمئنی می‌خواهی مجموعه «${set.name}» را حذف کنی؟`
  );

  if (!confirmed) {
    return;
  }

  sets = sets.filter(
    (item) => item.id !== id
  );

  saveSets();

  if (editingSetId === id) {
    editingSetId = null;
  }

  if (currentSetId === id) {
    currentSetId = null;
  }

  renderDashboard();
  showPage("dashboard");

  showToast(
    "مجموعه حذف شد."
  );
}


/* =========================================================
   Tools
========================================================= */

function openTools(id) {

  const set = findSet(id);

  if (!set) {
    showToast(
      "مجموعه پیدا نشد.",
      "error"
    );

    return;
  }

  currentSetId = id;

  currentSetTitle.textContent = set.name;

  updateToolSelects();

  showPage("tools");
}


function openTool(tool) {

  if (!currentSetId) {
    showToast(
      "ابتدا یک مجموعه انتخاب کن.",
      "warning"
    );

    return;
  }

  const set = getCurrentSet();

  if (!set) {
    return;
  }

  const config = {
    members: {
      title: "اعضای مجموعه",
      icon: "👥",
      render: renderMembersTool
    },

    count: {
      title: "تعداد اعضا",
      icon: "🔢",
      render: renderCountTool
    },

    membership: {
      title: "بررسی عضویت",
      icon: "🔎",
      render: renderMembershipTool
    },

    subsets: {
      title: "زیرمجموعه‌ها",
      icon: "🧩",
      render: renderSubsetsTool
    },

    relations: {
      title: "روابط دو مجموعه",
      icon: "🔗",
      render: renderRelationsTool
    },

    operations: {
      title: "عملیات مجموعه‌ها",
      icon: "⚙️",
      render: renderOperationsTool
    },

    venn: {
      title: "نمودار ون",
      icon: "⭕",
      render: renderVennTool
    },

    type: {
      title: "نوع مجموعه",
      icon: "🏷️",
      render: renderTypeTool
    },

    exercise: {
      title: "تمرین",
      icon: "🎯",
      render: renderExerciseTool
    }
  };

  const selected = config[tool];

  if (!selected) {
    return;
  }

  resultIcon.textContent = selected.icon;
  resultTitle.textContent = selected.title;

  resultBody.innerHTML = "";

  toolResult.hidden = false;

  selected.render(set);

  setTimeout(() => {
    toolResult.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 50);
}


function closeResult() {

  if (toolResult) {
    toolResult.hidden = true;
  }

  if (resultBody) {
    resultBody.innerHTML = "";
  }
}


/* =========================================================
   Members Tool
========================================================= */

function renderMembersTool(set) {

  if (set.members.length === 0) {

    resultBody.innerHTML = `
      <div class="answer-box warning">
        این مجموعه تهی است و عضوی ندارد.
      </div>
    `;

    return;
  }

  const chips = set.members
    .map((member, index) => `
      <span class="member-chip">
        ${escapeHTML(member)}
      </span>
    `)
    .join("");

  resultBody.innerHTML = `
    <div class="members-list">
      ${chips}
    </div>

    <div class="result-note">
      ${toPersianDigits(set.members.length)}
      عضو در مجموعه «${escapeHTML(set.name)}» وجود دارد.
    </div>
  `;
}


/* =========================================================
   Count Tool
========================================================= */

function renderCountTool(set) {

  const count = set.members.length;

  resultBody.innerHTML = `
    <div class="answer-box success">

      <div class="math-result">
        |${escapeHTML(set.name)}| = ${toPersianDigits(count)}
      </div>

      <div class="result-note">
        تعداد اعضای مجموعه «${escapeHTML(set.name)}»
      </div>

    </div>
  `;
}


/* =========================================================
   Membership Tool
========================================================= */

function bindMembershipEvents() {

  $("#checkMembershipBtn")?.addEventListener(
    "click",
    checkMembership
  );

  $("#membershipInput")?.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        checkMembership();
      }
    }
  );
}


function renderMembershipTool(set) {

  resultBody.innerHTML = `
    <div class="tool-form">

      <label for="membershipInput">
        عضو موردنظر را وارد کن
      </label>

      <div class="inline-input">

        <input
          type="text"
          id="membershipInput"
          placeholder="مثلاً 3"
          autocomplete="off"
        />

        <button
          type="button"
          id="checkMembershipBtn"
          class="primary-button"
        >
          بررسی
        </button>

      </div>

    </div>

    <div
      id="membershipAnswer"
      class="answer-box"
    >
      عضو موردنظر را وارد کن.
    </div>
  `;

  bindMembershipEvents();

  setTimeout(() => {
    $("#membershipInput")?.focus();
  }, 50);
}


function checkMembership() {

  const set = getCurrentSet();

  if (!set) {
    return;
  }

  const input = $("#membershipInput");
  const answer = $("#membershipAnswer");

  if (!input || !answer) {
    return;
  }

  const member = normalizeMember(input.value);

  if (!member) {
    answer.className = "answer-box warning";

    answer.textContent =
      "لطفاً یک عضو وارد کن.";

    return;
  }

  const exists = setHas(
    set.members,
    member
  );

  if (exists) {

    answer.className =
      "answer-box success";

    answer.innerHTML = `
      <strong>
        ✓ بله
      </strong>

      <div class="math-result">
        ${escapeHTML(member)} ∈ ${escapeHTML(set.name)}
      </div>

      <div class="result-note">
        این عضو در مجموعه وجود دارد.
      </div>
    `;

  } else {

    answer.className =
      "answer-box error";

    answer.innerHTML = `
      <strong>
        ✕ خیر
      </strong>

      <div class="math-result">
        ${escapeHTML(member)} ∉ ${escapeHTML(set.name)}
      </div>

      <div class="result-note">
        این عضو در مجموعه وجود ندارد.
      </div>
    `;
  }
}


/* =========================================================
   Subsets
========================================================= */

function renderSubsetsTool(set) {

  const n = set.members.length;

  let countText;

  if (n > 1023) {

    countText =
      "تعداد زیرمجموعه‌ها بسیار بزرگ است و با محدودیت نمایش روبه‌رو می‌شود.";

  } else {

    const count = 2n ** BigInt(n);

    countText =
      `تعداد زیرمجموعه‌ها: ${formatBigIntPersian(count)}`;
  }

  let subsets = [];

  if (n <= 10) {
    subsets = generateSubsets(set.members);
  }

  resultBody.innerHTML = `
    <div class="answer-box success">

      <div class="math-result">
        2<sup>${toPersianDigits(n)}</sup>
      </div>

      <div class="result-note">
        ${escapeHTML(countText)}
      </div>

    </div>

    ${
      n <= 10
        ? `
          <div class="subsets-display">
            ${renderSubsetList(subsets)}
          </div>
        `
        : `
          <div class="answer-box warning">
            برای جلوگیری از شلوغ شدن صفحه، نمایش کامل زیرمجموعه‌ها
            فقط برای مجموعه‌های حداکثر ۱۰ عضوی فعال است.
          </div>
        `
    }
  `;
}


function generateSubsets(members) {

  const result = [];

  const total = 1 << members.length;

  for (let mask = 0; mask < total; mask++) {

    const subset = [];

    for (let i = 0; i < members.length; i++) {

      if (mask & (1 << i)) {
        subset.push(members[i]);
      }
    }

    result.push(subset);
  }

  result.sort((a, b) => a.length - b.length);

  return result;
}


function renderSubsetList(subsets) {

  return `
    <div class="members-list">

      ${subsets
        .map((subset) => `
          <span class="member-chip">
            ${escapeHTML(
              subset.length
                ? `{ ${subset.join("، ")} }`
                : "∅"
            )}
          </span>
        `)
        .join("")
      }

    </div>
  `;
}


/* =========================================================
   Relations
========================================================= */

function bindRelationEvents() {

  $("#relationSetSelect")?.addEventListener(
    "change",
    updateRelations
  );
}


function renderRelationsTool(set) {

  resultBody.innerHTML = `
    <div class="tool-form">

      <label for="relationSetSelect">
        مجموعه دوم
      </label>

      <select id="relationSetSelect">
        <option value="">
          انتخاب مجموعه
        </option>
      </select>

    </div>

    <div
      id="relationsAnswer"
      class="answer-box"
    >
      برای بررسی روابط، یک مجموعه دوم انتخاب کن.
    </div>
  `;

  updateToolSelects();
  bindRelationEvents();
}


function updateRelations() {

  const select = $("#relationSetSelect");
  const answer = $("#relationsAnswer");

  if (!select || !answer) {
    return;
  }

  const secondId = select.value;

  if (!secondId) {
    answer.className = "answer-box";
    answer.textContent =
      "برای بررسی روابط، یک مجموعه دوم انتخاب کن.";

    return;
  }

  const first = getCurrentSet();
  const second = findSet(secondId);

  if (!first || !second) {
    return;
  }

  const equal = setsEqual(
    first.members,
    second.members
  );

  const firstSubset = isSubset(
    first.members,
    second.members
  );

  const properFirstSubset = isProperSubset(
    first.members,
    second.members
  );

  const secondSubset = isSubset(
    second.members,
    first.members
  );

  const properSecondSubset = isProperSubset(
    second.members,
    first.members
  );

  answer.className =
    "answer-box";

  answer.innerHTML = `
    <div class="relation-list">

      <div class="relation-item">
        <span class="relation-symbol">
          ${escapeHTML(first.name)} ⊆ ${escapeHTML(second.name)}
        </span>

        <span class="relation-description">
          ${firstSubset ? "درست ✓" : "نادرست ✕"}
        </span>
      </div>

      <div class="relation-item">
        <span class="relation-symbol">
          ${escapeHTML(first.name)} ⊂ ${escapeHTML(second.name)}
        </span>

        <span class="relation-description">
          ${properFirstSubset ? "درست ✓" : "نادرست ✕"}
        </span>
      </div>

      <div class="relation-item">
        <span class="relation-symbol">
          ${escapeHTML(first.name)} ⊇ ${escapeHTML(second.name)}
        </span>

        <span class="relation-description">
          ${secondSubset ? "درست ✓" : "نادرست ✕"}
        </span>
      </div>

      <div class="relation-item">
        <span class="relation-symbol">
          ${escapeHTML(first.name)} ⊃ ${escapeHTML(second.name)}
        </span>

        <span class="relation-description">
          ${properSecondSubset ? "درست ✓" : "نادرست ✕"}
        </span>
      </div>

      <div class="relation-item">
        <span class="relation-symbol">
          ${escapeHTML(first.name)} = ${escapeHTML(second.name)}
        </span>

        <span class="relation-description">
          ${equal ? "درست ✓" : "نادرست ✕"}
        </span>
      </div>

    </div>
  `;
}


/* =========================================================
   Operations
========================================================= */

function bindOperationEvents() {

  $("#operationSetSelect")?.addEventListener(
    "change",
    clearOperationAnswer
  );

  $$(".operation-button").forEach((button) => {
    button.addEventListener(
      "click",
      () => runOperation(
        button.dataset.operation
      )
    );
  });
}


function renderOperationsTool() {

  resultBody.innerHTML = `
    <div class="tool-form">

      <label for="operationSetSelect">
        مجموعه دوم
      </label>

      <select id="operationSetSelect">
        <option value="">
          انتخاب مجموعه
        </option>
      </select>

    </div>

    <div class="operation-buttons">

      <button
        type="button"
        class="operation-button"
        data-operation="union"
      >
        <span>∪</span>
        <strong>اجتماع</strong>
        <small>A ∪ B</small>
      </button>

      <button
        type="button"
        class="operation-button"
        data-operation="intersection"
      >
        <span>∩</span>
        <strong>اشتراک</strong>
        <small>A ∩ B</small>
      </button>

      <button
        type="button"
        class="operation-button"
        data-operation="differenceAB"
      >
        <span>−</span>
        <strong>تفاضل A از B</strong>
        <small>A − B</small>
      </button>

      <button
        type="button"
        class="operation-button"
        data-operation="differenceBA"
      >
        <span>−</span>
        <strong>تفاضل B از A</strong>
        <small>B − A</small>
      </button>

    </div>

    <div
      id="operationAnswer"
      class="answer-box"
    >
      یک مجموعه دوم انتخاب کن و سپس عملیات موردنظر را انتخاب کن.
    </div>
  `;

  updateToolSelects();
  bindOperationEvents();
}


function clearOperationAnswer() {

  const answer = $("#operationAnswer");

  if (answer) {
    answer.className = "answer-box";
    answer.textContent =
      "حالا یکی از عملیات‌ها را انتخاب کن.";
  }
}


function runOperation(operation) {

  const first = getCurrentSet();
  const secondId = $("#operationSetSelect")?.value;
  const second = findSet(secondId);
  const answer = $("#operationAnswer");

  if (!first || !answer) {
    return;
  }

  if (!second) {

    answer.className =
      "answer-box warning";

    answer.textContent =
      "لطفاً ابتدا مجموعه دوم را انتخاب کن.";

    return;
  }

  let result = [];
  let symbol = "";
  let title = "";

  switch (operation) {

    case "union":
      result = unionSets(
        first.members,
        second.members
      );
      symbol = "∪";
      title = "اجتماع";
      break;

    case "intersection":
      result = intersectionSets(
        first.members,
        second.members
      );
      symbol = "∩";
      title = "اشتراک";
      break;

    case "differenceAB":
      result = differenceSets(
        first.members,
        second.members
      );
      symbol = "−";
      title = `${first.name} − ${second.name}`;
      break;

    case "differenceBA":
      result = differenceSets(
        second.members,
        first.members
      );
      symbol = "−";
      title = `${second.name} − ${first.name}`;
      break;

    default:
      return;
  }

  answer.className =
    "answer-box success";

  answer.innerHTML = `
    <div
      class="math-result"
      style="direction:ltr;"
    >
      ${escapeHTML(first.name)}
      ${symbol}
      ${escapeHTML(second.name)}
      =
      ${setToString(result)}
    </div>

    <div class="result-note">
      ${escapeHTML(title)}
      — ${toPersianDigits(result.length)} عضو
    </div>
  `;
}


/* =========================================================
   Venn Diagram
========================================================= */

function bindVennEvents() {

  $("#vennSetSelect")?.addEventListener(
    "change",
    updateVenn
  );
}


function renderVennTool(set) {

  resultBody.innerHTML = `
    <div class="tool-form">

      <label for="vennSetSelect">
        مجموعه دوم
      </label>

      <select id="vennSetSelect">
        <option value="">
          انتخاب مجموعه
        </option>
      </select>

    </div>

    <div
      id="vennDiagram"
      class="venn-diagram"
      aria-label="نمودار ون"
    >

      <div class="venn-circle venn-circle-a">

        <span class="venn-label venn-label-a">
          ${escapeHTML(set.name)}
        </span>

        <div class="venn-members venn-members-a"></div>

      </div>

      <div class="venn-circle venn-circle-b">

        <span class="venn-label venn-label-b">
          B
        </span>

        <div class="venn-members venn-members-b"></div>

      </div>

    </div>

    <div
      id="vennExplanation"
      class="answer-box"
    >
      برای نمایش نمودار، مجموعه دوم را انتخاب کن.
    </div>
  `;

  updateToolSelects();
  bindVennEvents();
}


function updateVenn() {

  const first = getCurrentSet();
  const secondId = $("#vennSetSelect")?.value;
  const second = findSet(secondId);

  const diagram = $("#vennDiagram");
  const explanation = $("#vennExplanation");

  if (!first || !diagram || !explanation) {
    return;
  }

  const circleA = $(".venn-circle-a", diagram);
  const circleB = $(".venn-circle-b", diagram);

  const membersA = $(".venn-members-a", diagram);
  const membersB = $(".venn-members-b", diagram);

  if (!second) {

    membersA.innerHTML = "";
    membersB.innerHTML = "";

    explanation.className =
      "answer-box";

    explanation.textContent =
      "برای نمایش نمودار، مجموعه دوم را انتخاب کن.";

    return;
  }

  $(".venn-label-a", diagram).textContent =
    first.name;

  $(".venn-label-b", diagram).textContent =
    second.name;

  const intersection = intersectionSets(
    first.members,
    second.members
  );

  const onlyA = differenceSets(
    first.members,
    second.members
  );

  const onlyB = differenceSets(
    second.members,
    first.members
  );

  membersA.innerHTML = [
    ...onlyA,
    ...intersection
  ]
    .map((member) => `
      <span>
        ${escapeHTML(member)}
      </span>
    `)
    .join("");

  membersB.innerHTML = [
    ...onlyB,
    ...intersection
  ]
    .map((member) => `
      <span>
        ${escapeHTML(member)}
      </span>
    `)
    .join("");

  const relationText = getRelationSummary(
    first,
    second
  );

  explanation.className =
    "answer-box success";

  explanation.innerHTML = `
    <strong>
      اشتراک دو مجموعه:
    </strong>

    <div
      class="math-result"
      style="margin-top:8px;"
    >
      ${setToString(intersection)}
    </div>

    <div class="result-note">
      ${escapeHTML(relationText)}
    </div>
  `;
}


function getRelationSummary(a, b) {

  if (setsEqual(a.members, b.members)) {
    return "دو مجموعه با هم برابر هستند.";
  }

  if (isProperSubset(a.members, b.members)) {
    return `مجموعه ${a.name} زیرمجموعهٔ حقیقی ${b.name} است.`;
  }

  if (isProperSubset(b.members, a.members)) {
    return `مجموعه ${b.name} زیرمجموعهٔ حقیقی ${a.name} است.`;
  }

  return "هیچ‌کدام از دو مجموعه زیرمجموعهٔ دیگری نیستند.";
}


/* =========================================================
   Type Tool
========================================================= */

function renderTypeTool(set) {

  const members = set.members;

  const isEmpty = members.length === 0;
  const isFinite = true;
  const hasDuplicate = false;

  const allNumeric =
    members.length > 0 &&
    members.every((member) => isNumeric(member));

  const uniqueCount =
    uniqueMembers(members).length;

  const isSingleton =
    members.length === 1;

  let mainType = "مجموعه متناهی";

  if (isEmpty) {
    mainType = "مجموعه تهی";
  } else if (isSingleton) {
    mainType = "مجموعه تک‌عضوی";
  } else if (allNumeric) {
    mainType = "مجموعه عددی متناهی";
  }

  resultBody.innerHTML = `
    <div class="relation-list">

      <div class="relation-item">
        <span>
          نوع اصلی
        </span>

        <strong>
          ${escapeHTML(mainType)}
        </strong>
      </div>

      <div class="relation-item">
        <span>
          تعداد اعضا
        </span>

        <strong>
          ${toPersianDigits(members.length)}
        </strong>
      </div>

      <div class="relation-item">
        <span>
          متناهی بودن
        </span>

        <strong>
          ${isFinite ? "بله ✓" : "خیر"}
        </strong>
      </div>

      <div class="relation-item">
        <span>
          عددی بودن اعضا
        </span>

        <strong>
          ${allNumeric ? "بله ✓" : "خیر"}
        </strong>
      </div>

      <div class="relation-item">
        <span>
          دارای عضو تکراری
        </span>

        <strong>
          ${hasDuplicate ? "بله" : "خیر ✓"}
        </strong>
      </div>

    </div>
  `;
}


function isNumeric(value) {

  const normalized = normalizeDigits(
    String(value)
      .replace(/[−–—]/g, "-")
      .replace(/٫/g, ".")
      .trim()
  );

  if (!normalized) {
    return false;
  }

  return Number.isFinite(
    Number(normalized)
  );
}


/* =========================================================
   Exercise
========================================================= */

function bindExerciseEvents() {

  $("#exerciseYesBtn")?.addEventListener(
    "click",
    () => answerExercise(true)
  );

  $("#exerciseNoBtn")?.addEventListener(
    "click",
    () => answerExercise(false)
  );

  $("#nextExerciseBtn")?.addEventListener(
    "click",
    createExercise
  );
}


function renderExerciseTool(set) {

  resultBody.innerHTML = `
    <div class="exercise-card">

      <div class="exercise-progress">

        <span>
          تمرین
        </span>

        <strong id="exerciseNumber">
          ۱
        </strong>

      </div>

      <div class="exercise-question">

        <span class="question-label">
          سؤال
        </span>

        <h4 id="exerciseQuestion">
          در حال ساخت تمرین...
        </h4>

      </div>

      <div class="exercise-actions">

        <button
          type="button"
          id="exerciseYesBtn"
          class="answer-button yes-button"
        >
          ✓ بله
        </button>

        <button
          type="button"
          id="exerciseNoBtn"
          class="answer-button no-button"
        >
          ✕ خیر
        </button>

      </div>

      <div
        id="exerciseFeedback"
        class="exercise-feedback"
        hidden
      ></div>

      <button
        type="button"
        id="nextExerciseBtn"
        class="secondary-button"
        hidden
      >
        تمرین بعدی ←
      </button>

    </div>
  `;

  bindExerciseEvents();

  exerciseState = {
    number: 1,
    member: "",
    expected: false
  };

  createExercise();
}


function createExercise() {

  const set = getCurrentSet();

  if (!set) {
    return;
  }

  const question =
    $("#exerciseQuestion");

  const number =
    $("#exerciseNumber");

  const feedback =
    $("#exerciseFeedback");

  const nextButton =
    $("#nextExerciseBtn");

  const yesButton =
    $("#exerciseYesBtn");

  const noButton =
    $("#exerciseNoBtn");

  if (
    !question ||
    !number ||
    !feedback ||
    !nextButton ||
    !yesButton ||
    !noButton
  ) {
    return;
  }

  const allCandidates = [
    ...set.members,
    ...generateExerciseCandidates(set.members)
  ];

  const uniqueCandidates =
    uniqueMembers(allCandidates);

  let member = "";

  if (uniqueCandidates.length > 0) {

    member =
      uniqueCandidates[
        Math.floor(
          Math.random() * uniqueCandidates.length
        )
      ];

  } else {

    member = "1";
  }

  const expected =
    setHas(set.members, member);

  exerciseState = {
    number: exerciseState
      ? exerciseState.number
      : 1,

    member,
    expected
  };

  number.textContent =
    toPersianDigits(
      exerciseState.number
    );

  question.innerHTML = `
    آیا
    <span class="exercise-set-expression">
      ${escapeHTML(member)} ∈ ${escapeHTML(set.name)}
    </span>
    درست است؟
  `;

  feedback.hidden = true;
  feedback.className =
    "exercise-feedback";

  nextButton.hidden = true;

  yesButton.disabled = false;
  noButton.disabled = false;
}


function generateExerciseCandidates(members) {

  const numericMembers =
    members
      .filter(isNumeric)
      .map(Number)
      .filter(Number.isFinite);

  if (numericMembers.length > 0) {

    const min =
      Math.min(...numericMembers);

    const max =
      Math.max(...numericMembers);

    const candidates = [];

    for (
      let value = min - 2;
      value <= max + 2;
      value++
    ) {
      candidates.push(
        String(value)
      );
    }

    return candidates;
  }

  return [
    "x",
    "y",
    "z",
    "سلام",
    "مجموعه",
    "۱۰"
  ];
}


function answerExercise(answer) {

  if (!exerciseState) {
    return;
  }

  const feedback =
    $("#exerciseFeedback");

  const nextButton =
    $("#nextExerciseBtn");

  const yesButton =
    $("#exerciseYesBtn");

  const noButton =
    $("#exerciseNoBtn");

  if (!feedback || !nextButton) {
    return;
  }

  const correct =
    answer === exerciseState.expected;

  feedback.hidden = false;

  if (correct) {

    feedback.className =
      "exercise-feedback correct";

    feedback.textContent =
      "✓ آفرین! پاسخ درست است.";

  } else {

    feedback.className =
      "exercise-feedback wrong";

    feedback.textContent =
      exerciseState.expected
        ? "✕ پاسخ درست «بله» بود."
        : "✕ پاسخ درست «خیر» بود.";
  }

  nextButton.hidden = false;

  if (yesButton) {
    yesButton.disabled = true;
  }

  if (noButton) {
    noButton.disabled = true;
  }
}


/* =========================================================
   Selects
========================================================= */

function updateToolSelects() {

  const currentId = currentSetId;

  const selectIds = [
    "relationSetSelect",
    "operationSetSelect",
    "vennSetSelect"
  ];

  selectIds.forEach((selectId) => {

    const select = $(`#${selectId}`);

    if (!select) {
      return;
    }

    const previousValue =
      select.value;

    select.innerHTML = `
      <option value="">
        انتخاب مجموعه
      </option>
    `;

    sets
      .filter((set) => set.id !== currentId)
      .sort((a, b) =>
        a.name.localeCompare(
          b.name,
          "fa"
        )
      )
      .forEach((set) => {

        const option =
          document.createElement("option");

        option.value = set.id;
        option.textContent = set.name;

        select.appendChild(option);
      });

    if (
      previousValue &&
      findSet(previousValue)
    ) {
      select.value = previousValue;
    }
  });
}


/* =========================================================
   Keyboard
========================================================= */

const keyboardData = {

  abc: [
    "A", "B", "C", "D", "E", "F", "G", "H",
    "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X",
    "Y", "Z"
  ],

  numbers: [
    "۰", "۱", "۲", "۳", "۴",
    "۵", "۶", "۷", "۸", "۹",
    "0", "1", "2", "3",
    "4", "5", "6", "7",
    "8", "9"
  ],

  greek: [
    "α", "β", "γ", "δ", "ε",
    "ζ", "η", "θ", "λ", "μ",
    "ν", "ξ", "π", "ρ", "σ",
    "τ", "φ", "χ", "ψ", "ω"
  ],

  math: [
    "+", "−", "×", "÷", "=",
    "≠", "<", ">", "≤", "≥",
    "∞", "√", "∑", "∏", "∫",
    "∈", "∉", "≈", "∝"
  ],

  sets: [
    "∅", "∈", "∉", "⊂", "⊆",
    "⊃", "⊇", "∪", "∩", "−",
    "A", "B", "C", "U",
    "|A|", "P(A)", "A′"
  ],

  brackets: [
    "(", ")", "[", "]",
    "{", "}", "⟨", "⟩",
    "⌈", "⌉", "⌊", "⌋"
  ],

  powers: [
    "²", "³", "⁴", "⁵",
    "⁶", "⁷", "⁸", "⁹",
    "⁰", "ⁿ",
    "x²", "x³", "aⁿ"
  ]
};


function toggleKeyboard() {

  if (!keyboardSection) {
    return;
  }

  keyboardSection.hidden =
    !keyboardSection.hidden;
}


function closeKeyboard() {

  if (keyboardSection) {
    keyboardSection.hidden = true;
  }
}


function handleKeyboardTab(event) {

  const tab =
    event.target.closest(".keyboard-tab");

  if (!tab) {
    return;
  }

  const category =
    tab.dataset.keyboardTab;

  if (!keyboardData[category]) {
    return;
  }

  $$(".keyboard-tab").forEach((item) => {
    item.classList.toggle(
      "active",
      item === tab
    );
  });

  renderKeyboardKeys(category);
}


function renderKeyboardKeys(category = "abc") {

  if (!keyboardKeys) {
    return;
  }

  const keys =
    keyboardData[category] || [];

  keyboardKeys.innerHTML = "";

  keys.forEach((key) => {

    const button =
      document.createElement("button");

    button.type = "button";
    button.className = "keyboard-key";

    button.textContent = key;

    button.addEventListener(
      "click",
      () => insertKeyboardValue(key)
    );

    keyboardKeys.appendChild(button);
  });
}


function insertKeyboardValue(value) {

  const activeElement =
    document.activeElement;

  const isTextField =
    activeElement &&
    (
      activeElement.tagName === "INPUT" ||
      activeElement.tagName === "TEXTAREA"
    );

  if (!isTextField) {

    if (setMembersInput) {
      setMembersInput.focus();
      insertAtCursor(
        setMembersInput,
        value
      );
    }

    return;
  }

  insertAtCursor(
    activeElement,
    value
  );
}


function insertAtCursor(input, text) {

  if (!input) {
    return;
  }

  const start =
    input.selectionStart ?? input.value.length;

  const end =
    input.selectionEnd ?? input.value.length;

  input.value =
    input.value.slice(0, start) +
    text +
    input.value.slice(end);

  const cursor =
    start + text.length;

  input.setSelectionRange(
    cursor,
    cursor
  );

  input.dispatchEvent(
    new Event(
      "input",
      {
        bubbles: true
      }
    )
  );
}


function handleGlobalKeyboard(event) {

  if (event.key === "Escape") {

    if (
      keyboardSection &&
      !keyboardSection.hidden
    ) {
      closeKeyboard();
    }
  }
}


/* =========================================================
   Helpers
========================================================= */

function findSet(id) {

  if (!id) {
    return null;
  }

  return (
    sets.find(
      (set) => String(set.id) === String(id)
    ) || null
  );
}


function getCurrentSet() {

  return findSet(currentSetId);
}


function toPersianDigits(value) {

  return String(value)
    .replace(/\d/g, (digit) =>
      "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]
    );
}


function formatBigIntPersian(value) {

  return String(value)
    .replace(/\d/g, (digit) =>
      "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]
    );
}


/* =========================================================
   Toast
========================================================= */

function showToast(
  message,
  type = "success"
) {

  if (!toast || !toastMessage) {
    return;
  }

  clearTimeout(toastTimer);

  toast.hidden = false;

  toast.className =
    `toast ${type}`;

  toastMessage.textContent =
    message;

  if (toastIcon) {

    if (type === "error") {
      toastIcon.textContent = "!";
    } else if (type === "warning") {
      toastIcon.textContent = "!";
    } else {
      toastIcon.textContent = "✓";
    }
  }

  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 3000);
}


/* =========================================================
   Initial Keyboard
========================================================= */

renderKeyboardKeys("abc");


/* =========================================================
   Safety Check for BigInt
========================================================= */

function supportsBigInt() {

  try {
    return (
      typeof BigInt === "function" &&
      2n ** 10n === 1024n
    );
  } catch {
    return false;
  }
}


/* =========================================================
   Replace Subset Calculation if BigInt unavailable
========================================================= */

if (!supportsBigInt()) {

  console.warn(
    "BigInt در این مرورگر پشتیبانی نمی‌شود."
  );
}


/* =========================================================
   End
========================================================= */