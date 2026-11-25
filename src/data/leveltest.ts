/** Mini level test. A reference point only, not an official TR-YÖS score. */
export type Question = { q: string; options: string[]; answer: number; img?: string; alt?: string };

export const questions: Question[] = [
  { q: "Продолжите ряд: 2, 6, 18, 54, …", options: ["108", "162", "148", "216"], answer: 1 },
  { q: "Если 3x + 5 = 20, чему равно x?", options: ["3", "4", "5", "6"], answer: 2 },
  { q: "(7⁴ − 3⁴) / (17² − 12²) = ?", options: ["8", "9", "12", "15", "16"], answer: 4 },
  {
    q: "m и n — различные натуральные числа. P(x) = (x − 1)ᵐ (x + 2)ⁿ, P(2) · P(−1) = 64. Чему равно m + n?",
    options: ["3", "4", "5", "6", "7"],
    answer: 2,
  },
  { q: "(10! / 7!) · (8! / 10! + 3! / 5!) = ?", options: ["44", "48", "50", "54", "56"], answer: 0 },
  { q: "Какое число лишнее: 4, 9, 16, 20, 25?", options: ["4", "9", "20", "25"], answer: 2 },
  {
    q: "KLMNPR — правильный шестиугольник. Отрезки [KN] и [MP] пересекаются в точке S, |KS| = 12. Найдите площадь закрашенной части.",
    options: ["30√3", "36√3", "40√3", "45√3", "48√3"],
    answer: 2,
    img: "assets/q-hexagon.svg",
    alt: "Правильный шестиугольник KLMNPR, диагонали KN и MP пересекаются в S, закрашена часть KSML",
  },
  { q: "a : b = 2 : 3 и a = 8. Чему равно b?", options: ["10", "12", "14", "16"], answer: 1 },
];

export type Level = { min: number; title: string; text: string; pack: string };

/** Highest matching `min` wins. `pack` is an id from packages.ts. */
export const levels: Level[] = [
  {
    min: 0,
    title: "Базовый уровень",
    text: "Есть над чем поработать, и это нормально для старта. В мини-группе разберём основы и выстроим план до экзамена.",
    pack: "prep",
  },
  {
    min: 4,
    title: "Средний уровень",
    text: "База есть. Не хватает системы и практики на время. Пробные тесты и разбор ошибок закроют пробелы.",
    pack: "prep",
  },
  {
    min: 7,
    title: "Сильный уровень",
    text: "Логика и математика даются уверенно. Можно параллельно заняться выбором университета и документами.",
    pack: "admission",
  },
];
