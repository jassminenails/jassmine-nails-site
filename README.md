html, body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f8f5f0;
  color: #3b2a25;
}

* {
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

button, input {
  font: inherit;
}

img {
  display: block;
  max-width: 100%;
}

.theme-shell {
  min-height: 100vh;
  background: #f8f5f0;
  color: #3b2a25;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #3b2a25;
  color: #f8f5f0;
  padding: 0.8rem 1rem;
  box-shadow: 0 8px 18px rgba(59, 42, 37, 0.14);
}

.topbar-brand {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.topbar-brand h1 {
  margin: 0;
  font-size: 1rem;
  font-family: Georgia, 'Times New Roman', serif;
  letter-spacing: 0.04em;
}

.status-dot {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 999px;
  background: #34d399;
  display: inline-block;
  animation: pulse 1.4s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
}

.primary-button,
.ghost-button,
.nav-item,
.select-button,
.time-slot,
.back-link,
.small-button {
  border: none;
  transition: all 0.2s ease;
}

.primary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background: #3b2a25;
  color: white;
  border-radius: 0.9rem;
  padding: 0.75rem 1rem;
  font-weight: 700;
  font-size: 0.76rem;
  cursor: pointer;
}

.small-button {
  padding: 0.62rem 0.9rem;
  border-radius: 999px;
  font-size: 0.7rem;
}

.dark-button {
  background: #3b2a25;
}

.ghost-button {
  background: #f5ede4;
  color: #3b2a25;
  border: 1px solid #e8e2d5;
}

.primary-button:hover,
.ghost-button:hover,
.nav-item:hover,
.select-button:hover,
.time-slot:hover {
  transform: translateY(-1px);
}

.nav-wrap {
  background: #f8f5f0;
  border-bottom: 1px solid #e8e2d5;
  position: sticky;
  top: 64px;
  z-index: 10;
  box-shadow: 0 1px 0 rgba(59, 42, 37, 0.06);
}

.nav-scroll {
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  padding: 0.8rem 1rem;
}

.nav-item {
  background: white;
  color: #8c7b70;
  border: 1px solid #e8e2d5;
  border-radius: 999px;
  padding: 0.7rem 1rem;
  min-width: max-content;
  font-size: 0.72rem;
  font-weight: 600;
  cursor: pointer;
}

.nav-item.active {
  background: #3b2a25;
  color: white;
  border-color: #3b2a25;
}

.app-content {
  max-width: 430px;
  margin: 0 auto;
  padding: 1rem;
}

.stack-space {
  display: grid;
  gap: 1rem;
}

.hero-card,
.service-card,
.panel-card,
.selectable-card,
.course-card,
.booking-summary {
  background: white;
  border: 1px solid #e8e2d5;
  border-radius: 1.7rem;
  box-shadow: 0 8px 18px rgba(59, 42, 37, 0.04);
}

.dark-card {
  background: #3b2a25;
  color: #f8f5f0;
  padding: 1.5rem;
}

.hero-card h1,
.panel-card h1,
.panel-card h2,
.section-title,
.success-box h2 {
  margin: 0 0 0.5rem 0;
  font-family: Georgia, 'Times New Roman', serif;
}

.hero-card h1 {
  font-size: 2rem;
}

.hero-card p,
.empty-panel p,
.success-box p,
.note-line,
.info-box,
.pack-item p,
.search-box h2,
.date-form h3,
.form-card h3,
.booking-summary p,
.booking-summary h3 {
  margin: 0;
}

.eyebrow {
  font-size: 0.62rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  opacity: 0.8;
  margin-bottom: 0.75rem;
}

.wide-button,
.full-button {
  width: 100%;
}

.service-card,
.selectable-card,
.course-card,
.booking-summary,
.panel-card {
  padding: 1.2rem;
}

.card-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.card-row h3,
.service-card h3,
.course-card h3,
.booking-summary h3,
.pack-item h3 {
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.15rem;
}

.service-price,
.course-price,
.summary-price {
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 700;
  font-size: 1rem;
}

.muted-list {
  color: #8c7b70;
  font-size: 0.87rem;
  display: grid;
  gap: 0.3rem;
}

.mini-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.9rem;
}

.mini-actions button {
  border: 1px solid #e8e2d5;
  background: #f8f5f0;
  color: #3b2a25;
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  cursor: pointer;
}

.panel-card {
  display: grid;
  gap: 1rem;
}

.date-switcher {
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  align-items: center;
  gap: 0.5rem;
}

.date-switcher button {
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 0.8rem;
  border: 1px solid #e8e2d5;
  background: #f8f5f0;
  color: #3b2a25;
  cursor: pointer;
}

.date-switcher h1 {
  font-size: 1.7rem;
}

.date-switcher p {
  margin: 0;
  font-size: 0.82rem;
  color: #8c7b70;
}

.booking-block {
  background: #f5ede4;
  padding: 1rem;
  border: 1px solid #d6c5b3;
  border-radius: 1rem;
}

.booking-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  font-weight: 700;
  font-size: 0.8rem;
}

.tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.42rem 0.7rem;
}

.dark-tag {
  background: #3b2a25;
  color: white;
}

.soft-tag {
  background: #f5ede4;
  color: #3b2a25;
}

.course-summary,
.pack-item,
.search-box,
.booking-summary {
  display: grid;
  gap: 0.75rem;
}

.pack-card ul {
  margin: 0;
  padding-left: 1rem;
  color: #5c4a45;
  display: grid;
  gap: 0.3rem;
}

.pack-pricing {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
}

.pack-pricing span {
  color: #8c7b70;
  text-decoration: line-through;
  font-size: 0.82rem;
}

.empty-panel {
  text-align: center;
  padding: 2rem 1.2rem;
}

.client-shell {
  max-width: 430px;
  margin: 0 auto;
  background: white;
  min-height: 100vh;
  box-shadow: 0 25px 50px rgba(59, 42, 37, 0.12);
  position: relative;
  padding-bottom: 5rem;
}

.client-topbar {
  position: sticky;
  top: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e6cbb4;
  color: #3b2a25;
  padding: 0.7rem 1rem;
  font-weight: 700;
  font-size: 0.75rem;
}

.hero-banner {
  position: relative;
  height: 12rem;
  overflow: hidden;
}

.hero-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
}

.hero-overlay {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  color: white;
}

.hero-overlay h1 {
  margin: 0.4rem 0 0;
  font-size: 2rem;
  font-family: Georgia, 'Times New Roman', serif;
}

.pill {
  display: inline-flex;
  background: #e6cbb4;
  color: #3b2a25;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 800;
}

.client-nav {
  display: flex;
  gap: 1.2rem;
  padding: 0.8rem 1rem 0;
  border-bottom: 1px solid #e8e2d5;
}

.client-nav button {
  background: none;
  color: #8c7b70;
  border: none;
  padding: 0 0 0.7rem;
  border-bottom: 2px solid transparent;
  font-weight: 700;
  font-size: 0.78rem;
  cursor: pointer;
}

.client-nav button.active {
  color: #3b2a25;
  border-bottom-color: #3b2a25;
}

.padded-section {
  padding: 1rem;
}

.selectable-card {
  border: 1px solid #e8e2d5;
}

.selectable-card.selected {
  border-color: #3b2a25;
  background: #fcfbf9;
}

.note-line {
  font-size: 0.75rem;
  color: #8c7b70;
  margin-bottom: 0.9rem;
}

.select-button {
  background: transparent;
  border: 1px solid #3b2a25;
  color: #3b2a25;
  padding: 0.75rem 1rem;
  border-radius: 0.9rem;
  font-size: 0.7rem;
  font-weight: 800;
  cursor: pointer;
}

.selected-btn {
  background: #3b2a25;
  color: white;
  border-color: #3b2a25;
}

.floating-summary {
  position: fixed;
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);
  width: min(420px, calc(100% - 2rem));
  background: #3b2a25;
  color: white;
  border-radius: 1.2rem;
  padding: 1rem 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 20px 40px rgba(59, 42, 37, 0.26);
  z-index: 40;
}

.summary-meta {
  font-size: 0.68rem;
  color: #e6cbb4;
  margin-bottom: 0.35rem;
}

.summary-price {
  font-size: 1.4rem;
  font-family: Georgia, 'Times New Roman', serif;
}

.date-form,
.form-card {
  display: grid;
  gap: 1rem;
}

.field-input {
  width: 100%;
  background: #f8f5f0;
  border: 1px solid #e8e2d5;
  border-radius: 0.9rem;
  padding: 0.85rem 0.9rem;
  font-size: 0.8rem;
  color: #3b2a25;
}

.time-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.6rem;
}

.time-slot {
  border-radius: 0.9rem;
  background: #f8f5f0;
  border: 1px solid #e8e2d5;
  color: #3b2a25;
  padding: 0.72rem 0.4rem;
  font-size: 0.73rem;
  font-weight: 700;
  cursor: pointer;
}

.time-slot.active {
  background: #3b2a25;
  color: white;
  border-color: #3b2a25;
}

.disabled-button {
  background: #e5e7eb;
  color: #94a3b8;
  pointer-events: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border-radius: 0.9rem;
  padding: 0.75rem 1rem;
  font-weight: 700;
  font-size: 0.76rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: none;
  color: #8c7b70;
  cursor: pointer;
  padding: 0;
  font-size: 0.75rem;
}

.success-box {
  text-align: center;
  padding: 2rem 1rem;
}

.success-icon {
  color: #16a34a;
  margin: 0 auto 0.6rem;
}

.search-box {
  background: #f8f5f0;
  border-radius: 1.4rem;
  padding: 1rem;
  border: 1px solid #e8e2d5;
}

.search-form {
  display: grid;
  gap: 0.7rem;
}

.bookings-list {
  display: grid;
  gap: 0.8rem;
}

.booking-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.booking-meta {
  display: flex;
  gap: 0.8rem;
  color: #8c7b70;
  font-size: 0.72rem;
}

@media (max-width: 480px) {
  .app-content {
    padding: 0.8rem;
  }

  .hero-card h1 {
    font-size: 1.7rem;
  }
}
