import { IPost } from "@/lib/types";
import { places } from "./places";

function pickPlaces(ids: string[]) {
  return places.filter((p) => ids.includes(p._id));
}

export const posts: IPost[] = [
  {
    _id: "1",
    date: "2024-09-01",
    title: "Классическая Москва: от Красной площади до Зарядья",
    text: "Маршрут для первого знакомства с Москвой: символы города, виды и прогулка по набережной.",
    image:
      "https://resize.tripster.ru/Dq7fwNO18x5r5mNhP6wBgQbAavk=/fit-in/1200x1000/filters:no_upscale()/https://cdn.tripster.ru/photos/f9efc0e5-fd44-4f62-a1af-9b7a27ef1f39.jpg",
    likes: 325,
    comments: [
      {
        author: "Катя",
        text: "Прошлись в выходные — устали, но это того стоило. Зарядье в конце маршрута вообще как награда.",
      },
      {
        author: "Илья",
        text: "Очень удобно, что всё рядом. За один день ощущение, что посмотрел всю открытку Москвы.",
      },
    ],
    author: {
      name: "Мария Городская",
      email: "maria.city@example.com",
      id: 1,
    },
    route: {
      places: pickPlaces(["8", "9", "27", "3"]), // Красная, Василий Блаженный, Никольская, Зарядье
    },
  },
  {
    _id: "2",
    date: "2024-09-10",
    title: "Закат и огни города: Москва-Сити и набережные",
    text: "Вечерний маршрут по набережным и небоскрёбам — идеально для свидания или просто красивого вечера.",
    image:
      "https://sev.tv/image/796645c8-02b2-41d3-9082-8dcba76dacf6.jpg",
    likes: 287,
    comments: [
      {
        author: "Света",
        text: "Закат на набережной с видом на Сити — магия. Очень советую идти не спеша.",
      },
    ],
    author: {
      name: "Антон Вечерний",
      email: "anton.citylights@example.com",
      id: 2,
    },
    route: {
      places: pickPlaces(["18", "4", "19", "26"]), // Краснопресненская наб., Москва-Сити, смотровая Сити, Чистые пруды
    },
  },
  {
    _id: "3",
    date: "2024-09-15",
    title: "Зелёный день: парки и река",
    text: "Маршрут по зелёным местам Москвы — для тех, кто хочет отдохнуть от города, не уезжая далеко.",
    image:
      "https://img2.creatium.io/disk2/d5/09/08/76d67e884ffad6596eb6eabcb6409a6f23/depositphotos_36383855_l.jpg",
    likes: 198,
    comments: [
      {
        author: "Олег",
        text: "Прямо перезагрузка головы. Начали в Парке Горького, закончили на Воробьёвых — красота.",
      },
    ],
    author: {
      name: "Елена Зелёная",
      email: "green.moscow@example.com",
      id: 3,
    },
    route: {
      places: pickPlaces(["1", "24", "16", "17"]), // Горький, Музеон, Нескучный, Воробьёвы
    },
  },
  {
    _id: "4",
    date: "2024-09-20",
    title: "История и дворцы: Царицыно и Коломенское",
    text: "Неспешный маршрут по югу Москвы с дворцами, парками и видами на воду.",
    image:
      "https://resize.tripster.ru/T09vClj39xpxWW0UoVXPecZ2D84=/fit-in/1600x900/filters:no_upscale()/https://cdn.tripster.ru/photos/5a71ac7b-1261-453e-b6a3-96401caa0547.jpg?width=1200&height=630",
    likes: 156,
    comments: [
      {
        author: "Аня",
        text: "Царицыно — это сказка. Хороший маршрут на целый день.",
      },
    ],
    author: {
      name: "История Москвы",
      email: "history.walks@example.com",
      id: 4,
    },
    route: {
      places: pickPlaces(["21", "5", "14"]), // Царицыно, Коломенское, Кузьминки
    },
  },
  {
    _id: "5",
    date: "2024-09-25",
    title: "Арты, кофе и спокойные улицы",
    text: "Маршрут для тех, кто любит галереи, набережные и уютные районы без толп туристов.",
    image:
      "https://i.archi.ru/i/273481.jpg",
    likes: 143,
    comments: [
      {
        author: "Дима",
        text: "Идеально на воскресенье. ГЭС-2 очень впечатлил, а потом гулять по Хамовникам — кайф.",
      },
    ],
    author: {
      name: "Арт-прогулки",
      email: "art.walk@example.com",
      id: 5,
    },
    route: {
      places: pickPlaces(["29", "24", "25", "15"]), // ГЭС-2, Музеон, Новая Третьяковка, Хамовники
    },
  },
  {
    _id: "6",
    date: "2024-09-30",
    title: "Ночной центр: огни, гирлянды и движение",
    text: "Маршрут для тех, кто хочет увидеть ночную Москву живой: огни Никольской, бульвары и бары.",
    image:
      "https://незабываемая.москва/images/nochnaya_moskva_4_YB.webp",likes: 301,
    comments: [
      {
        author: "Кирилл",
        text: "Мы начинали в сумерках и закончили далеко за полночь. Очень живой маршрут, много людей.",
      },
    ],
    author: {
      name: "Ночной Москвич",
      email: "night.moscow@example.com",
      id: 6,
    },
    route: {
      places: pickPlaces(["26", "7", "27", "6"]), // Чистые, Арбат, Никольская, Патрики
    },
  },
];
