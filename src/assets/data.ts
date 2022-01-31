/* eslint-disable no-useless-concat */

export type GamesDataTypes = {
  id: number;
  title: string;
  released: string;
  about: string;
  usertag: string;
  reviews: string;
  cost: string;
}[];

const data = [
  {
    id: 1,
    title: "7 Days to Die",
    released: "19 december, 2013",
    about:
      "7 Days to Die is an open-world game that is a unique combination of first person shooter, survival horror, tower defense, and role-playing games. Play the definitive zombie survival sandbox RPG that came first. Navezgane awaits! ",
    usertag:
      "Выживание, Зомби, Для нескольких игроков, Открытый мир, Стратегия, Постапокалипсис, Экшен...",
    reviews: "Очень положительные",
    cost: "134 руб",
  },
  {
    id: 2,
    title: "SnowRunner",
    released: "18 мая. 2021",
    about:
      "Встречайте новое поколение гонок по бездорожью! Вас ждут суровые просторы, мощные машины и десятки сложных заданий, которые можно выполнять в одиночку или в команде до 4 игроков! ",
    usertag:
      "Симулятор, Приключение, Автосимклятор, Открытый мир, Физика, Для нескольких игроков, Игра против ИИ, Гонки, Природа, Реализм, Иммерсивный симулятор",
    reviews: "Очень положительные",
    cost: "779 руб",
  },
  {
    id: 3,
    title: "Tales of Arise",
    released: "10 сен. 2021",
    about:
      "300 лет тирании. Таинственная маска. Потерянные воспоминания и боль. Возьмите Пылающий меч и возглавьте восстание с загадочной девушкой. Это история об освобождении в графике нового поколения! ",
    usertag:
      "Аниме, Японская ролевая игра, Фэнтези, Для одного игрока, Магия... ",
    reviews: "Очень положительные",
    cost: "1874 руб",
  },
  {
    id: 4,
    title: "ELDEN RING",
    released: "25 фев. 2022",
    about:
      "НОВЫЙ ФЭНТЕЗИЙНЫЙ РОЛЕВОЙ БОЕВИК. Восстань, погасшая душа! Междуземье ждёт своего повелителя. Пусть благодать приведёт тебя к Кольцу Элден. ",
    usertag:
      "Темное фентези, Сложная, Для одного игрока, Для нескольких игроков, Кооператив, Открытый мир, Атмосферная, Насилие, Расслабляющая...",
    reviews: "нет обзоров",
    cost: "2499 руб",
  },
  {
    id: 5,
    title: "The Planet Crafter: Prologue",
    released: "19 дек. 2021",
    about:
      "спытайте первые этапы терраформирования всей планеты в этом прологе крафтинг-игры с открытым миром на выживание в космосе. Исследуйте, выживайте, собирайте, стройте свою базу, а затем создавайте кислород, тепло и давление, чтобы сделать враждебную планету пригодной для жизни человечеством. ",
    usertag:
      "Выживание, Открытый мир, Крафтинг, Для одного игрока, Глубокий сюжет, Цветастая, Космос, Марс, От первого лица",
    reviews: "Крайне положительные",
    cost: "2499 руб",
  },
];

export default data;
