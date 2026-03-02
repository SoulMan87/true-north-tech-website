export function getQuarterlyUpdatedDate(baseDate = "2026-03-02") {
  const start = new Date(`${baseDate}T00:00:00`);
  if (Number.isNaN(start.getTime())) {
    return new Date();
  }

  const now = new Date();
  const updated = new Date(start);

  while (true) {
    const next = new Date(updated);
    next.setMonth(next.getMonth() + 3);
    if (next <= now) {
      updated.setTime(next.getTime());
    } else {
      break;
    }
  }

  return updated;
}

export function formatLegalDate(date, language) {
  const locale = language === "es" ? "es-CO" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
