/* =========================================================
   دنیای مجموعه‌ها
   style.css
   ساخته شده برای مبینا اعظمی
========================================================= */

/* =========================================================
   Reset
========================================================= */

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

:root {
  --bg: #f5f7ff;
  --bg-soft: #eef1ff;
  --surface: #ffffff;
  --surface-soft: #f8f9ff;

  --primary: #635bff;
  --primary-dark: #4f46d9;
  --primary-soft: #ebe9ff;

  --secondary: #13b8a6;
  --secondary-soft: #e5faf7;

  --text: #1f2440;
  --text-soft: #626982;
  --text-light: #8b91a7;

  --border: #e4e7f2;
  --border-dark: #d7daea;

  --success: #159570;
  --success-soft: #e5f8f1;

  --danger: #e05262;
  --danger-soft: #fff0f2;

  --warning: #d99118;
  --warning-soft: #fff7df;

  --shadow-sm: 0 4px 16px rgba(39, 45, 91, 0.06);
  --shadow: 0 12px 35px rgba(39, 45, 91, 0.09);
  --shadow-lg: 0 20px 60px rgba(39, 45, 91, 0.14);

  --radius-sm: 10px;
  --radius: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;

  --transition: 180ms ease;
}

body {
  margin: 0;
  min-height: 100vh;

  font-family:
    Tahoma,
    Arial,
    sans-serif;

  background:
    radial-gradient(
      circle at 10% 10%,
      rgba(99, 91, 255, 0.07),
      transparent 30%
    ),
    radial-gradient(
      circle at 90% 20%,
      rgba(19, 184, 166, 0.06),
      transparent 28%
    ),
    var(--bg);

  color: var(--text);
  line-height: 1.8;

  -webkit-font-smoothing: antialiased;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

input,
textarea,
select {
  color: var(--text);
}

::selection {
  background: var(--primary);
  color: #fff;
}


/* =========================================================
   Accessibility
========================================================= */

button:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 3px solid rgba(99, 91, 255, 0.2);
  outline-offset: 2px;
}


/* =========================================================
   Header
========================================================= */

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;

  width: 100%;

  background: rgba(255, 255, 255, 0.88);
  border-bottom: 1px solid rgba(228, 231, 242, 0.9);

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.header-inner {
  width: min(1180px, calc(100% - 32px));
  min-height: 74px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;

  padding: 0;

  border: 0;
  background: transparent;

  color: var(--text);

  text-align: right;
}

.brand-icon {
  width: 42px;
  height: 42px;

  display: grid;
  place-items: center;

  border-radius: 13px;

  background: linear-gradient(
    135deg,
    var(--primary),
    #857dff
  );

  color: #fff;

  font-size: 23px;
  font-weight: 700;

  box-shadow:
    0 8px 20px rgba(99, 91, 255, 0.25);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.35;
}

.brand-text strong {
  font-size: 15px;
}

.brand-text small {
  color: var(--text-light);
  font-size: 10px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon-button {
  width: 42px;
  height: 42px;

  display: grid;
  place-items: center;

  border: 1px solid var(--border);
  border-radius: 12px;

  background: var(--surface);
  color: var(--text);

  box-shadow: var(--shadow-sm);

  transition:
    transform var(--transition),
    border-color var(--transition),
    background var(--transition);
}

.icon-button:hover {
  transform: translateY(-2px);
  border-color: var(--primary);
  background: var(--primary-soft);
}


/* =========================================================
   Main
========================================================= */

.app-main {
  width: 100%;
  min-height: calc(100vh - 74px);
}

.page {
  width: 100%;
  min-height: calc(100vh - 74px);
  padding: 40px 0 70px;
}

.page[hidden],
.tool-template[hidden],
.keyboard-section[hidden],
.tool-result[hidden],
.toast[hidden],
.empty-state[hidden] {
  display: none !important;
}

.page-container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.narrow-container {
  max-width: 960px;
}


/* =========================================================
   Typography
========================================================= */

h1,
h2,
h3,
h4,
p {
  margin-top: 0;
}

h1,
h2,
h3,
h4 {
  line-height: 1.45;
}

h2 {
  margin-bottom: 8px;
  font-size: clamp(25px, 4vw, 36px);
}

h3 {
  margin-bottom: 5px;
  font-size: 20px;
}

h4 {
  margin-bottom: 0;
  font-size: 18px;
}

p {
  color: var(--text-soft);
}

.section-label {
  display: inline-block;

  margin-bottom: 5px;

  color: var(--primary);

  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2px;
}


/* =========================================================
   Buttons
========================================================= */

.primary-button,
.secondary-button,
.ghost-button,
.danger-button {
  min-height: 46px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 10px 18px;

  border-radius: 12px;

  font-weight: 700;
  font-size: 14px;

  transition:
    transform var(--transition),
    box-shadow var(--transition),
    background var(--transition),
    border-color var(--transition);
}

.primary-button {
  border: 1px solid var(--primary);

  background: linear-gradient(
    135deg,
    var(--primary),
    #817aff
  );

  color: #fff;

  box-shadow:
    0 8px 20px rgba(99, 91, 255, 0.22);
}

.primary-button:hover {
  transform: translateY(-2px);

  box-shadow:
    0 12px 28px rgba(99, 91, 255, 0.28);
}

.secondary-button {
  border: 1px solid rgba(19, 184, 166, 0.25);
  background: var(--secondary-soft);
  color: #087d71;
}

.secondary-button:hover {
  transform: translateY(-2px);
  border-color: var(--secondary);
}

.ghost-button {
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text-soft);
}

.ghost-button:hover {
  border-color: var(--primary);
  color: var(--primary);
  background: var(--primary-soft);
}

.danger-button {
  border: 1px solid rgba(224, 82, 98, 0.22);
  background: var(--danger-soft);
  color: var(--danger);
}

.danger-button:hover {
  transform: translateY(-2px);
  border-color: var(--danger);
}


/* =========================================================
   Welcome
========================================================= */

.welcome-page {
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;

  padding-top: 55px;
}

.welcome-container {
  width: min(1050px, calc(100% - 32px));
  margin: 0 auto;

  position: relative;
}

.welcome-content {
  max-width: 780px;
  margin: 0 auto;

  text-align: center;
}

.welcome-symbols {
  position: relative;

  height: 55px;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;

  color: var(--primary);

  opacity: 0.75;

  font-family: Georgia, serif;
  font-size: 28px;
  font-weight: 700;
}

.welcome-symbols span:nth-child(2),
.welcome-symbols span:nth-child(4) {
  color: var(--secondary);
}

.welcome-badge {
  display: inline-flex;
  align-items: center;

  margin-bottom: 15px;
  padding: 7px 13px;

  border: 1px solid #dddcff;
  border-radius: 999px;

  background: rgba(235, 233, 255, 0.8);

  color: var(--primary-dark);

  font-size: 11px;
  font-weight: 700;
}

.welcome-content h1 {
  margin-bottom: 18px;

  font-size: clamp(32px, 7vw, 58px);
  letter-spacing: -1px;
}

.welcome-content h1 span {
  display: inline-block;

  background: linear-gradient(
    135deg,
    var(--primary),
    #9a76ff
  );

  -webkit-background-clip: text;
  background-clip: text;

  color: transparent;
}

.welcome-description {
  max-width: 650px;
  margin: 0 auto 25px;

  font-size: 15px;
  line-height: 2;
}

.creator-card {
  width: fit-content;
  margin: 0 auto 28px;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 8px 13px 8px 15px;

  border: 1px solid var(--border);
  border-radius: 16px;

  background: rgba(255, 255, 255, 0.82);

  box-shadow: var(--shadow-sm);
}

.creator-avatar {
  width: 38px;
  height: 38px;

  display: grid;
  place-items: center;

  border-radius: 12px;

  background: var(--primary-soft);
  color: var(--primary);

  font-weight: 800;
}

.creator-card div:last-child {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  line-height: 1.45;
}

.creator-card span {
  color: var(--text-light);
  font-size: 9px;
}

.creator-card strong {
  font-size: 12px;
}

.start-button {
  min-width: 190px;
  min-height: 52px;

  font-size: 15px;

  border-radius: 15px;
}

.button-arrow {
  font-size: 19px;
}


/* =========================================================
   Features
========================================================= */

.features-grid {
  margin-top: 55px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.feature-card {
  padding: 21px 18px;

  border: 1px solid var(--border);
  border-radius: var(--radius);

  background: rgba(255, 255, 255, 0.82);

  box-shadow: var(--shadow-sm);

  text-align: center;

  transition:
    transform var(--transition),
    box-shadow var(--transition),
    border-color var(--transition);
}

.feature-card:hover {
  transform: translateY(-4px);

  border-color: #d6d4ff;

  box-shadow: var(--shadow);
}

.feature-icon {
  width: 48px;
  height: 48px;

  margin: 0 auto 12px;

  display: grid;
  place-items: center;

  border-radius: 15px;

  background: var(--primary-soft);

  font-size: 22px;
}

.feature-card:nth-child(2) .feature-icon {
  background: var(--secondary-soft);
}

.feature-card:nth-child(3) .feature-icon {
  background: var(--warning-soft);
}

.feature-card:nth-child(4) .feature-icon {
  background: var(--danger-soft);
}

.feature-card h3 {
  margin-bottom: 5px;
  font-size: 14px;
}

.feature-card p {
  margin-bottom: 0;

  font-size: 11px;
  line-height: 1.8;
}


/* =========================================================
   Page Heading
========================================================= */

.page-heading {
  margin-bottom: 30px;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 25px;
}

.page-heading p {
  margin-bottom: 0;
  font-size: 13px;
}

.compact-heading {
  align-items: center;
}

.tools-topbar {
  margin-bottom: 28px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.current-set-info {
  text-align: right;
}

.current-set-info h2 {
  margin: 0;
}


/* =========================================================
   Dashboard
========================================================= */

.sets-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 17px;
}

.set-card {
  position: relative;

  min-height: 205px;

  padding: 20px;

  border: 1px solid var(--border);
  border-radius: var(--radius-lg);

  background: var(--surface);

  box-shadow: var(--shadow-sm);

  transition:
    transform var(--transition),
    box-shadow var(--transition),
    border-color var(--transition);
}

.set-card:hover {
  transform: translateY(-4px);

  border-color: #d7d5ff;

  box-shadow: var(--shadow);
}

.set-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.set-card-icon {
  width: 45px;
  height: 45px;

  display: grid;
  place-items: center;

  border-radius: 14px;

  background: var(--primary-soft);
  color: var(--primary);

  font-family: Georgia, serif;
  font-size: 22px;
  font-weight: 700;
}

.set-card-menu {
  display: flex;
  gap: 6px;
}

.card-action {
  width: 34px;
  height: 34px;

  display: grid;
  place-items: center;

  border: 1px solid var(--border);
  border-radius: 10px;

  background: var(--surface-soft);
  color: var(--text-soft);

  transition:
    background var(--transition),
    color var(--transition),
    border-color var(--transition);
}

.card-action:hover {
  border-color: var(--primary);
  background: var(--primary-soft);
  color: var(--primary);
}

.set-card h3 {
  margin: 15px 0 4px;

  font-size: 19px;

  direction: ltr;
  text-align: right;
}

.set-card-members {
  min-height: 46px;

  margin-bottom: 15px;

  color: var(--text-soft);

  font-family: Georgia, Tahoma, sans-serif;
  font-size: 14px;

  direction: ltr;
  text-align: right;

  overflow-wrap: anywhere;
}

.set-card-footer {
  padding-top: 12px;

  border-top: 1px solid var(--border);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.set-card-count {
  color: var(--text-light);
  font-size: 10px;
}

.open-set-button {
  border: 0;
  background: transparent;
  color: var(--primary);

  font-size: 11px;
  font-weight: 700;
}

.open-set-button:hover {
  text-decoration: underline;
}


/* =========================================================
   Empty State
========================================================= */

.empty-state {
  padding: 60px 20px;

  border: 2px dashed var(--border-dark);
  border-radius: var(--radius-lg);

  background: rgba(255, 255, 255, 0.55);

  text-align: center;
}

.empty-icon {
  width: 72px;
  height: 72px;

  margin: 0 auto 15px;

  display: grid;
  place-items: center;

  border-radius: 22px;

  background: var(--primary-soft);
  color: var(--primary);

  font-family: Georgia, serif;
  font-size: 36px;
}

.empty-state h3 {
  margin-bottom: 4px;
}

.empty-state p {
  margin-bottom: 18px;
  font-size: 12px;
}


/* =========================================================
   Panels
========================================================= */

.panel {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);

  background: var(--surface);

  box-shadow: var(--shadow-sm);
}

.panel-header {
  padding-bottom: 18px;

  border-bottom: 1px solid var(--border);
}

.panel-header h3 {
  margin-bottom: 2px;
}

.panel-header p {
  margin-bottom: 0;
  font-size: 11px;
}


/* =========================================================
   Editor
========================================================= */

.editor-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr);
  gap: 18px;

  align-items: start;
}

.editor-panel,
.preview-panel {
  padding: 24px;
}

.editor-panel .panel-header,
.preview-panel .panel-header {
  margin-bottom: 23px;
}

.form-group {
  margin-bottom: 22px;
}

.form-group > label {
  display: block;

  margin-bottom: 8px;

  font-size: 12px;
  font-weight: 700;
}

input[type="text"],
textarea,
select {
  width: 100%;

  border: 1px solid var(--border-dark);
  border-radius: 12px;

  background: var(--surface-soft);

  padding: 12px 14px;

  outline: none;

  transition:
    border-color var(--transition),
    box-shadow var(--transition),
    background var(--transition);
}

input[type="text"] {
  min-height: 48px;
}

textarea {
  min-height: 145px;

  resize: vertical;

  line-height: 1.9;
}

input[type="text"]:focus,
textarea:focus,
select:focus {
  border-color: var(--primary);

  background: #fff;

  box-shadow:
    0 0 0 4px rgba(99, 91, 255, 0.08);
}

.input-hint {
  margin-top: 6px;

  color: var(--text-light);

  font-size: 9px;
}

.type-options {
  display: grid;
  gap: 8px;
}

.radio-card {
  position: relative;

  display: flex;
  align-items: center;

  min-height: 58px;

  padding: 9px 12px;

  border: 1px solid var(--border);
  border-radius: 12px;

  background: var(--surface-soft);

  cursor: pointer;

  transition:
    border-color var(--transition),
    background var(--transition);
}

.radio-card:hover {
  border-color: #c9c6ff;
}

.radio-card input {
  margin-left: 10px;
  accent-color: var(--primary);
}

.radio-card span {
  display: flex;
  flex-direction: column;
}

.radio-card strong {
  font-size: 11px;
}

.radio-card small {
  color: var(--text-light);
  font-size: 9px;
}

.radio-card:has(input:checked) {
  border-color: var(--primary);
  background: var(--primary-soft);
}

.form-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  padding-top: 5px;
}

.set-preview {
  min-height: 150px;

  margin: 20px 0;

  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;

  border-radius: 18px;

  background:
    linear-gradient(
      135deg,
      #f9f9ff,
      #f1f0ff
    );

  color: var(--text);

  font-family: Georgia, Tahoma, sans-serif;
  font-size: 25px;

  direction: ltr;

  overflow-wrap: anywhere;
  text-align: center;
}

.preview-name {
  color: var(--primary);
  font-weight: 700;
}

.preview-equals {
  color: var(--text-light);
}

.preview-brace {
  color: var(--primary);
}

.preview-members {
  max-width: 100%;

  color: var(--text);
  font-size: 19px;
}

.preview-count {
  padding: 9px 12px;

  border-radius: 10px;

  background: var(--surface-soft);

  color: var(--text-soft);

  font-size: 10px;
  text-align: center;
}


/* =========================================================
   Tools
========================================================= */

.tools-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.tool-card {
  min-height: 105px;

  display: flex;
  align-items: center;
  gap: 13px;

  padding: 16px;

  border: 1px solid var(--border);
  border-radius: var(--radius);

  background: var(--surface);

  color: var(--text);

  text-align: right;

  box-shadow: var(--shadow-sm);

  transition:
    transform var(--transition),
    box-shadow var(--transition),
    border-color var(--transition),
    background var(--transition);
}

.tool-card:hover {
  transform: translateY(-3px);

  border-color: #d4d2ff;

  background: #fdfdff;

  box-shadow: var(--shadow);
}

.tool-icon {
  flex: 0 0 auto;

  width: 47px;
  height: 47px;

  display: grid;
  place-items: center;

  border-radius: 14px;

  background: var(--primary-soft);

  font-size: 21px;
}

.tool-card:nth-child(2) .tool-icon {
  background: var(--secondary-soft);
}

.tool-card:nth-child(3) .tool-icon {
  background: var(--warning-soft);
}

.tool-card:nth-child(4) .tool-icon {
  background: #eeeaff;
}

.tool-card:nth-child(5) .tool-icon {
  background: #eaf5ff;
}

.tool-card:nth-child(6) .tool-icon {
  background: #fff1e6;
}

.tool-card:nth-child(7) .tool-icon {
  background: #e8f7f5;
}

.tool-card:nth-child(8) .tool-icon {
  background: #fff0f3;
}

.tool-card:nth-child(9) .tool-icon {
  background: #f0ebff;
}

.tool-card-content {
  min-width: 0;

  flex: 1;

  display: flex;
  flex-direction: column;
}

.tool-card-content strong {
  font-size: 12px;
}

.tool-card-content small {
  margin-top: 3px;

  color: var(--text-light);

  font-size: 9px;
  line-height: 1.7;
}

.tool-arrow {
  flex: 0 0 auto;

  color: var(--text-light);

  font-size: 17px;

  transition:
    transform var(--transition),
    color var(--transition);
}

.tool-card:hover .tool-arrow {
  transform: translateX(-3px);
  color: var(--primary);
}

.exercise-tool-card {
  border-color: #dedaff;
  background: linear-gradient(
    135deg,
    #fff,
    #f7f5ff
  );
}


/* =========================================================
   Tool Result
========================================================= */

.tool-result {
  margin-top: 24px;

  padding: 24px;
}

.result-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  padding-bottom: 18px;

  border-bottom: 1px solid var(--border);
}

.result-header > div:first-child {
  display: flex;
  align-items: center;
  gap: 12px;
}

.result-header h3 {
  margin: 0;
}

.result-icon {
  width: 46px;
  height: 46px;

  display: grid;
  place-items: center;

  border-radius: 14px;

  background: var(--primary-soft);

  font-size: 21px;
}

.close-button {
  width: 36px;
  height: 36px;

  display: grid;
  place-items: center;

  border: 1px solid var(--border);
  border-radius: 10px;

  background: var(--surface-soft);
  color: var(--text-light);

  font-size: 21px;
  line-height: 1;

  transition:
    color var(--transition),
    background var(--transition),
    border-color var(--transition);
}

.close-button:hover {
  border-color: var(--danger);
  background: var(--danger-soft);
  color: var(--danger);
}

.result-body {
  padding-top: 22px;
}


/* =========================================================
   Generic Tool Form
========================================================= */

.tool-form {
  max-width: 650px;
  margin-bottom: 20px;
}

.tool-form > label {
  display: block;

  margin-bottom: 8px;

  font-size: 12px;
  font-weight: 700;
}

.inline-input {
  display: flex;
  gap: 8px;
}

.inline-input input {
  flex: 1;
}

.answer-box {
  min-height: 65px;

  padding: 17px;

  border: 1px solid var(--border);
  border-radius: 15px;

  background: var(--surface-soft);

  color: var(--text);

  font-size: 13px;
}

.answer-box.success {
  border-color: #bcebdc;
  background: var(--success-soft);
  color: #08775b;
}

.answer-box.error {
  border-color: #f1c0c6;
  background: var(--danger-soft);
  color: #b93649;
}

.answer-box.warning {
  border-color: #f0d895;
  background: var(--warning-soft);
  color: #986a0e;
}

.math-result {
  direction: ltr;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: 22px;
  text-align: center;

  overflow-wrap: anywhere;
}

.result-note {
  margin-top: 8px;

  color: var(--text-light);

  font-family: Tahoma, Arial, sans-serif;
  font-size: 10px;
  text-align: center;
}


/* =========================================================
   Members Result
========================================================= */

.members-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  direction: ltr;
}

.member-chip {
  padding: 6px 10px;

  border: 1px solid var(--border);

  border-radius: 999px;

  background: #fff;

  font-family: Georgia, Tahoma, sans-serif;
  font-size: 13px;
}


/* =========================================================
   Relations
========================================================= */

.relation-list {
  display: grid;
  gap: 9px;
}

.relation-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 12px 14px;

  border: 1px solid var(--border);
  border-radius: 12px;

  background: #fff;
}

.relation-symbol {
  direction: ltr;

  font-family: Georgia, serif;
  font-size: 20px;
  font-weight: 700;

  color: var(--primary);
}

.relation-description {
  color: var(--text-soft);
  font-size: 10px;
}


/* =========================================================
   Operations
========================================================= */

.operation-buttons {
  margin-bottom: 18px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 9px;
}

.operation-button {
  min-height: 100px;

  padding: 12px;

  border: 1px solid var(--border);
  border-radius: 14px;

  background: var(--surface-soft);
  color: var(--text);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;

  transition:
    transform var(--transition),
    border-color var(--transition),
    background var(--transition);
}

.operation-button:hover {
  transform: translateY(-2px);

  border-color: var(--primary);

  background: var(--primary-soft);
}

.operation-button span {
  color: var(--primary);

  font-family: Georgia, serif;
  font-size: 28px;
  line-height: 1.1;
}

.operation-button strong {
  font-size: 10px;
}

.operation-button small {
  color: var(--text-light);

  direction: ltr;

  font-family: Georgia, serif;
  font-size: 10px;
}


/* =========================================================
   Venn Diagram
========================================================= */

.venn-diagram {
  position: relative;

  width: min(100%, 600px);
  height: 300px;

  margin: 20px auto;

  border-radius: 18px;

  background:
    radial-gradient(
      circle,
      rgba(99, 91, 255, 0.03),
      transparent 60%
    );

  overflow: hidden;
}

.venn-circle {
  position: absolute;

  top: 35px;

  width: 260px;
  height: 230px;

  border-radius: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 28px;

  overflow: hidden;
}

.venn-circle-a {
  right: calc(50% - 235px);

  border: 3px solid rgba(99, 91, 255, 0.48);

  background: rgba(99, 91, 255, 0.08);
}

.venn-circle-b {
  left: calc(50% - 235px);

  border: 3px solid rgba(19, 184, 166, 0.48);

  background: rgba(19, 184, 166, 0.08);
}

.venn-label {
  font-family: Georgia, serif;

  font-size: 21px;
  font-weight: 700;
}

.venn-label-a {
  color: var(--primary);
}

.venn-circle-b .venn-label {
  color: var(--secondary);
}

.venn-members {
  width: 80%;

  margin-top: 12px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  gap: 4px;

  font-family: Georgia, Tahoma, sans-serif;
  font-size: 10px;

  direction: ltr;

  text-align: center;
}

.venn-members span {
  padding: 2px 5px;

  border-radius: 5px;

  background: rgba(255, 255, 255, 0.78);
}


/* =========================================================
   Exercise
========================================================= */

.exercise-card {
  max-width: 720px;

  margin: 0 auto;

  padding: 24px;

  border: 1px solid var(--border);
  border-radius: 20px;

  background:
    linear-gradient(
      145deg,
      #fff,
      #f8f7ff
    );

  text-align: center;
}

.exercise-progress {
  display: inline-flex;
  align-items: center;
  gap: 7px;

  margin-bottom: 20px;
  padding: 6px 10px;

  border-radius: 999px;

  background: var(--primary-soft);

  color: var(--primary);

  font-size: 10px;
}

.exercise-question {
  margin-bottom: 23px;
}

.question-label {
  display: inline-block;

  margin-bottom: 8px;

  color: var(--text-light);

  font-size: 10px;
}

.exercise-question h4 {
  direction: rtl;
}

.exercise-set-expression {
  margin: 10px 0;

  direction: ltr;

  color: var(--primary);

  font-family: Georgia, serif;
  font-size: 21px;
}

.exercise-actions {
  display: flex;
  justify-content: center;
  gap: 10px;

  margin-bottom: 17px;
}

.answer-button {
  min-width: 125px;
  min-height: 46px;

  border-radius: 12px;

  font-weight: 700;

  transition:
    transform var(--transition),
    box-shadow var(--transition);
}

.answer-button:hover {
  transform: translateY(-2px);
}

.yes-button {
  border: 1px solid #bcebdc;
  background: var(--success-soft);
  color: var(--success);
}

.no-button {
  border: 1px solid #f1c0c6;
  background: var(--danger-soft);
  color: var(--danger);
}

.exercise-feedback {
  margin-bottom: 15px;

  padding: 12px;

  border-radius: 12px;

  font-size: 11px;
}

.exercise-feedback.correct {
  background: var(--success-soft);
  color: #08775b;
}

.exercise-feedback.wrong {
  background: var(--danger-soft);
  color: #b93649;
}


/* =========================================================
   Keyboard
========================================================= */

.keyboard-section {
  position: fixed;

  z-index: 200;

  left: 0;
  right: 0;
  bottom: 0;

  padding: 12px;

  background: rgba(246, 247, 253, 0.94);

  border-top: 1px solid var(--border);

  box-shadow:
    0 -12px 35px rgba(39, 45, 91, 0.13);

  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
}

.keyboard-container {
  width: min(900px, 100%);
  margin: 0 auto;
}

.keyboard-header {
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.keyboard-header h3 {
  margin: 0;
  font-size: 15px;
}

.keyboard-tabs {
  display: flex;

  margin-bottom: 9px;

  gap: 5px;

  overflow-x: auto;

  scrollbar-width: thin;
}

.keyboard-tab {
  flex: 0 0 auto;

  min-height: 36px;

  padding: 6px 11px;

  border: 1px solid var(--border);
  border-radius: 9px;

  background: var(--surface);

  color: var(--text-soft);

  font-size: 10px;
  font-weight: 700;

  transition:
    background var(--transition),
    color var(--transition),
    border-color var(--transition);
}

.keyboard-tab:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.keyboard-tab.active {
  border-color: var(--primary);
  background: var(--primary);
  color: #fff;
}

.keyboard-keys {
  display: grid;

  grid-template-columns: repeat(8, 1fr);

  gap: 5px;

  max-height: 210px;

  overflow-y: auto;

  padding: 2px;

  scrollbar-width: thin;
}

.keyboard-key {
  min-height: 39px;

  padding: 5px;

  border: 1px solid var(--border);
  border-radius: 9px;

  background: #fff;

  color: var(--text);

  font-family:
    Georgia,
    Tahoma,
    sans-serif;

  font-size: 14px;

  transition:
    transform var(--transition),
    background var(--transition),
    border-color var(--transition);
}

.keyboard-key:hover {
  transform: translateY(-1px);

  border-color: var(--primary);

  background: var(--primary-soft);

  color: var(--primary);
}

.keyboard-toggle {
  position: fixed;

  z-index: 150;

  left: 18px;
  bottom: 18px;

  min-height: 44px;

  display: inline-flex;
  align-items: center;
  gap: 7px;

  padding: 9px 13px;

  border: 1px solid var(--border);
  border-radius: 13px;

  background: rgba(255, 255, 255, 0.95);

  color: var(--text);

  box-shadow: var(--shadow);

  font-size: 10px;
  font-weight: 700;

  transition:
    transform var(--transition),
    border-color var(--transition);
}

.keyboard-toggle:hover {
  transform: translateY(-2px);
  border-color: var(--primary);
}

.keyboard-toggle span:first-child {
  font-size: 17px;
}


/* =========================================================
   Toast
========================================================= */

.toast {
  position: fixed;

  z-index: 500;

  top: 90px;
  left: 50%;

  min-width: min(320px, calc(100% - 32px));

  transform: translateX(-50%);

  padding: 11px 15px;

  border: 1px solid var(--border);
  border-radius: 13px;

  background: #fff;

  box-shadow: var(--shadow-lg);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: var(--text);

  font-size: 11px;

  animation: toastIn 220ms ease;
}

.toast span:first-child {
  width: 25px;
  height: 25px;

  display: grid;
  place-items: center;

  border-radius: 8px;

  background: var(--success-soft);
  color: var(--success);

  font-weight: 700;
}

.toast.error span:first-child {
  background: var(--danger-soft);
  color: var(--danger);
}

.toast.warning span:first-child {
  background: var(--warning-soft);
  color: var(--warning);
}

@keyframes toastIn {
  from {
    opacity: 0;
    transform:
      translate(-50%, -10px);
  }

  to {
    opacity: 1;
    transform:
      translate(-50%, 0);
  }
}


/* =========================================================
   Footer
========================================================= */

.site-footer {
  border-top: 1px solid var(--border);

  background: rgba(255, 255, 255, 0.65);
}

.footer-inner {
  width: min(1180px, calc(100% - 32px));
  min-height: 90px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 9px;
}

.footer-symbol {
  width: 36px;
  height: 36px;

  display: grid;
  place-items: center;

  border-radius: 11px;

  background: var(--primary-soft);
  color: var(--primary);

  font-family: Georgia, serif;
  font-weight: 700;
}

.footer-brand div {
  display: flex;
  flex-direction: column;
  line-height: 1.5;
}

.footer-brand strong {
  font-size: 11px;
}

.footer-brand span {
  color: var(--text-light);
  font-size: 8px;
}

.footer-creator {
  color: var(--text-light);
  font-size: 9px;
}

.footer-creator strong {
  color: var(--primary);
}


/* =========================================================
   Scrollbars
========================================================= */

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: #d5d8e8;
}

::-webkit-scrollbar-thumb:hover {
  background: #b9bdd4;
}


/* =========================================================
   Responsive — Tablet
========================================================= */

@media (max-width: 1000px) {

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .sets-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .editor-layout {
    grid-template-columns: 1fr;
  }

  .preview-panel {
    order: -1;
  }

  .operation-buttons {
    grid-template-columns: repeat(2, 1fr);
  }

}


/* =========================================================
   Responsive — Mobile
========================================================= */

@media (max-width: 680px) {

  .header-inner {
    min-height: 65px;
    width: min(100% - 22px, 1180px);
  }

  .brand-icon {
    width: 38px;
    height: 38px;

    border-radius: 11px;

    font-size: 20px;
  }

  .brand-text strong {
    font-size: 13px;
  }

  .brand-text small {
    display: none;
  }

  .page {
    min-height: calc(100vh - 65px);

    padding: 28px 0 55px;
  }

  .page-container,
  .welcome-container {
    width: min(100% - 22px, 1180px);
  }

  .welcome-page {
    padding-top: 35px;
  }

  .welcome-symbols {
    gap: 11px;

    font-size: 22px;
  }

  .welcome-content h1 {
    font-size: 31px;
  }

  .welcome-description {
    font-size: 12px;
    line-height: 2;
  }

  .creator-card {
    margin-bottom: 22px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    margin-top: 38px;
  }

  .feature-card {
    padding: 17px;
  }

  .page-heading {
    align-items: stretch;
    flex-direction: column;
    gap: 15px;
  }

  .page-heading .primary-button {
    width: 100%;
  }

  .sets-grid {
    grid-template-columns: 1fr;
  }

  .tools-topbar {
    align-items: flex-start;
    flex-direction: column-reverse;
  }

  .tools-topbar .ghost-button {
    width: 100%;
  }

  .current-set-info {
    width: 100%;
  }

  .tools-grid {
    grid-template-columns: 1fr;
  }

  .tool-card {
    min-height: 90px;
  }

  .editor-panel,
  .preview-panel,
  .tool-result {
    padding: 17px;
  }

  .set-preview {
    min-height: 125px;
    padding: 14px;
    font-size: 21px;
  }

  .preview-members {
    font-size: 16px;
  }

  .form-actions {
    flex-direction: column;
  }

  .form-actions button {
    width: 100%;
  }

  .inline-input {
    flex-direction: column;
  }

  .inline-input button {
    width: 100%;
  }

  .operation-buttons {
    grid-template-columns: repeat(2, 1fr);
  }

  .venn-diagram {
    height: 245px;
  }

  .venn-circle {
    width: 190px;
    height: 180px;

    top: 32px;
  }

  .venn-circle-a {
    right: calc(50% - 170px);
  }

  .venn-circle-b {
    left: calc(50% - 170px);
  }

  .venn-members {
    margin-top: 7px;
    font-size: 8px;
  }

  .exercise-actions {
    flex-direction: column;
  }

  .answer-button {
    width: 100%;
  }

  .keyboard-section {
    padding: 9px;
  }

  .keyboard-keys {
    grid-template-columns: repeat(6, 1fr);
    max-height: 180px;
  }

  .keyboard-key {
    min-height: 36px;
  }

  .keyboard-toggle {
    left: 11px;
    bottom: 11px;
  }

  .keyboard-toggle span:last-child {
    display: none;
  }

  .footer-inner {
    min-height: 105px;

    flex-direction: column;
    justify-content: center;

    gap: 8px;

    text-align: center;
  }

  .footer-creator {
    font-size: 8px;
  }

}


/* =========================================================
   Responsive — Very Small Screens
========================================================= */

@media (max-width: 390px) {

  .welcome-content h1 {
    font-size: 27px;
  }

  .welcome-symbols {
    font-size: 19px;
  }

  .feature-card {
    padding: 15px;
  }

  .tool-card {
    padding: 13px;
  }

  .tool-icon {
    width: 42px;
    height: 42px;
  }

  .operation-button {
    min-height: 88px;
  }

  .operation-button span {
    font-size: 24px;
  }

  .keyboard-keys {
    grid-template-columns: repeat(5, 1fr);
  }

}


/* =========================================================
   Reduced Motion
========================================================= */

@media (prefers-reduced-motion: reduce) {

  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

}
