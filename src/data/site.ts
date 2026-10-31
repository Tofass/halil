/** Main contact channel: WhatsApp. Digits only for wa.me links. */
export const WA_NUMBER = "905510865298";
export const WA_DISPLAY = "+90 551 086 52 98";
export const WA_LINK = `https://wa.me/${WA_NUMBER}`;

/** Telegram channel, kept as a secondary social link. */
export const TG_CHANNEL = "https://t.me/tryosfahri";

export const socials = [
  { name: "WhatsApp", href: WA_LINK, icon: "whatsapp" },
  { name: "Telegram-канал", href: TG_CHANNEL, icon: "telegram" },
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
