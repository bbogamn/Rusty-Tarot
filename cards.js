const cards = [
  {
    "title": {
      "en": "Card 1",
      "ru": "Карта 1"
    },
    "character": {
      "en": "Character 1",
      "ru": "Персонаж 1"
    },
    "description": {
      "en": "Description of card 1.",
      "ru": "Описание карты 1."
    },
    "upright": {
      "en": "Upright meaning of card 1.",
      "ru": "Прямое значение карты 1."
    },
    "reversed": {
      "en": "Reversed meaning of card 1.",
      "ru": "Перевернутое значение карты 1."
    },
    "suit": "major",
    "image": "images/card_1.jpg"
  },
  {
    "title": {
      "en": "Card 2",
      "ru": "Карта 2"
    },
    "character": {
      "en": "Character 2",
      "ru": "Персонаж 2"
    },
    "description": {
      "en": "Description of card 2.",
      "ru": "Описание карты 2."
    },
    "upright": {
      "en": "Upright meaning of card 2.",
      "ru": "Прямое значение карты 2."
    },
    "reversed": {
      "en": "Reversed meaning of card 2.",
      "ru": "Перевернутое значение карты 2."
    },
    "suit": "major",
    "image": "images/card_2.jpg"
  },
  {
    "title": {
      "en": "Card 3",
      "ru": "Карта 3"
    },
    "character": {
      "en": "Character 3",
      "ru": "Персонаж 3"
    },
    "description": {
      "en": "Description of card 3.",
      "ru": "Описание карты 3."
    },
    "upright": {
      "en": "Upright meaning of card 3.",
      "ru": "Прямое значение карты 3."
    },
    "reversed": {
      "en": "Reversed meaning of card 3.",
      "ru": "Перевернутое значение карты 3."
    },
    "suit": "major",
    "image": "images/card_3.jpg"
  },
  {
    "title": {
      "en": "Card 4",
      "ru": "Карта 4"
    },
    "character": {
      "en": "Character 4",
      "ru": "Персонаж 4"
    },
    "description": {
      "en": "Description of card 4.",
      "ru": "Описание карты 4."
    },
    "upright": {
      "en": "Upright meaning of card 4.",
      "ru": "Прямое значение карты 4."
    },
    "reversed": {
      "en": "Reversed meaning of card 4.",
      "ru": "Перевернутое значение карты 4."
    },
    "suit": "major",
    "image": "images/card_4.jpg"
  },
  {
    "title": {
      "en": "Card 5",
      "ru": "Карта 5"
    },
    "character": {
      "en": "Character 5",
      "ru": "Персонаж 5"
    },
    "description": {
      "en": "Description of card 5.",
      "ru": "Описание карты 5."
    },
    "upright": {
      "en": "Upright meaning of card 5.",
      "ru": "Прямое значение карты 5."
    },
    "reversed": {
      "en": "Reversed meaning of card 5.",
      "ru": "Перевернутое значение карты 5."
    },
    "suit": "major",
    "image": "images/card_5.jpg"
  },
  {
    "title": {
      "en": "Card 6",
      "ru": "Карта 6"
    },
    "character": {
      "en": "Character 6",
      "ru": "Персонаж 6"
    },
    "description": {
      "en": "Description of card 6.",
      "ru": "Описание карты 6."
    },
    "upright": {
      "en": "Upright meaning of card 6.",
      "ru": "Прямое значение карты 6."
    },
    "reversed": {
      "en": "Reversed meaning of card 6.",
      "ru": "Перевернутое значение карты 6."
    },
    "suit": "major",
    "image": "images/card_6.jpg"
  },
  {
    "title": {
      "en": "Card 7",
      "ru": "Карта 7"
    },
    "character": {
      "en": "Character 7",
      "ru": "Персонаж 7"
    },
    "description": {
      "en": "Description of card 7.",
      "ru": "Описание карты 7."
    },
    "upright": {
      "en": "Upright meaning of card 7.",
      "ru": "Прямое значение карты 7."
    },
    "reversed": {
      "en": "Reversed meaning of card 7.",
      "ru": "Перевернутое значение карты 7."
    },
    "suit": "major",
    "image": "images/card_7.jpg"
  },
  {
    "title": {
      "en": "Card 8",
      "ru": "Карта 8"
    },
    "character": {
      "en": "Character 8",
      "ru": "Персонаж 8"
    },
    "description": {
      "en": "Description of card 8.",
      "ru": "Описание карты 8."
    },
    "upright": {
      "en": "Upright meaning of card 8.",
      "ru": "Прямое значение карты 8."
    },
    "reversed": {
      "en": "Reversed meaning of card 8.",
      "ru": "Перевернутое значение карты 8."
    },
    "suit": "major",
    "image": "images/card_8.jpg"
  },
  {
    "title": {
      "en": "Card 9",
      "ru": "Карта 9"
    },
    "character": {
      "en": "Character 9",
      "ru": "Персонаж 9"
    },
    "description": {
      "en": "Description of card 9.",
      "ru": "Описание карты 9."
    },
    "upright": {
      "en": "Upright meaning of card 9.",
      "ru": "Прямое значение карты 9."
    },
    "reversed": {
      "en": "Reversed meaning of card 9.",
      "ru": "Перевернутое значение карты 9."
    },
    "suit": "major",
    "image": "images/card_9.jpg"
  },
  {
    "title": {
      "en": "Card 10",
      "ru": "Карта 10"
    },
    "character": {
      "en": "Character 10",
      "ru": "Персонаж 10"
    },
    "description": {
      "en": "Description of card 10.",
      "ru": "Описание карты 10."
    },
    "upright": {
      "en": "Upright meaning of card 10.",
      "ru": "Прямое значение карты 10."
    },
    "reversed": {
      "en": "Reversed meaning of card 10.",
      "ru": "Перевернутое значение карты 10."
    },
    "suit": "major",
    "image": "images/card_10.jpg"
  },
  {
    "title": {
      "en": "Card 11",
      "ru": "Карта 11"
    },
    "character": {
      "en": "Character 11",
      "ru": "Персонаж 11"
    },
    "description": {
      "en": "Description of card 11.",
      "ru": "Описание карты 11."
    },
    "upright": {
      "en": "Upright meaning of card 11.",
      "ru": "Прямое значение карты 11."
    },
    "reversed": {
      "en": "Reversed meaning of card 11.",
      "ru": "Перевернутое значение карты 11."
    },
    "suit": "major",
    "image": "images/card_11.jpg"
  },
  {
    "title": {
      "en": "Card 12",
      "ru": "Карта 12"
    },
    "character": {
      "en": "Character 12",
      "ru": "Персонаж 12"
    },
    "description": {
      "en": "Description of card 12.",
      "ru": "Описание карты 12."
    },
    "upright": {
      "en": "Upright meaning of card 12.",
      "ru": "Прямое значение карты 12."
    },
    "reversed": {
      "en": "Reversed meaning of card 12.",
      "ru": "Перевернутое значение карты 12."
    },
    "suit": "major",
    "image": "images/card_12.jpg"
  },
  {
    "title": {
      "en": "Card 13",
      "ru": "Карта 13"
    },
    "character": {
      "en": "Character 13",
      "ru": "Персонаж 13"
    },
    "description": {
      "en": "Description of card 13.",
      "ru": "Описание карты 13."
    },
    "upright": {
      "en": "Upright meaning of card 13.",
      "ru": "Прямое значение карты 13."
    },
    "reversed": {
      "en": "Reversed meaning of card 13.",
      "ru": "Перевернутое значение карты 13."
    },
    "suit": "major",
    "image": "images/card_13.jpg"
  },
  {
    "title": {
      "en": "Card 14",
      "ru": "Карта 14"
    },
    "character": {
      "en": "Character 14",
      "ru": "Персонаж 14"
    },
    "description": {
      "en": "Description of card 14.",
      "ru": "Описание карты 14."
    },
    "upright": {
      "en": "Upright meaning of card 14.",
      "ru": "Прямое значение карты 14."
    },
    "reversed": {
      "en": "Reversed meaning of card 14.",
      "ru": "Перевернутое значение карты 14."
    },
    "suit": "major",
    "image": "images/card_14.jpg"
  },
  {
    "title": {
      "en": "Card 15",
      "ru": "Карта 15"
    },
    "character": {
      "en": "Character 15",
      "ru": "Персонаж 15"
    },
    "description": {
      "en": "Description of card 15.",
      "ru": "Описание карты 15."
    },
    "upright": {
      "en": "Upright meaning of card 15.",
      "ru": "Прямое значение карты 15."
    },
    "reversed": {
      "en": "Reversed meaning of card 15.",
      "ru": "Перевернутое значение карты 15."
    },
    "suit": "major",
    "image": "images/card_15.jpg"
  },
  {
    "title": {
      "en": "Card 16",
      "ru": "Карта 16"
    },
    "character": {
      "en": "Character 16",
      "ru": "Персонаж 16"
    },
    "description": {
      "en": "Description of card 16.",
      "ru": "Описание карты 16."
    },
    "upright": {
      "en": "Upright meaning of card 16.",
      "ru": "Прямое значение карты 16."
    },
    "reversed": {
      "en": "Reversed meaning of card 16.",
      "ru": "Перевернутое значение карты 16."
    },
    "suit": "major",
    "image": "images/card_16.jpg"
  },
  {
    "title": {
      "en": "Card 17",
      "ru": "Карта 17"
    },
    "character": {
      "en": "Character 17",
      "ru": "Персонаж 17"
    },
    "description": {
      "en": "Description of card 17.",
      "ru": "Описание карты 17."
    },
    "upright": {
      "en": "Upright meaning of card 17.",
      "ru": "Прямое значение карты 17."
    },
    "reversed": {
      "en": "Reversed meaning of card 17.",
      "ru": "Перевернутое значение карты 17."
    },
    "suit": "major",
    "image": "images/card_17.jpg"
  },
  {
    "title": {
      "en": "Card 18",
      "ru": "Карта 18"
    },
    "character": {
      "en": "Character 18",
      "ru": "Персонаж 18"
    },
    "description": {
      "en": "Description of card 18.",
      "ru": "Описание карты 18."
    },
    "upright": {
      "en": "Upright meaning of card 18.",
      "ru": "Прямое значение карты 18."
    },
    "reversed": {
      "en": "Reversed meaning of card 18.",
      "ru": "Перевернутое значение карты 18."
    },
    "suit": "major",
    "image": "images/card_18.jpg"
  },
  {
    "title": {
      "en": "Card 19",
      "ru": "Карта 19"
    },
    "character": {
      "en": "Character 19",
      "ru": "Персонаж 19"
    },
    "description": {
      "en": "Description of card 19.",
      "ru": "Описание карты 19."
    },
    "upright": {
      "en": "Upright meaning of card 19.",
      "ru": "Прямое значение карты 19."
    },
    "reversed": {
      "en": "Reversed meaning of card 19.",
      "ru": "Перевернутое значение карты 19."
    },
    "suit": "major",
    "image": "images/card_19.jpg"
  },
  {
    "title": {
      "en": "Card 20",
      "ru": "Карта 20"
    },
    "character": {
      "en": "Character 20",
      "ru": "Персонаж 20"
    },
    "description": {
      "en": "Description of card 20.",
      "ru": "Описание карты 20."
    },
    "upright": {
      "en": "Upright meaning of card 20.",
      "ru": "Прямое значение карты 20."
    },
    "reversed": {
      "en": "Reversed meaning of card 20.",
      "ru": "Перевернутое значение карты 20."
    },
    "suit": "major",
    "image": "images/card_20.jpg"
  },
  {
    "title": {
      "en": "Card 21",
      "ru": "Карта 21"
    },
    "character": {
      "en": "Character 21",
      "ru": "Персонаж 21"
    },
    "description": {
      "en": "Description of card 21.",
      "ru": "Описание карты 21."
    },
    "upright": {
      "en": "Upright meaning of card 21.",
      "ru": "Прямое значение карты 21."
    },
    "reversed": {
      "en": "Reversed meaning of card 21.",
      "ru": "Перевернутое значение карты 21."
    },
    "suit": "major",
    "image": "images/card_21.jpg"
  },
  {
    "title": {
      "en": "Card 22",
      "ru": "Карта 22"
    },
    "character": {
      "en": "Character 22",
      "ru": "Персонаж 22"
    },
    "description": {
      "en": "Description of card 22.",
      "ru": "Описание карты 22."
    },
    "upright": {
      "en": "Upright meaning of card 22.",
      "ru": "Прямое значение карты 22."
    },
    "reversed": {
      "en": "Reversed meaning of card 22.",
      "ru": "Перевернутое значение карты 22."
    },
    "suit": "major",
    "image": "images/card_22.jpg"
  },
  {
    "title": {
      "en": "Card 23",
      "ru": "Карта 23"
    },
    "character": {
      "en": "Character 23",
      "ru": "Персонаж 23"
    },
    "description": {
      "en": "Description of card 23.",
      "ru": "Описание карты 23."
    },
    "upright": {
      "en": "Upright meaning of card 23.",
      "ru": "Прямое значение карты 23."
    },
    "reversed": {
      "en": "Reversed meaning of card 23.",
      "ru": "Перевернутое значение карты 23."
    },
    "suit": "wands",
    "image": "images/card_23.jpg"
  },
  {
    "title": {
      "en": "Card 24",
      "ru": "Карта 24"
    },
    "character": {
      "en": "Character 24",
      "ru": "Персонаж 24"
    },
    "description": {
      "en": "Description of card 24.",
      "ru": "Описание карты 24."
    },
    "upright": {
      "en": "Upright meaning of card 24.",
      "ru": "Прямое значение карты 24."
    },
    "reversed": {
      "en": "Reversed meaning of card 24.",
      "ru": "Перевернутое значение карты 24."
    },
    "suit": "wands",
    "image": "images/card_24.jpg"
  },
  {
    "title": {
      "en": "Card 25",
      "ru": "Карта 25"
    },
    "character": {
      "en": "Character 25",
      "ru": "Персонаж 25"
    },
    "description": {
      "en": "Description of card 25.",
      "ru": "Описание карты 25."
    },
    "upright": {
      "en": "Upright meaning of card 25.",
      "ru": "Прямое значение карты 25."
    },
    "reversed": {
      "en": "Reversed meaning of card 25.",
      "ru": "Перевернутое значение карты 25."
    },
    "suit": "wands",
    "image": "images/card_25.jpg"
  },
  {
    "title": {
      "en": "Card 26",
      "ru": "Карта 26"
    },
    "character": {
      "en": "Character 26",
      "ru": "Персонаж 26"
    },
    "description": {
      "en": "Description of card 26.",
      "ru": "Описание карты 26."
    },
    "upright": {
      "en": "Upright meaning of card 26.",
      "ru": "Прямое значение карты 26."
    },
    "reversed": {
      "en": "Reversed meaning of card 26.",
      "ru": "Перевернутое значение карты 26."
    },
    "suit": "wands",
    "image": "images/card_26.jpg"
  },
  {
    "title": {
      "en": "Card 27",
      "ru": "Карта 27"
    },
    "character": {
      "en": "Character 27",
      "ru": "Персонаж 27"
    },
    "description": {
      "en": "Description of card 27.",
      "ru": "Описание карты 27."
    },
    "upright": {
      "en": "Upright meaning of card 27.",
      "ru": "Прямое значение карты 27."
    },
    "reversed": {
      "en": "Reversed meaning of card 27.",
      "ru": "Перевернутое значение карты 27."
    },
    "suit": "wands",
    "image": "images/card_27.jpg"
  },
  {
    "title": {
      "en": "Card 28",
      "ru": "Карта 28"
    },
    "character": {
      "en": "Character 28",
      "ru": "Персонаж 28"
    },
    "description": {
      "en": "Description of card 28.",
      "ru": "Описание карты 28."
    },
    "upright": {
      "en": "Upright meaning of card 28.",
      "ru": "Прямое значение карты 28."
    },
    "reversed": {
      "en": "Reversed meaning of card 28.",
      "ru": "Перевернутое значение карты 28."
    },
    "suit": "wands",
    "image": "images/card_28.jpg"
  },
  {
    "title": {
      "en": "Card 29",
      "ru": "Карта 29"
    },
    "character": {
      "en": "Character 29",
      "ru": "Персонаж 29"
    },
    "description": {
      "en": "Description of card 29.",
      "ru": "Описание карты 29."
    },
    "upright": {
      "en": "Upright meaning of card 29.",
      "ru": "Прямое значение карты 29."
    },
    "reversed": {
      "en": "Reversed meaning of card 29.",
      "ru": "Перевернутое значение карты 29."
    },
    "suit": "wands",
    "image": "images/card_29.jpg"
  },
  {
    "title": {
      "en": "Card 30",
      "ru": "Карта 30"
    },
    "character": {
      "en": "Character 30",
      "ru": "Персонаж 30"
    },
    "description": {
      "en": "Description of card 30.",
      "ru": "Описание карты 30."
    },
    "upright": {
      "en": "Upright meaning of card 30.",
      "ru": "Прямое значение карты 30."
    },
    "reversed": {
      "en": "Reversed meaning of card 30.",
      "ru": "Перевернутое значение карты 30."
    },
    "suit": "wands",
    "image": "images/card_30.jpg"
  },
  {
    "title": {
      "en": "Card 31",
      "ru": "Карта 31"
    },
    "character": {
      "en": "Character 31",
      "ru": "Персонаж 31"
    },
    "description": {
      "en": "Description of card 31.",
      "ru": "Описание карты 31."
    },
    "upright": {
      "en": "Upright meaning of card 31.",
      "ru": "Прямое значение карты 31."
    },
    "reversed": {
      "en": "Reversed meaning of card 31.",
      "ru": "Перевернутое значение карты 31."
    },
    "suit": "wands",
    "image": "images/card_31.jpg"
  },
  {
    "title": {
      "en": "Card 32",
      "ru": "Карта 32"
    },
    "character": {
      "en": "Character 32",
      "ru": "Персонаж 32"
    },
    "description": {
      "en": "Description of card 32.",
      "ru": "Описание карты 32."
    },
    "upright": {
      "en": "Upright meaning of card 32.",
      "ru": "Прямое значение карты 32."
    },
    "reversed": {
      "en": "Reversed meaning of card 32.",
      "ru": "Перевернутое значение карты 32."
    },
    "suit": "wands",
    "image": "images/card_32.jpg"
  },
  {
    "title": {
      "en": "Card 33",
      "ru": "Карта 33"
    },
    "character": {
      "en": "Character 33",
      "ru": "Персонаж 33"
    },
    "description": {
      "en": "Description of card 33.",
      "ru": "Описание карты 33."
    },
    "upright": {
      "en": "Upright meaning of card 33.",
      "ru": "Прямое значение карты 33."
    },
    "reversed": {
      "en": "Reversed meaning of card 33.",
      "ru": "Перевернутое значение карты 33."
    },
    "suit": "wands",
    "image": "images/card_33.jpg"
  },
  {
    "title": {
      "en": "Card 34",
      "ru": "Карта 34"
    },
    "character": {
      "en": "Character 34",
      "ru": "Персонаж 34"
    },
    "description": {
      "en": "Description of card 34.",
      "ru": "Описание карты 34."
    },
    "upright": {
      "en": "Upright meaning of card 34.",
      "ru": "Прямое значение карты 34."
    },
    "reversed": {
      "en": "Reversed meaning of card 34.",
      "ru": "Перевернутое значение карты 34."
    },
    "suit": "wands",
    "image": "images/card_34.jpg"
  },
  {
    "title": {
      "en": "Card 35",
      "ru": "Карта 35"
    },
    "character": {
      "en": "Character 35",
      "ru": "Персонаж 35"
    },
    "description": {
      "en": "Description of card 35.",
      "ru": "Описание карты 35."
    },
    "upright": {
      "en": "Upright meaning of card 35.",
      "ru": "Прямое значение карты 35."
    },
    "reversed": {
      "en": "Reversed meaning of card 35.",
      "ru": "Перевернутое значение карты 35."
    },
    "suit": "wands",
    "image": "images/card_35.jpg"
  },
  {
    "title": {
      "en": "Card 36",
      "ru": "Карта 36"
    },
    "character": {
      "en": "Character 36",
      "ru": "Персонаж 36"
    },
    "description": {
      "en": "Description of card 36.",
      "ru": "Описание карты 36."
    },
    "upright": {
      "en": "Upright meaning of card 36.",
      "ru": "Прямое значение карты 36."
    },
    "reversed": {
      "en": "Reversed meaning of card 36.",
      "ru": "Перевернутое значение карты 36."
    },
    "suit": "wands",
    "image": "images/card_36.jpg"
  },
  {
    "title": {
      "en": "Card 37",
      "ru": "Карта 37"
    },
    "character": {
      "en": "Character 37",
      "ru": "Персонаж 37"
    },
    "description": {
      "en": "Description of card 37.",
      "ru": "Описание карты 37."
    },
    "upright": {
      "en": "Upright meaning of card 37.",
      "ru": "Прямое значение карты 37."
    },
    "reversed": {
      "en": "Reversed meaning of card 37.",
      "ru": "Перевернутое значение карты 37."
    },
    "suit": "cups",
    "image": "images/card_37.jpg"
  },
  {
    "title": {
      "en": "Card 38",
      "ru": "Карта 38"
    },
    "character": {
      "en": "Character 38",
      "ru": "Персонаж 38"
    },
    "description": {
      "en": "Description of card 38.",
      "ru": "Описание карты 38."
    },
    "upright": {
      "en": "Upright meaning of card 38.",
      "ru": "Прямое значение карты 38."
    },
    "reversed": {
      "en": "Reversed meaning of card 38.",
      "ru": "Перевернутое значение карты 38."
    },
    "suit": "cups",
    "image": "images/card_38.jpg"
  },
  {
    "title": {
      "en": "Card 39",
      "ru": "Карта 39"
    },
    "character": {
      "en": "Character 39",
      "ru": "Персонаж 39"
    },
    "description": {
      "en": "Description of card 39.",
      "ru": "Описание карты 39."
    },
    "upright": {
      "en": "Upright meaning of card 39.",
      "ru": "Прямое значение карты 39."
    },
    "reversed": {
      "en": "Reversed meaning of card 39.",
      "ru": "Перевернутое значение карты 39."
    },
    "suit": "cups",
    "image": "images/card_39.jpg"
  },
  {
    "title": {
      "en": "Card 40",
      "ru": "Карта 40"
    },
    "character": {
      "en": "Character 40",
      "ru": "Персонаж 40"
    },
    "description": {
      "en": "Description of card 40.",
      "ru": "Описание карты 40."
    },
    "upright": {
      "en": "Upright meaning of card 40.",
      "ru": "Прямое значение карты 40."
    },
    "reversed": {
      "en": "Reversed meaning of card 40.",
      "ru": "Перевернутое значение карты 40."
    },
    "suit": "cups",
    "image": "images/card_40.jpg"
  },
  {
    "title": {
      "en": "Card 41",
      "ru": "Карта 41"
    },
    "character": {
      "en": "Character 41",
      "ru": "Персонаж 41"
    },
    "description": {
      "en": "Description of card 41.",
      "ru": "Описание карты 41."
    },
    "upright": {
      "en": "Upright meaning of card 41.",
      "ru": "Прямое значение карты 41."
    },
    "reversed": {
      "en": "Reversed meaning of card 41.",
      "ru": "Перевернутое значение карты 41."
    },
    "suit": "cups",
    "image": "images/card_41.jpg"
  },
  {
    "title": {
      "en": "Card 42",
      "ru": "Карта 42"
    },
    "character": {
      "en": "Character 42",
      "ru": "Персонаж 42"
    },
    "description": {
      "en": "Description of card 42.",
      "ru": "Описание карты 42."
    },
    "upright": {
      "en": "Upright meaning of card 42.",
      "ru": "Прямое значение карты 42."
    },
    "reversed": {
      "en": "Reversed meaning of card 42.",
      "ru": "Перевернутое значение карты 42."
    },
    "suit": "cups",
    "image": "images/card_42.jpg"
  },
  {
    "title": {
      "en": "Card 43",
      "ru": "Карта 43"
    },
    "character": {
      "en": "Character 43",
      "ru": "Персонаж 43"
    },
    "description": {
      "en": "Description of card 43.",
      "ru": "Описание карты 43."
    },
    "upright": {
      "en": "Upright meaning of card 43.",
      "ru": "Прямое значение карты 43."
    },
    "reversed": {
      "en": "Reversed meaning of card 43.",
      "ru": "Перевернутое значение карты 43."
    },
    "suit": "cups",
    "image": "images/card_43.jpg"
  },
  {
    "title": {
      "en": "Card 44",
      "ru": "Карта 44"
    },
    "character": {
      "en": "Character 44",
      "ru": "Персонаж 44"
    },
    "description": {
      "en": "Description of card 44.",
      "ru": "Описание карты 44."
    },
    "upright": {
      "en": "Upright meaning of card 44.",
      "ru": "Прямое значение карты 44."
    },
    "reversed": {
      "en": "Reversed meaning of card 44.",
      "ru": "Перевернутое значение карты 44."
    },
    "suit": "cups",
    "image": "images/card_44.jpg"
  },
  {
    "title": {
      "en": "Card 45",
      "ru": "Карта 45"
    },
    "character": {
      "en": "Character 45",
      "ru": "Персонаж 45"
    },
    "description": {
      "en": "Description of card 45.",
      "ru": "Описание карты 45."
    },
    "upright": {
      "en": "Upright meaning of card 45.",
      "ru": "Прямое значение карты 45."
    },
    "reversed": {
      "en": "Reversed meaning of card 45.",
      "ru": "Перевернутое значение карты 45."
    },
    "suit": "cups",
    "image": "images/card_45.jpg"
  },
  {
    "title": {
      "en": "Card 46",
      "ru": "Карта 46"
    },
    "character": {
      "en": "Character 46",
      "ru": "Персонаж 46"
    },
    "description": {
      "en": "Description of card 46.",
      "ru": "Описание карты 46."
    },
    "upright": {
      "en": "Upright meaning of card 46.",
      "ru": "Прямое значение карты 46."
    },
    "reversed": {
      "en": "Reversed meaning of card 46.",
      "ru": "Перевернутое значение карты 46."
    },
    "suit": "cups",
    "image": "images/card_46.jpg"
  },
  {
    "title": {
      "en": "Card 47",
      "ru": "Карта 47"
    },
    "character": {
      "en": "Character 47",
      "ru": "Персонаж 47"
    },
    "description": {
      "en": "Description of card 47.",
      "ru": "Описание карты 47."
    },
    "upright": {
      "en": "Upright meaning of card 47.",
      "ru": "Прямое значение карты 47."
    },
    "reversed": {
      "en": "Reversed meaning of card 47.",
      "ru": "Перевернутое значение карты 47."
    },
    "suit": "cups",
    "image": "images/card_47.jpg"
  },
  {
    "title": {
      "en": "Card 48",
      "ru": "Карта 48"
    },
    "character": {
      "en": "Character 48",
      "ru": "Персонаж 48"
    },
    "description": {
      "en": "Description of card 48.",
      "ru": "Описание карты 48."
    },
    "upright": {
      "en": "Upright meaning of card 48.",
      "ru": "Прямое значение карты 48."
    },
    "reversed": {
      "en": "Reversed meaning of card 48.",
      "ru": "Перевернутое значение карты 48."
    },
    "suit": "cups",
    "image": "images/card_48.jpg"
  },
  {
    "title": {
      "en": "Card 49",
      "ru": "Карта 49"
    },
    "character": {
      "en": "Character 49",
      "ru": "Персонаж 49"
    },
    "description": {
      "en": "Description of card 49.",
      "ru": "Описание карты 49."
    },
    "upright": {
      "en": "Upright meaning of card 49.",
      "ru": "Прямое значение карты 49."
    },
    "reversed": {
      "en": "Reversed meaning of card 49.",
      "ru": "Перевернутое значение карты 49."
    },
    "suit": "cups",
    "image": "images/card_49.jpg"
  },
  {
    "title": {
      "en": "Card 50",
      "ru": "Карта 50"
    },
    "character": {
      "en": "Character 50",
      "ru": "Персонаж 50"
    },
    "description": {
      "en": "Description of card 50.",
      "ru": "Описание карты 50."
    },
    "upright": {
      "en": "Upright meaning of card 50.",
      "ru": "Прямое значение карты 50."
    },
    "reversed": {
      "en": "Reversed meaning of card 50.",
      "ru": "Перевернутое значение карты 50."
    },
    "suit": "cups",
    "image": "images/card_50.jpg"
  },
  {
    "title": {
      "en": "Card 51",
      "ru": "Карта 51"
    },
    "character": {
      "en": "Character 51",
      "ru": "Персонаж 51"
    },
    "description": {
      "en": "Description of card 51.",
      "ru": "Описание карты 51."
    },
    "upright": {
      "en": "Upright meaning of card 51.",
      "ru": "Прямое значение карты 51."
    },
    "reversed": {
      "en": "Reversed meaning of card 51.",
      "ru": "Перевернутое значение карты 51."
    },
    "suit": "swords",
    "image": "images/card_51.jpg"
  },
  {
    "title": {
      "en": "Card 52",
      "ru": "Карта 52"
    },
    "character": {
      "en": "Character 52",
      "ru": "Персонаж 52"
    },
    "description": {
      "en": "Description of card 52.",
      "ru": "Описание карты 52."
    },
    "upright": {
      "en": "Upright meaning of card 52.",
      "ru": "Прямое значение карты 52."
    },
    "reversed": {
      "en": "Reversed meaning of card 52.",
      "ru": "Перевернутое значение карты 52."
    },
    "suit": "swords",
    "image": "images/card_52.jpg"
  },
  {
    "title": {
      "en": "Card 53",
      "ru": "Карта 53"
    },
    "character": {
      "en": "Character 53",
      "ru": "Персонаж 53"
    },
    "description": {
      "en": "Description of card 53.",
      "ru": "Описание карты 53."
    },
    "upright": {
      "en": "Upright meaning of card 53.",
      "ru": "Прямое значение карты 53."
    },
    "reversed": {
      "en": "Reversed meaning of card 53.",
      "ru": "Перевернутое значение карты 53."
    },
    "suit": "swords",
    "image": "images/card_53.jpg"
  },
  {
    "title": {
      "en": "Card 54",
      "ru": "Карта 54"
    },
    "character": {
      "en": "Character 54",
      "ru": "Персонаж 54"
    },
    "description": {
      "en": "Description of card 54.",
      "ru": "Описание карты 54."
    },
    "upright": {
      "en": "Upright meaning of card 54.",
      "ru": "Прямое значение карты 54."
    },
    "reversed": {
      "en": "Reversed meaning of card 54.",
      "ru": "Перевернутое значение карты 54."
    },
    "suit": "swords",
    "image": "images/card_54.jpg"
  },
  {
    "title": {
      "en": "Card 55",
      "ru": "Карта 55"
    },
    "character": {
      "en": "Character 55",
      "ru": "Персонаж 55"
    },
    "description": {
      "en": "Description of card 55.",
      "ru": "Описание карты 55."
    },
    "upright": {
      "en": "Upright meaning of card 55.",
      "ru": "Прямое значение карты 55."
    },
    "reversed": {
      "en": "Reversed meaning of card 55.",
      "ru": "Перевернутое значение карты 55."
    },
    "suit": "swords",
    "image": "images/card_55.jpg"
  },
  {
    "title": {
      "en": "Card 56",
      "ru": "Карта 56"
    },
    "character": {
      "en": "Character 56",
      "ru": "Персонаж 56"
    },
    "description": {
      "en": "Description of card 56.",
      "ru": "Описание карты 56."
    },
    "upright": {
      "en": "Upright meaning of card 56.",
      "ru": "Прямое значение карты 56."
    },
    "reversed": {
      "en": "Reversed meaning of card 56.",
      "ru": "Перевернутое значение карты 56."
    },
    "suit": "swords",
    "image": "images/card_56.jpg"
  },
  {
    "title": {
      "en": "Card 57",
      "ru": "Карта 57"
    },
    "character": {
      "en": "Character 57",
      "ru": "Персонаж 57"
    },
    "description": {
      "en": "Description of card 57.",
      "ru": "Описание карты 57."
    },
    "upright": {
      "en": "Upright meaning of card 57.",
      "ru": "Прямое значение карты 57."
    },
    "reversed": {
      "en": "Reversed meaning of card 57.",
      "ru": "Перевернутое значение карты 57."
    },
    "suit": "swords",
    "image": "images/card_57.jpg"
  },
  {
    "title": {
      "en": "Card 58",
      "ru": "Карта 58"
    },
    "character": {
      "en": "Character 58",
      "ru": "Персонаж 58"
    },
    "description": {
      "en": "Description of card 58.",
      "ru": "Описание карты 58."
    },
    "upright": {
      "en": "Upright meaning of card 58.",
      "ru": "Прямое значение карты 58."
    },
    "reversed": {
      "en": "Reversed meaning of card 58.",
      "ru": "Перевернутое значение карты 58."
    },
    "suit": "swords",
    "image": "images/card_58.jpg"
  },
  {
    "title": {
      "en": "Card 59",
      "ru": "Карта 59"
    },
    "character": {
      "en": "Character 59",
      "ru": "Персонаж 59"
    },
    "description": {
      "en": "Description of card 59.",
      "ru": "Описание карты 59."
    },
    "upright": {
      "en": "Upright meaning of card 59.",
      "ru": "Прямое значение карты 59."
    },
    "reversed": {
      "en": "Reversed meaning of card 59.",
      "ru": "Перевернутое значение карты 59."
    },
    "suit": "swords",
    "image": "images/card_59.jpg"
  },
  {
    "title": {
      "en": "Card 60",
      "ru": "Карта 60"
    },
    "character": {
      "en": "Character 60",
      "ru": "Персонаж 60"
    },
    "description": {
      "en": "Description of card 60.",
      "ru": "Описание карты 60."
    },
    "upright": {
      "en": "Upright meaning of card 60.",
      "ru": "Прямое значение карты 60."
    },
    "reversed": {
      "en": "Reversed meaning of card 60.",
      "ru": "Перевернутое значение карты 60."
    },
    "suit": "swords",
    "image": "images/card_60.jpg"
  },
  {
    "title": {
      "en": "Card 61",
      "ru": "Карта 61"
    },
    "character": {
      "en": "Character 61",
      "ru": "Персонаж 61"
    },
    "description": {
      "en": "Description of card 61.",
      "ru": "Описание карты 61."
    },
    "upright": {
      "en": "Upright meaning of card 61.",
      "ru": "Прямое значение карты 61."
    },
    "reversed": {
      "en": "Reversed meaning of card 61.",
      "ru": "Перевернутое значение карты 61."
    },
    "suit": "swords",
    "image": "images/card_61.jpg"
  },
  {
    "title": {
      "en": "Card 62",
      "ru": "Карта 62"
    },
    "character": {
      "en": "Character 62",
      "ru": "Персонаж 62"
    },
    "description": {
      "en": "Description of card 62.",
      "ru": "Описание карты 62."
    },
    "upright": {
      "en": "Upright meaning of card 62.",
      "ru": "Прямое значение карты 62."
    },
    "reversed": {
      "en": "Reversed meaning of card 62.",
      "ru": "Перевернутое значение карты 62."
    },
    "suit": "swords",
    "image": "images/card_62.jpg"
  },
  {
    "title": {
      "en": "Card 63",
      "ru": "Карта 63"
    },
    "character": {
      "en": "Character 63",
      "ru": "Персонаж 63"
    },
    "description": {
      "en": "Description of card 63.",
      "ru": "Описание карты 63."
    },
    "upright": {
      "en": "Upright meaning of card 63.",
      "ru": "Прямое значение карты 63."
    },
    "reversed": {
      "en": "Reversed meaning of card 63.",
      "ru": "Перевернутое значение карты 63."
    },
    "suit": "swords",
    "image": "images/card_63.jpg"
  },
  {
    "title": {
      "en": "Card 64",
      "ru": "Карта 64"
    },
    "character": {
      "en": "Character 64",
      "ru": "Персонаж 64"
    },
    "description": {
      "en": "Description of card 64.",
      "ru": "Описание карты 64."
    },
    "upright": {
      "en": "Upright meaning of card 64.",
      "ru": "Прямое значение карты 64."
    },
    "reversed": {
      "en": "Reversed meaning of card 64.",
      "ru": "Перевернутое значение карты 64."
    },
    "suit": "swords",
    "image": "images/card_64.jpg"
  },
  {
    "title": {
      "en": "Card 65",
      "ru": "Карта 65"
    },
    "character": {
      "en": "Character 65",
      "ru": "Персонаж 65"
    },
    "description": {
      "en": "Description of card 65.",
      "ru": "Описание карты 65."
    },
    "upright": {
      "en": "Upright meaning of card 65.",
      "ru": "Прямое значение карты 65."
    },
    "reversed": {
      "en": "Reversed meaning of card 65.",
      "ru": "Перевернутое значение карты 65."
    },
    "suit": "pentacles",
    "image": "images/card_65.jpg"
  },
  {
    "title": {
      "en": "Card 66",
      "ru": "Карта 66"
    },
    "character": {
      "en": "Character 66",
      "ru": "Персонаж 66"
    },
    "description": {
      "en": "Description of card 66.",
      "ru": "Описание карты 66."
    },
    "upright": {
      "en": "Upright meaning of card 66.",
      "ru": "Прямое значение карты 66."
    },
    "reversed": {
      "en": "Reversed meaning of card 66.",
      "ru": "Перевернутое значение карты 66."
    },
    "suit": "pentacles",
    "image": "images/card_66.jpg"
  },
  {
    "title": {
      "en": "Card 67",
      "ru": "Карта 67"
    },
    "character": {
      "en": "Character 67",
      "ru": "Персонаж 67"
    },
    "description": {
      "en": "Description of card 67.",
      "ru": "Описание карты 67."
    },
    "upright": {
      "en": "Upright meaning of card 67.",
      "ru": "Прямое значение карты 67."
    },
    "reversed": {
      "en": "Reversed meaning of card 67.",
      "ru": "Перевернутое значение карты 67."
    },
    "suit": "pentacles",
    "image": "images/card_67.jpg"
  },
  {
    "title": {
      "en": "Card 68",
      "ru": "Карта 68"
    },
    "character": {
      "en": "Character 68",
      "ru": "Персонаж 68"
    },
    "description": {
      "en": "Description of card 68.",
      "ru": "Описание карты 68."
    },
    "upright": {
      "en": "Upright meaning of card 68.",
      "ru": "Прямое значение карты 68."
    },
    "reversed": {
      "en": "Reversed meaning of card 68.",
      "ru": "Перевернутое значение карты 68."
    },
    "suit": "pentacles",
    "image": "images/card_68.jpg"
  },
  {
    "title": {
      "en": "Card 69",
      "ru": "Карта 69"
    },
    "character": {
      "en": "Character 69",
      "ru": "Персонаж 69"
    },
    "description": {
      "en": "Description of card 69.",
      "ru": "Описание карты 69."
    },
    "upright": {
      "en": "Upright meaning of card 69.",
      "ru": "Прямое значение карты 69."
    },
    "reversed": {
      "en": "Reversed meaning of card 69.",
      "ru": "Перевернутое значение карты 69."
    },
    "suit": "pentacles",
    "image": "images/card_69.jpg"
  },
  {
    "title": {
      "en": "Card 70",
      "ru": "Карта 70"
    },
    "character": {
      "en": "Character 70",
      "ru": "Персонаж 70"
    },
    "description": {
      "en": "Description of card 70.",
      "ru": "Описание карты 70."
    },
    "upright": {
      "en": "Upright meaning of card 70.",
      "ru": "Прямое значение карты 70."
    },
    "reversed": {
      "en": "Reversed meaning of card 70.",
      "ru": "Перевернутое значение карты 70."
    },
    "suit": "pentacles",
    "image": "images/card_70.jpg"
  },
  {
    "title": {
      "en": "Card 71",
      "ru": "Карта 71"
    },
    "character": {
      "en": "Character 71",
      "ru": "Персонаж 71"
    },
    "description": {
      "en": "Description of card 71.",
      "ru": "Описание карты 71."
    },
    "upright": {
      "en": "Upright meaning of card 71.",
      "ru": "Прямое значение карты 71."
    },
    "reversed": {
      "en": "Reversed meaning of card 71.",
      "ru": "Перевернутое значение карты 71."
    },
    "suit": "pentacles",
    "image": "images/card_71.jpg"
  },
  {
    "title": {
      "en": "Card 72",
      "ru": "Карта 72"
    },
    "character": {
      "en": "Character 72",
      "ru": "Персонаж 72"
    },
    "description": {
      "en": "Description of card 72.",
      "ru": "Описание карты 72."
    },
    "upright": {
      "en": "Upright meaning of card 72.",
      "ru": "Прямое значение карты 72."
    },
    "reversed": {
      "en": "Reversed meaning of card 72.",
      "ru": "Перевернутое значение карты 72."
    },
    "suit": "pentacles",
    "image": "images/card_72.jpg"
  },
  {
    "title": {
      "en": "Card 73",
      "ru": "Карта 73"
    },
    "character": {
      "en": "Character 73",
      "ru": "Персонаж 73"
    },
    "description": {
      "en": "Description of card 73.",
      "ru": "Описание карты 73."
    },
    "upright": {
      "en": "Upright meaning of card 73.",
      "ru": "Прямое значение карты 73."
    },
    "reversed": {
      "en": "Reversed meaning of card 73.",
      "ru": "Перевернутое значение карты 73."
    },
    "suit": "pentacles",
    "image": "images/card_73.jpg"
  },
  {
    "title": {
      "en": "Card 74",
      "ru": "Карта 74"
    },
    "character": {
      "en": "Character 74",
      "ru": "Персонаж 74"
    },
    "description": {
      "en": "Description of card 74.",
      "ru": "Описание карты 74."
    },
    "upright": {
      "en": "Upright meaning of card 74.",
      "ru": "Прямое значение карты 74."
    },
    "reversed": {
      "en": "Reversed meaning of card 74.",
      "ru": "Перевернутое значение карты 74."
    },
    "suit": "pentacles",
    "image": "images/card_74.jpg"
  },
  {
    "title": {
      "en": "Card 75",
      "ru": "Карта 75"
    },
    "character": {
      "en": "Character 75",
      "ru": "Персонаж 75"
    },
    "description": {
      "en": "Description of card 75.",
      "ru": "Описание карты 75."
    },
    "upright": {
      "en": "Upright meaning of card 75.",
      "ru": "Прямое значение карты 75."
    },
    "reversed": {
      "en": "Reversed meaning of card 75.",
      "ru": "Перевернутое значение карты 75."
    },
    "suit": "pentacles",
    "image": "images/card_75.jpg"
  },
  {
    "title": {
      "en": "Card 76",
      "ru": "Карта 76"
    },
    "character": {
      "en": "Character 76",
      "ru": "Персонаж 76"
    },
    "description": {
      "en": "Description of card 76.",
      "ru": "Описание карты 76."
    },
    "upright": {
      "en": "Upright meaning of card 76.",
      "ru": "Прямое значение карты 76."
    },
    "reversed": {
      "en": "Reversed meaning of card 76.",
      "ru": "Перевернутое значение карты 76."
    },
    "suit": "pentacles",
    "image": "images/card_76.jpg"
  },
  {
    "title": {
      "en": "Card 77",
      "ru": "Карта 77"
    },
    "character": {
      "en": "Character 77",
      "ru": "Персонаж 77"
    },
    "description": {
      "en": "Description of card 77.",
      "ru": "Описание карты 77."
    },
    "upright": {
      "en": "Upright meaning of card 77.",
      "ru": "Прямое значение карты 77."
    },
    "reversed": {
      "en": "Reversed meaning of card 77.",
      "ru": "Перевернутое значение карты 77."
    },
    "suit": "pentacles",
    "image": "images/card_77.jpg"
  },
  {
    "title": {
      "en": "Card 78",
      "ru": "Карта 78"
    },
    "character": {
      "en": "Character 78",
      "ru": "Персонаж 78"
    },
    "description": {
      "en": "Description of card 78.",
      "ru": "Описание карты 78."
    },
    "upright": {
      "en": "Upright meaning of card 78.",
      "ru": "Прямое значение карты 78."
    },
    "reversed": {
      "en": "Reversed meaning of card 78.",
      "ru": "Перевернутое значение карты 78."
    },
    "suit": "pentacles",
    "image": "images/card_78.jpg"
  }
];