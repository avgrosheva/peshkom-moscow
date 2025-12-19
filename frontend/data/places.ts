import { IPlace } from "@/lib/types";
 
export const places: IPlace[] = [
  {
    _id: "1",
    name: "Парк Горького",
    coordinates: { lat: 55.729873, lng: 37.601206 },
    description:
      "Главный городской парк Москвы с набережной, велодорожками, зонами отдыха и современными кафе.",
    address: "Крымский Вал, 9",
    tags: [
      "погулять",
      "парки",
      "вид на воду",
      "для фото",
      "пикник",
      "лето",
      "спорт",
    ],
    rating: 4.9,
    reviews: [],
    image:
      "https://workingmama.ru/wp-content/uploads/2018/06/gorkogo.jpg",
  },
  {
    _id: "2",
    name: "ВДНХ",
    coordinates: { lat: 55.829992, lng: 37.633644 },
    description:
      "Огромный выставочный комплекс с фонтанами, павильонами, музеями и парком.",
    address: "Проспект Мира, 119",
    tags: [
      "погулять",
      "музеи",
      "архитектура",
      "для фото",
      "с детьми",
      "зима",
      "лето",
    ],
    rating: 4.8,
    reviews: [],
    image:
      "https://avatars.mds.yandex.net/get-altay/16182900/2a00000196cefd6fc150359ccf596bff4728/orig",
  },
  {
    _id: "3",
    name: "Парк Зарядье",
    coordinates: { lat: 55.752416, lng: 37.626589 },
    description:
      "Современный парк в центре Москвы с подвесным мостом, природными зонами и видами на Кремль.",
    address: "ул. Варварка, 6с1",
    tags: ["погулять", "панорама", "для фото", "вид на воду", "романтика"],
    rating: 4.7,
    reviews: [],
    image:
      "https://cdn.culture.ru/images/ab05ca87-aa43-5c29-911f-16bc40aebbef",
  },
  {
    _id: "4",
    name: "Москва-Сити",
    coordinates: { lat: 55.749722, lng: 37.537444 },
    description:
      "Деловой центр с небоскрёбами, смотровыми площадками и ресторанами с видами на город.",
    address: "Пресненская набережная, 12",
    tags: [
      "панорама",
      "ночная прогулка",
      "для фото",
      "поесть",
      "романтика",
      "движ",
    ],
    rating: 4.6,
    reviews: [],
    image:
      "https://cdn.ananasposter.ru/image/cache/catalog/poster/travel/83/12355-1000x830.jpg",
  },
  {
    _id: "5",
    name: "Коломенское",
    coordinates: { lat: 55.663968, lng: 37.663878 },
    description:
      "Исторический музей-заповедник с храмами, усадьбой и большими зелёными пространствами.",
    address: "проспект Андропова, 39",
    tags: ["погулять", "природа", "история", "пикник", "тихо", "с детьми"],
    rating: 4.8,
    reviews: [],
    image:
      "https://acropolis.org.ru/img/site/image/calennum9466/anons/eimg/65SghGgltZ25J3Gkd7Qfb1IC0Y0m79DR1lHJsUdK0tosbcqMsIZICipKJ4-8ZUMdfhZSVEa0JBaxV9AfEqVmN-Bx.jpg",
  },
  {
    _id: "6",
    name: "Патриаршие пруды",
    coordinates: { lat: 55.763338, lng: 37.588553 },
    description:
      "Атмосферный район в центре Москвы с прудом, старыми домами, кафе и барами.",
    address: "Патриарший переулок",
    tags: [
      "погулять",
      "кафе",
      "поесть",
      "для фото",
      "романтика",
      "тихо",
      "движ",
    ],
    rating: 4.8,
    reviews: [],
    image:
      "https://i.pinimg.com/736x/11/ef/b3/11efb3934bb0b8df8dd9809ca8e22c36.jpg",
  },
  {
    _id: "7",
    name: "Старый Арбат",
    coordinates: { lat: 55.752234, lng: 37.597163 },
    description:
      "Историческая пешеходная улица с уличными музыкантами, художниками и сувенирными лавками.",
    address: "ул. Арбат",
    tags: ["погулять", "для фото", "туристично", "движ", "кафе"],
    rating: 4.5,
    reviews: [],
    image:
      "https://www.brightestate.ru/sites/default/files/styles/1002x/public/uploads/blog/pokupka_kvartiry_na_starom_arbate_v_moskve_0.jpg",
  },
  {
    _id: "8",
    name: "Красная площадь",
    coordinates: { lat: 55.75393, lng: 37.620795 },
    description:
      "Главная площадь страны с выходом к Кремлю, ГУМу и собору Василия Блаженного.",
    address: "Красная площадь",
    tags: ["для фото", "история", "архитектура", "экскурсии", "туристично"],
    rating: 5.0,
    reviews: [],
    image:
      "https://resize.tripster.ru/Dq7fwNO18x5r5mNhP6wBgQbAavk=/fit-in/1200x1000/filters:no_upscale()/https://cdn.tripster.ru/photos/f9efc0e5-fd44-4f62-a1af-9b7a27ef1f39.jpg",
  },
  {
    _id: "9",
    name: "Храм Василия Блаженного",
    coordinates: { lat: 55.752507, lng: 37.623155 },
    description:
      "Знаменитый православный храм со сказочными куполами, один из главных символов Москвы.",
    address: "Красная площадь, 2",
    tags: ["для фото", "история", "архитектура", "экскурсии"],
    rating: 5.0,
    reviews: [],
    image:
      "https://avatars.mds.yandex.net/i?id=56bd7b307dd8a151987d6df93b6f6abb_l-8567615-images-thumbs&n=13",
  },
  {
    _id: "10",
    name: "Большой театр",
    coordinates: { lat: 55.760145, lng: 37.618522 },
    description:
      "Главный оперный и балетный театр России, памятник архитектуры и центр культурной жизни.",
    address: "Театральная площадь, 1",
    tags: ["искусство", "театр", "вечером", "архитектура", "для фото"],
    rating: 4.9,
    reviews: [],
    image:
      "https://www.bworldonline.com/wp-content/uploads/2023/12/Golden_Mask_2014_photographer_Dmitriy_Dubinskiy-WIKIMEDIA-COMMONS.jpg",
  },
  {
    _id: "11",
    name: "Останкинская башня",
    coordinates: { lat: 55.819523, lng: 37.611132 },
    description:
      "Телевизионная башня со смотровой площадкой и стеклянным полом, вид на всю Москву.",
    address: "ул. Академика Королёва, 15",
    tags: ["панорама", "для фото", "экскурсии", "романтика"],
    rating: 4.7,
    reviews: [],
    image:
      "https://avatars.mds.yandex.net/get-afishanew/5098259/39e65c78fe35e433c9d396c16d8b353e/960x690_noncrop",
  },
  {
    _id: "12",
    name: "Аптекарский огород",
    coordinates: { lat: 55.781933, lng: 37.632618 },
    description:
      "Ботанический сад МГУ с оранжереями, прудами и уютными дорожками.",
    address: "проспект Мира, 26, строение 5",
    tags: ["погулять", "природа", "тихо", "для фото", "зима", "лето"],
    rating: 4.8,
    reviews: [],
    image:
      "https://yandex-images.clstorage.net/ewZB56082/9bcf339YEWb/yi4Ay37wrA1rvcGuMRcWxYYA9bTU_CVzyqpXPG2eySC6ItwveC1DQRw9o87oHgpu-0mFvFO3s3umMW1xqzHTGg-4Fxdq4Pldfm3Ta6dDR4NUE3XxV_v5P4OnDHJnF1As8S3fbX9_AITK_aUBZN3R_iZdmWkK7LdyLTOp9DUui1bDtN4Re7zsAuI8B_352hsdyUIzeF1_Pr3OIkG44BsXLzer0GHwfYQLkTNszSpL3nkjWlprheH4dqt1oHx0rADZzbTeXfAwb8jqeQ5_c1ae1YSL9_tc8zW1T6aBf63R1GiyY1TkcL3CwJqz4U0vA5t5Jx2SpYzntLEiuym6tq_BnQOyWhu3cyEKqHdH_X5YUJAExjR3HHy2PQBjgfAn2t6neehQr7J6BA9cMKFH6gzc86Se2G1EJzr75_Qiu3LgwxHHcRhR9PtlQin1jfv_nBuWgAA8dB07MHlHJU00KBlSJHZj1W_4NIkGkfvrRu1FHDlqkVNlhe0wNew0YT2yqYvbQLKfHLU4JoznvY-5eZTcV8kLOz1Q_vU2ACNC8yaTXu2_6FgnPTiHilK1YcuqgVK_LhxSZwgqMrGu_qD3dm5L0k2xWVQ2NqXBIbDEffabV9BCwbqxFvayecilhnfoF5Dv_6LS47w4CgfU92kMaYxdOSJW2-JHrDO86vtmvjomRhNFMdBb_nQmiu1_Tr-5kFlQSAI_9FU0ejbPbwG-IpWfofkiH2ky8APPlfrgiivJFD4t1dwlxOaz-2Lxars848JfBLjfmbZ_LwnuPIk3MBVW20YJNDOUcf49yOxOeCnd3yf5Lt1ttT3DA184KIoiSNl25lEULIjhN7SmsGK0uyzMU4c8ltg0_aSC6zLJv3BbFpyEi_N0E7A0e4mkDDvmVhgjeWSRrPGyjEgVOqMHqo2f9micXGHHLbz7r_bhPfcgQllGupLZPPSngSgwQ_57W1cVyYpyed--d_qJLM89b0",
  },
  {
    _id: "13",
    name: "Парк Сокольники",
    coordinates: { lat: 55.793139, lng: 37.678498 },
    description:
      "Большой лесопарк с дорожками, прудами, веломаршрутами и зонами для активного отдыха.",
    address: "ул. Сокольнический Вал, 1",
    tags: [
      "погулять",
      "природа",
      "пикник",
      "пробежка",
      "с детьми",
      "спорт",
    ],
    rating: 4.6,
    reviews: [],
    image:
      "https://sokolniki.mos.ru/upload/medialibrary/133/e415r9zaie8dvoj4vvcyzn4r03zgylsk/photo_2022_09_27_16_28_27.jpg",
  },
  {
    _id: "14",
    name: "Парк Кузьминки",
    coordinates: { lat: 55.70084, lng: 37.76463 },
    description:
      "Природный парк с озёрами, мостиками, лугами и длинными прогулочными маршрутами.",
    address: "ул. Кузьминская",
    tags: ["погулять", "природа", "тихо", "пикник", "с детьми"],
    rating: 4.7,
    reviews: [],
    image:
      "https://www.mos.ru/upload/newsfeed/articles/9d1099b29b4b9a01ce89913ec2d753cd/DJI_0565.jpg",
  },
  {
    _id: "15",
    name: "Хамовники",
    coordinates: { lat: 55.731939, lng: 37.580154 },
    description:
      "Уютный район возле набережной с кофейнями, барами и тихими улочками.",
    address: "район Хамовники",
    tags: ["кафе", "поесть", "погулять", "тихо", "вечером"],
    rating: 4.8,
    reviews: [],
    image:
      "https://cdn.1000novostroek.ru/system/uploadeable_file/file/1057/5c1ccd4985600a68695c.jpg",
  },
  {
    _id: "16",
    name: "Нескучный сад",
    coordinates: { lat: 55.727657, lng: 37.595121 },
    description:
      "Лесопарк у набережной с лестницами, тропинками и видами на Москву-реку.",
    address: "Ленинский проспект, 30А",
    tags: ["погулять", "природа", "вид на воду", "пробежка"],
    rating: 4.7,
    reviews: [],
    image:
      "https://russpass.ru/event/_next/image?url=https%3A%2F%2Fcms.russpass.ru%2Fv1%2Ffile%2F623983ec29198409eb3cec3a&w=1920&q=75",
  },
  {
    _id: "17",
    name: "Воробьёвы горы (смотровая)",
    coordinates: { lat: 55.710059, lng: 37.552662 },
    description:
      "Классическая смотровая площадка с видом на Москву и Лужники, особенно красива на закате.",
    address: "ул. Косыгина",
    tags: [
      "панорама",
      "для фото",
      "посмотреть на закат",
      "романтика",
      "ночная прогулка",
    ],
    rating: 4.8,
    reviews: [],
    image:
      "https://i.pinimg.com/originals/f9/14/2f/f9142fbf19cc0d46f7444a1d6ac9cb26.jpg",
  },
  {
    _id: "18",
    name: "Краснопресненская набережная",
    coordinates: { lat: 55.7528, lng: 37.5407 },
    description:
      "Набережная с видами на Москва-Сити и реку, удачное место для вечерних прогулок.",
    address: "Краснопресненская наб.",
    tags: [
      "погулять",
      "вид на воду",
      "ночная прогулка",
      "для фото",
      "романтика",
    ],
    rating: 4.5,
    reviews: [],
    image:
      "https://as2.ftcdn.net/v2/jpg/01/75/82/93/1000_F_175829318_SbWQ8yiTdJYqVae7PI5iP8kIEaHYSlLk.jpg",
  },
  {
    _id: "19",
    name: "Смотровая в Москва-Сити",
    coordinates: { lat: 55.7489, lng: 37.5356 },
    description:
      "Смотровая площадка в одном из небоскрёбов, вид на город с высоты птичьего полёта.",
    address: "Башня Федерация / Империя",
    tags: ["панорама", "для фото", "романтика", "вечером"],
    rating: 4.7,
    reviews: [],
    image:
      "https://sk-moskvich.ru/attaches/files/47b903bd169db21d231762511dd0243e.jpg",
  },
  {
    _id: "20",
    name: "Парк Северное Тушино",
    coordinates: { lat: 55.8568, lng: 37.4367 },
    description:
      "Парк на берегу Химкинского водохранилища с пляжами, пирсами и кораблями-музеями.",
    address: "ул. Свободы, 56",
    tags: ["погулять", "вид на воду", "пикник", "с детьми", "лето"],
    rating: 4.6,
    reviews: [],
    image:
      "https://avatars.mds.yandex.net/i?id=b84789d5d9e6ec9a53e220e002364948_l-4019165-images-thumbs&n=13",
  },
  {
    _id: "21",
    name: "Парк Царицыно",
    coordinates: { lat: 55.6125, lng: 37.6699 },
    description:
      "Дворцово-парковый комплекс с прудами, мостиками и готическими дворцами.",
    address: "ул. Дольская, 1",
    tags: [
      "погулять",
      "архитектура",
      "для фото",
      "природа",
      "романтика",
      "с детьми",
    ],
    rating: 4.8,
    reviews: [],
    image:
      "https://img.pac.ru/landmarks/433703/big/8AA43A6E7F00010131AF9FF042E44F90.jpg",
  },
  {
    _id: "22",
    name: "Усадьба Архангельское",
    coordinates: { lat: 55.7891, lng: 37.2852 },
    description:
      "Историческая усадьба недалеко от Москвы с регулярным парком и видами на Москву-реку.",
    address: "Красногорский район, пос. Архангельское",
    tags: ["природа", "история", "для фото", "тихо", "пикник"],
    rating: 4.7,
    reviews: [],
    image:
      "https://static.mk.ru/upload/entities/2025/08/07/12/articles/facebookPicture/b1/c8/ac/cd/d01f1eafd1a3e6836813b9b2c0a3b12f.jpg",
  },
  {
    _id: "23",
    name: "Сергиев Посад (центр)",
    coordinates: { lat: 56.3153, lng: 38.1359 },
    description:
      "Город Золотого кольца с Лаврой, старой застройкой и прогулками по холмам.",
    address: "Сергиев Посад, центр города",
    tags: ["экскурсии", "история", "архитектура", "для фото", "из города"],
    rating: 4.8,
    reviews: [],
    image:
      "https://blog.ostrovok.ru/wp-content/uploads/2023/05/3%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-4.jpg",
  },
  {
    _id: "24",
    name: "Парк Музеон",
    coordinates: { lat: 55.7335, lng: 37.6051 },
    description:
      "Парк скульптур у Крымской набережной, много современных лавочек и видов.",
    address: "Крымский Вал, 2",
    tags: ["погулять", "для фото", "вид на воду", "искусство", "лето"],
    rating: 4.7,
    reviews: [],
    image:
      "https://www.mos.ru/upload/newsfeed/newsfeed/Muzeon-3780(1).jpg",
  },
  {
    _id: "25",
    name: "Новая Третьяковка",
    coordinates: { lat: 55.7363, lng: 37.6053 },
    description:
      "Музей современного искусства с постоянной экспозицией и временными выставками.",
    address: "Крымский Вал, 10",
    tags: ["музеи", "искусство", "для фото", "вечером"],
    rating: 4.7,
    reviews: [],
    image:
      "https://grafskiyhotel.ru/upload/resize_cache/iblock/919/1200_800_1/919361f0cd6c9b8a54d6a460e88997f2.jpg",
  },
  {
    _id: "26",
    name: "Чистые пруды",
    coordinates: { lat: 55.763482, lng: 37.644334 },
    description:
      "Небольшой бульвар и пруд в центре города, вокруг — кафе, кино и тихие улочки.",
    address: "Чистопрудный бульвар",
    tags: ["погулять", "кафе", "ночная прогулка", "для фото", "романтика"],
    rating: 4.6,
    reviews: [],
    image:
      "https://0d314c86-f76b-45cc-874e-45816116a667.selcdn.net/22ae8404-5743-4fb2-b4d2-1da03df7a601.jpg",
  },
  {
    _id: "27",
    name: "Никольская улица",
    coordinates: { lat: 55.7563, lng: 37.6226 },
    description:
      "Пешеходная улица у Красной площади, вечером вся в гирляндах и огнях.",
    address: "ул. Никольская",
    tags: [
      "погулять",
      "ночная прогулка",
      "для фото",
      "туристично",
      "движ",
    ],
    rating: 4.7,
    reviews: [],
    image:
      "https://cdn.tripster.ru/thumbs2/d610bec2-5ec2-11ed-b82c-261d4dea6cf7.1080x810.jpeg",
  },
  {
    _id: "28",
    name: "Симоновская набережная",
    coordinates: { lat: 55.7072, lng: 37.6633 },
    description:
      "Спокойная набережная Москвы-реки с видами на промзону, мосты и городские кварталы.",
    address: "Симоновская наб.",
    tags: ["погулять", "тихо", "вид на воду"],
    rating: 4.3,
    reviews: [],
    image:
      "https://tagan.mos.ru/upload/medialibrary/8bc/file6bk6298xo9g91g2sfzy.jpg",
  },
  {
    _id: "29",
    name: "ГЭС-2 / Дом культуры",
    coordinates: { lat: 55.7457, lng: 37.6163 },
    description:
      "Пространство современного искусства в здании бывшей электростанции, с парком и набережной.",
    address: "Болотная наб., 15",
    tags: ["искусство", "для фото", "погулять", "кафе"],
    rating: 4.8,
    reviews: [],
    image:
      "https://cdn.v-a-c.org/v-a-c-static/store/setkaimage/70fc57bb-9a61-42e2-9cd4-d64daa5bdf95/image/c7b3027856af76971718cad6221872fe.jpg",
  },
  {
    _id: "30",
    name: "Даниловский рынок",
    coordinates: { lat: 55.7082, lng: 37.6223 },
    description:
      "Популярный фудкорт-рынок с кухнями со всего мира, десертами и атмосферой выходного дня.",
    address: "Мытная ул., 74",
    tags: ["поесть", "кафе", "движ", "для компании"],
    rating: 4.6,
    reviews: [],
    image:
      "https://91.ru/wp-content/uploads/2021/07/title2.jpg",
  },
];
