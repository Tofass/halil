export type Package = {
  id: string;
  num: number;
  title: string;
  tagline: string;
  price: string;
  per?: string;
  oldPrice?: string;
  badge?: string;
  features: string[];
  /** Short text pasted into the Telegram request. */
  summary: string;
};

export const packages: Package[] = [
  {
    id: "prep",
    num: 1,
    title: "Подготовка к TR-YÖS",
    tagline: "Мини-группы до 5 человек",
    price: "$300",
    per: "/ месяц",
    features: [
      "3 урока в неделю в мини-группе",
      "1 бесплатное общее занятие по логике",
      "Записи уроков",
      "Пробные тесты и разбор ошибок",
      "Материалы для подготовки",
    ],
    summary: "Групповые занятия, записи уроков, пробные тесты, материалы.",
  },
  {
    id: "admission",
    num: 2,
    title: "Поступление в университет",
    tagline: "От выбора вуза до приглашения",
    price: "$350",
    features: [
      "Подбор вуза и специальности под цели и бюджет",
      "Подготовка документов",
      "Подача заявок",
      "Сопровождение до получения пригласительного письма",
    ],
    summary: "Подбор вуза, подготовка документов, подача заявки, сопровождение до пригласительного письма.",
  },
  {
    id: "settle",
    num: 3,
    title: "Переезд и адаптация",
    tagline: "Документы, жильё и быт",
    price: "$350",
    features: [
      "Поиск жилья и проверка договора",
      "Денклик и документы",
      "Подача на студенческий ВНЖ (ikamet)",
      "Медицинская страховка",
      "Банковский счёт и SIM-карта",
    ],
    summary: "Жильё, документы, банк и SIM-карта, подача на ВНЖ, страховка.",
  },
  {
    id: "online",
    num: 4,
    title: "Онлайн-сопровождение",
    tagline: "Пакеты 2 и 3 вместе",
    price: "$600",
    oldPrice: "$700",
    badge: "Выгоднее на $100",
    features: [
      "Всё из пакета 2 — поступление",
      "Всё из пакета 3 — переезд и адаптация",
      "Один куратор на весь путь",
    ],
    summary:
      "Подбор вуза, документы, подача заявки, сопровождение до пригласительного письма, жильё, банк и SIM-карта, ВНЖ, страховка.",
  },
  {
    id: "full",
    num: 5,
    title: "Полное сопровождение",
    tagline: "Лично, на месте в Турции",
    price: "$1500",
    features: [
      "Всё из пакетов 2 и 3",
      "Встреча в аэропорту",
      "Совместное посещение университета, жилья и т. д.",
    ],
    summary: "Встреча в аэропорту, совместные визиты, всё из пакетов 2 и 3.",
  },
];

export const singleServices = [
  { id: "one-uni", title: "Подача в один университет", price: "$70", summary: "Подача в один университет." },
  { id: "three-uni", title: "Подача в три университета и более", price: "$200", summary: "Подача в три и более университетов." },
  { id: "ikamet", title: "Подача на студенческий ВНЖ", price: "$100", summary: "Подача на студенческий ВНЖ." },
  { id: "insurance", title: "Страховка для ВНЖ", price: "500 ₺", summary: "Страховка для ВНЖ." },
];

/** Every option of the request form, in display order. */
export const requestOptions = [
  ...packages.map((p) => ({
    id: p.id,
    label: `Пакет ${p.num} — ${p.title}`,
    price: `${p.price}${p.per ? ` ${p.per}` : ""}`,
    summary: p.summary,
  })),
  ...singleServices.map((s) => ({ id: s.id, label: s.title, price: s.price, summary: s.summary })),
];
