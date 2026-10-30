export const TG_USER = "lanperor";
export const TG_LINK = `https://t.me/${TG_USER}`;

export const socials = [
  { name: "Telegram-канал", href: "https://t.me/tryosfahri", icon: "telegram" },
  { name: "Instagram", href: "https://instagram.com/fahri_yos", icon: "instagram" },
  { name: "TikTok", href: "https://tiktok.com/@fahri_yos", icon: "tiktok" },
  { name: "YouTube", href: "https://youtube.com/@tryosfahri", icon: "youtube" },
];

export const nav = [
  { label: "Путь", href: "#path" },
  { label: "Услуги", href: "#services" },
  { label: "Пакеты", href: "#packages" },
  { label: "TR-YÖS", href: "#tryos" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

/** Joins a site path with the configured base (works for "/halil" and "/halil/"). */
export function url(path = "") {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
