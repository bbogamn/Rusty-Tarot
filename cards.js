const cards = [
  {
    "title": {
      "en": "The Fool",
      "ru": "Дурак"
    },
    "description": {
      "en": "James Vanderboom: Young and naive, taking the first step into the unknown by drinking a potion.",
      "ru": "Джеймс Вандербум: Молодой и наивный, делает первый шаг в неизвестность, пьёт зелье."
    },
    "image": "the_fool.jpg"
  },
  {
    "title": {
      "en": "The Magician",
      "ru": "Маг"
    },
    "description": {
      "en": "David Eilander / Mr. Rabbit: A manipulator of energy, transforming his body and mind for power.",
      "ru": "Дэвид Эйландер / Мистер Кролик: Манипулятор энергией, трансформирующий тело и разум ради власти."
    },
    "image": "the_magician.jpg"
  },
  {
    "title": {
      "en": "The High Priestess",
      "ru": "Верховная Жрица"
    },
    "description": {
      "en": "Ida Vanderboom: Mysterious figure connected to hidden knowledge and lunar intuition.",
      "ru": "Ида Вандербум: Таинственная фигура, связанная с тайными знаниями и лунной интуицией."
    },
    "image": "the_high_priestess.jpg"
  },
  {
    "title": {
      "en": "The Empress",
      "ru": "Императрица"
    },
    "description": {
      "en": "Rose Vanderboom: Symbol of life, motherhood, and beauty, created as a perfect being.",
      "ru": "Роуз Вандербум: Символ жизни, материнства и красоты, созданная как идеальное существо."
    },
    "image": "the_empress.jpg"
  },
  {
    "title": {
      "en": "The Emperor",
      "ru": "Император"
    },
    "description": {
      "en": "Jakob Eilander / Mr. Owl: Authority and structure, ruling through order and observation.",
      "ru": "Якоб Эйландер / Мистер Сова: Авторитет, контролирующий порядок и структуру через наблюдение."
    },
    "image": "the_emperor.jpg"
  },
  {
    "title": {
      "en": "The Hierophant",
      "ru": "Иерофант"
    },
    "description": {
      "en": "Nicholas Eilander / Mr. Deer: Teacher of old traditions and mystical wisdom of Rusty Lake.",
      "ru": "Николас Эйландер / Мистер Олень: Жрец, обучающий традициям и мистике Rusty Lake."
    },
    "image": "the_hierophant.jpg"
  },
  {
    "title": {
      "en": "The Lovers",
      "ru": "Влюблённые"
    },
    "description": {
      "en": "Mary Vanderboom: A choice between passion and duty, a love doomed to tragedy.",
      "ru": "Мэри Вандербум: Выбор между страстью и долгом, любовь, обречённая на трагедию."
    },
    "image": "the_lovers.jpg"
  },
  {
    "title": {
      "en": "The Chariot",
      "ru": "Колесница"
    },
    "description": {
      "en": "Dale Vandermeer: A detective driven by will and determination to uncover truth.",
      "ru": "Дейл Вандермер: Детектив, движимый волей и решимостью раскрыть правду."
    },
    "image": "the_chariot.jpg"
  },
  {
    "title": {
      "en": "Strength",
      "ru": "Сила"
    },
    "description": {
      "en": "Margaret Eilander / Mrs. Pigeon: Inner gentleness masking great strength.",
      "ru": "Маргарет Эйландер / Миссис Голубь: Внутренняя стойкость и доброта, скрывающая силу."
    },
    "image": "strength.jpg"
  },
  {
    "title": {
      "en": "The Hermit",
      "ru": "Отшельник"
    },
    "description": {
      "en": "Frank Vanderboom: Isolated in a well, searching for truth in solitude.",
      "ru": "Фрэнк Вандербум: Изолирован в колодце, ищет истину в одиночестве."
    },
    "image": "the_hermit.jpg"
  },
  {
    "title": {
      "en": "Card 11",
      "ru": "Карта 11"
    },
    "description": {
      "en": "Placeholder description in English for card 11.",
      "ru": "Заглушка описания на русском для карты 11."
    },
    "image": "card_11.jpg"
  },
  {
    "title": {
      "en": "Card 12",
      "ru": "Карта 12"
    },
    "description": {
      "en": "Placeholder description in English for card 12.",
      "ru": "Заглушка описания на русском для карты 12."
    },
    "image": "card_12.jpg"
  },
  {
    "title": {
      "en": "Card 13",
      "ru": "Карта 13"
    },
    "description": {
      "en": "Placeholder description in English for card 13.",
      "ru": "Заглушка описания на русском для карты 13."
    },
    "image": "card_13.jpg"
  },
  {
    "title": {
      "en": "Card 14",
      "ru": "Карта 14"
    },
    "description": {
      "en": "Placeholder description in English for card 14.",
      "ru": "Заглушка описания на русском для карты 14."
    },
    "image": "card_14.jpg"
  },
  {
    "title": {
      "en": "Card 15",
      "ru": "Карта 15"
    },
    "description": {
      "en": "Placeholder description in English for card 15.",
      "ru": "Заглушка описания на русском для карты 15."
    },
    "image": "card_15.jpg"
  },
  {
    "title": {
      "en": "Card 16",
      "ru": "Карта 16"
    },
    "description": {
      "en": "Placeholder description in English for card 16.",
      "ru": "Заглушка описания на русском для карты 16."
    },
    "image": "card_16.jpg"
  },
  {
    "title": {
      "en": "Card 17",
      "ru": "Карта 17"
    },
    "description": {
      "en": "Placeholder description in English for card 17.",
      "ru": "Заглушка описания на русском для карты 17."
    },
    "image": "card_17.jpg"
  },
  {
    "title": {
      "en": "Card 18",
      "ru": "Карта 18"
    },
    "description": {
      "en": "Placeholder description in English for card 18.",
      "ru": "Заглушка описания на русском для карты 18."
    },
    "image": "card_18.jpg"
  },
  {
    "title": {
      "en": "Card 19",
      "ru": "Карта 19"
    },
    "description": {
      "en": "Placeholder description in English for card 19.",
      "ru": "Заглушка описания на русском для карты 19."
    },
    "image": "card_19.jpg"
  },
  {
    "title": {
      "en": "Card 20",
      "ru": "Карта 20"
    },
    "description": {
      "en": "Placeholder description in English for card 20.",
      "ru": "Заглушка описания на русском для карты 20."
    },
    "image": "card_20.jpg"
  },
  {
    "title": {
      "en": "Card 21",
      "ru": "Карта 21"
    },
    "description": {
      "en": "Placeholder description in English for card 21.",
      "ru": "Заглушка описания на русском для карты 21."
    },
    "image": "card_21.jpg"
  },
  {
    "title": {
      "en": "Card 22",
      "ru": "Карта 22"
    },
    "description": {
      "en": "Placeholder description in English for card 22.",
      "ru": "Заглушка описания на русском для карты 22."
    },
    "image": "card_22.jpg"
  },
  {
    "title": {
      "en": "Card 23",
      "ru": "Карта 23"
    },
    "description": {
      "en": "Placeholder description in English for card 23.",
      "ru": "Заглушка описания на русском для карты 23."
    },
    "image": "card_23.jpg"
  },
  {
    "title": {
      "en": "Card 24",
      "ru": "Карта 24"
    },
    "description": {
      "en": "Placeholder description in English for card 24.",
      "ru": "Заглушка описания на русском для карты 24."
    },
    "image": "card_24.jpg"
  },
  {
    "title": {
      "en": "Card 25",
      "ru": "Карта 25"
    },
    "description": {
      "en": "Placeholder description in English for card 25.",
      "ru": "Заглушка описания на русском для карты 25."
    },
    "image": "card_25.jpg"
  },
  {
    "title": {
      "en": "Card 26",
      "ru": "Карта 26"
    },
    "description": {
      "en": "Placeholder description in English for card 26.",
      "ru": "Заглушка описания на русском для карты 26."
    },
    "image": "card_26.jpg"
  },
  {
    "title": {
      "en": "Card 27",
      "ru": "Карта 27"
    },
    "description": {
      "en": "Placeholder description in English for card 27.",
      "ru": "Заглушка описания на русском для карты 27."
    },
    "image": "card_27.jpg"
  },
  {
    "title": {
      "en": "Card 28",
      "ru": "Карта 28"
    },
    "description": {
      "en": "Placeholder description in English for card 28.",
      "ru": "Заглушка описания на русском для карты 28."
    },
    "image": "card_28.jpg"
  },
  {
    "title": {
      "en": "Card 29",
      "ru": "Карта 29"
    },
    "description": {
      "en": "Placeholder description in English for card 29.",
      "ru": "Заглушка описания на русском для карты 29."
    },
    "image": "card_29.jpg"
  },
  {
    "title": {
      "en": "Card 30",
      "ru": "Карта 30"
    },
    "description": {
      "en": "Placeholder description in English for card 30.",
      "ru": "Заглушка описания на русском для карты 30."
    },
    "image": "card_30.jpg"
  },
  {
    "title": {
      "en": "Card 31",
      "ru": "Карта 31"
    },
    "description": {
      "en": "Placeholder description in English for card 31.",
      "ru": "Заглушка описания на русском для карты 31."
    },
    "image": "card_31.jpg"
  },
  {
    "title": {
      "en": "Card 32",
      "ru": "Карта 32"
    },
    "description": {
      "en": "Placeholder description in English for card 32.",
      "ru": "Заглушка описания на русском для карты 32."
    },
    "image": "card_32.jpg"
  },
  {
    "title": {
      "en": "Card 33",
      "ru": "Карта 33"
    },
    "description": {
      "en": "Placeholder description in English for card 33.",
      "ru": "Заглушка описания на русском для карты 33."
    },
    "image": "card_33.jpg"
  },
  {
    "title": {
      "en": "Card 34",
      "ru": "Карта 34"
    },
    "description": {
      "en": "Placeholder description in English for card 34.",
      "ru": "Заглушка описания на русском для карты 34."
    },
    "image": "card_34.jpg"
  },
  {
    "title": {
      "en": "Card 35",
      "ru": "Карта 35"
    },
    "description": {
      "en": "Placeholder description in English for card 35.",
      "ru": "Заглушка описания на русском для карты 35."
    },
    "image": "card_35.jpg"
  },
  {
    "title": {
      "en": "Card 36",
      "ru": "Карта 36"
    },
    "description": {
      "en": "Placeholder description in English for card 36.",
      "ru": "Заглушка описания на русском для карты 36."
    },
    "image": "card_36.jpg"
  },
  {
    "title": {
      "en": "Card 37",
      "ru": "Карта 37"
    },
    "description": {
      "en": "Placeholder description in English for card 37.",
      "ru": "Заглушка описания на русском для карты 37."
    },
    "image": "card_37.jpg"
  },
  {
    "title": {
      "en": "Card 38",
      "ru": "Карта 38"
    },
    "description": {
      "en": "Placeholder description in English for card 38.",
      "ru": "Заглушка описания на русском для карты 38."
    },
    "image": "card_38.jpg"
  },
  {
    "title": {
      "en": "Card 39",
      "ru": "Карта 39"
    },
    "description": {
      "en": "Placeholder description in English for card 39.",
      "ru": "Заглушка описания на русском для карты 39."
    },
    "image": "card_39.jpg"
  },
  {
    "title": {
      "en": "Card 40",
      "ru": "Карта 40"
    },
    "description": {
      "en": "Placeholder description in English for card 40.",
      "ru": "Заглушка описания на русском для карты 40."
    },
    "image": "card_40.jpg"
  },
  {
    "title": {
      "en": "Card 41",
      "ru": "Карта 41"
    },
    "description": {
      "en": "Placeholder description in English for card 41.",
      "ru": "Заглушка описания на русском для карты 41."
    },
    "image": "card_41.jpg"
  },
  {
    "title": {
      "en": "Card 42",
      "ru": "Карта 42"
    },
    "description": {
      "en": "Placeholder description in English for card 42.",
      "ru": "Заглушка описания на русском для карты 42."
    },
    "image": "card_42.jpg"
  },
  {
    "title": {
      "en": "Card 43",
      "ru": "Карта 43"
    },
    "description": {
      "en": "Placeholder description in English for card 43.",
      "ru": "Заглушка описания на русском для карты 43."
    },
    "image": "card_43.jpg"
  },
  {
    "title": {
      "en": "Card 44",
      "ru": "Карта 44"
    },
    "description": {
      "en": "Placeholder description in English for card 44.",
      "ru": "Заглушка описания на русском для карты 44."
    },
    "image": "card_44.jpg"
  },
  {
    "title": {
      "en": "Card 45",
      "ru": "Карта 45"
    },
    "description": {
      "en": "Placeholder description in English for card 45.",
      "ru": "Заглушка описания на русском для карты 45."
    },
    "image": "card_45.jpg"
  },
  {
    "title": {
      "en": "Card 46",
      "ru": "Карта 46"
    },
    "description": {
      "en": "Placeholder description in English for card 46.",
      "ru": "Заглушка описания на русском для карты 46."
    },
    "image": "card_46.jpg"
  },
  {
    "title": {
      "en": "Card 47",
      "ru": "Карта 47"
    },
    "description": {
      "en": "Placeholder description in English for card 47.",
      "ru": "Заглушка описания на русском для карты 47."
    },
    "image": "card_47.jpg"
  },
  {
    "title": {
      "en": "Card 48",
      "ru": "Карта 48"
    },
    "description": {
      "en": "Placeholder description in English for card 48.",
      "ru": "Заглушка описания на русском для карты 48."
    },
    "image": "card_48.jpg"
  },
  {
    "title": {
      "en": "Card 49",
      "ru": "Карта 49"
    },
    "description": {
      "en": "Placeholder description in English for card 49.",
      "ru": "Заглушка описания на русском для карты 49."
    },
    "image": "card_49.jpg"
  },
  {
    "title": {
      "en": "Card 50",
      "ru": "Карта 50"
    },
    "description": {
      "en": "Placeholder description in English for card 50.",
      "ru": "Заглушка описания на русском для карты 50."
    },
    "image": "card_50.jpg"
  },
  {
    "title": {
      "en": "Card 51",
      "ru": "Карта 51"
    },
    "description": {
      "en": "Placeholder description in English for card 51.",
      "ru": "Заглушка описания на русском для карты 51."
    },
    "image": "card_51.jpg"
  },
  {
    "title": {
      "en": "Card 52",
      "ru": "Карта 52"
    },
    "description": {
      "en": "Placeholder description in English for card 52.",
      "ru": "Заглушка описания на русском для карты 52."
    },
    "image": "card_52.jpg"
  },
  {
    "title": {
      "en": "Card 53",
      "ru": "Карта 53"
    },
    "description": {
      "en": "Placeholder description in English for card 53.",
      "ru": "Заглушка описания на русском для карты 53."
    },
    "image": "card_53.jpg"
  },
  {
    "title": {
      "en": "Card 54",
      "ru": "Карта 54"
    },
    "description": {
      "en": "Placeholder description in English for card 54.",
      "ru": "Заглушка описания на русском для карты 54."
    },
    "image": "card_54.jpg"
  },
  {
    "title": {
      "en": "Card 55",
      "ru": "Карта 55"
    },
    "description": {
      "en": "Placeholder description in English for card 55.",
      "ru": "Заглушка описания на русском для карты 55."
    },
    "image": "card_55.jpg"
  },
  {
    "title": {
      "en": "Card 56",
      "ru": "Карта 56"
    },
    "description": {
      "en": "Placeholder description in English for card 56.",
      "ru": "Заглушка описания на русском для карты 56."
    },
    "image": "card_56.jpg"
  },
  {
    "title": {
      "en": "Card 57",
      "ru": "Карта 57"
    },
    "description": {
      "en": "Placeholder description in English for card 57.",
      "ru": "Заглушка описания на русском для карты 57."
    },
    "image": "card_57.jpg"
  },
  {
    "title": {
      "en": "Card 58",
      "ru": "Карта 58"
    },
    "description": {
      "en": "Placeholder description in English for card 58.",
      "ru": "Заглушка описания на русском для карты 58."
    },
    "image": "card_58.jpg"
  },
  {
    "title": {
      "en": "Card 59",
      "ru": "Карта 59"
    },
    "description": {
      "en": "Placeholder description in English for card 59.",
      "ru": "Заглушка описания на русском для карты 59."
    },
    "image": "card_59.jpg"
  },
  {
    "title": {
      "en": "Card 60",
      "ru": "Карта 60"
    },
    "description": {
      "en": "Placeholder description in English for card 60.",
      "ru": "Заглушка описания на русском для карты 60."
    },
    "image": "card_60.jpg"
  },
  {
    "title": {
      "en": "Card 61",
      "ru": "Карта 61"
    },
    "description": {
      "en": "Placeholder description in English for card 61.",
      "ru": "Заглушка описания на русском для карты 61."
    },
    "image": "card_61.jpg"
  },
  {
    "title": {
      "en": "Card 62",
      "ru": "Карта 62"
    },
    "description": {
      "en": "Placeholder description in English for card 62.",
      "ru": "Заглушка описания на русском для карты 62."
    },
    "image": "card_62.jpg"
  },
  {
    "title": {
      "en": "Card 63",
      "ru": "Карта 63"
    },
    "description": {
      "en": "Placeholder description in English for card 63.",
      "ru": "Заглушка описания на русском для карты 63."
    },
    "image": "card_63.jpg"
  },
  {
    "title": {
      "en": "Card 64",
      "ru": "Карта 64"
    },
    "description": {
      "en": "Placeholder description in English for card 64.",
      "ru": "Заглушка описания на русском для карты 64."
    },
    "image": "card_64.jpg"
  },
  {
    "title": {
      "en": "Card 65",
      "ru": "Карта 65"
    },
    "description": {
      "en": "Placeholder description in English for card 65.",
      "ru": "Заглушка описания на русском для карты 65."
    },
    "image": "card_65.jpg"
  },
  {
    "title": {
      "en": "Card 66",
      "ru": "Карта 66"
    },
    "description": {
      "en": "Placeholder description in English for card 66.",
      "ru": "Заглушка описания на русском для карты 66."
    },
    "image": "card_66.jpg"
  },
  {
    "title": {
      "en": "Card 67",
      "ru": "Карта 67"
    },
    "description": {
      "en": "Placeholder description in English for card 67.",
      "ru": "Заглушка описания на русском для карты 67."
    },
    "image": "card_67.jpg"
  },
  {
    "title": {
      "en": "Card 68",
      "ru": "Карта 68"
    },
    "description": {
      "en": "Placeholder description in English for card 68.",
      "ru": "Заглушка описания на русском для карты 68."
    },
    "image": "card_68.jpg"
  },
  {
    "title": {
      "en": "Card 69",
      "ru": "Карта 69"
    },
    "description": {
      "en": "Placeholder description in English for card 69.",
      "ru": "Заглушка описания на русском для карты 69."
    },
    "image": "card_69.jpg"
  },
  {
    "title": {
      "en": "Card 70",
      "ru": "Карта 70"
    },
    "description": {
      "en": "Placeholder description in English for card 70.",
      "ru": "Заглушка описания на русском для карты 70."
    },
    "image": "card_70.jpg"
  },
  {
    "title": {
      "en": "Card 71",
      "ru": "Карта 71"
    },
    "description": {
      "en": "Placeholder description in English for card 71.",
      "ru": "Заглушка описания на русском для карты 71."
    },
    "image": "card_71.jpg"
  },
  {
    "title": {
      "en": "Card 72",
      "ru": "Карта 72"
    },
    "description": {
      "en": "Placeholder description in English for card 72.",
      "ru": "Заглушка описания на русском для карты 72."
    },
    "image": "card_72.jpg"
  },
  {
    "title": {
      "en": "Card 73",
      "ru": "Карта 73"
    },
    "description": {
      "en": "Placeholder description in English for card 73.",
      "ru": "Заглушка описания на русском для карты 73."
    },
    "image": "card_73.jpg"
  },
  {
    "title": {
      "en": "Card 74",
      "ru": "Карта 74"
    },
    "description": {
      "en": "Placeholder description in English for card 74.",
      "ru": "Заглушка описания на русском для карты 74."
    },
    "image": "card_74.jpg"
  },
  {
    "title": {
      "en": "Card 75",
      "ru": "Карта 75"
    },
    "description": {
      "en": "Placeholder description in English for card 75.",
      "ru": "Заглушка описания на русском для карты 75."
    },
    "image": "card_75.jpg"
  },
  {
    "title": {
      "en": "Card 76",
      "ru": "Карта 76"
    },
    "description": {
      "en": "Placeholder description in English for card 76.",
      "ru": "Заглушка описания на русском для карты 76."
    },
    "image": "card_76.jpg"
  },
  {
    "title": {
      "en": "Card 77",
      "ru": "Карта 77"
    },
    "description": {
      "en": "Placeholder description in English for card 77.",
      "ru": "Заглушка описания на русском для карты 77."
    },
    "image": "card_77.jpg"
  },
  {
    "title": {
      "en": "Card 78",
      "ru": "Карта 78"
    },
    "description": {
      "en": "Placeholder description in English for card 78.",
      "ru": "Заглушка описания на русском для карты 78."
    },
    "image": "card_78.jpg"
  }
];