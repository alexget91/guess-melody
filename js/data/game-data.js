const gameData = {
  GAME_TITLE: `Угадай мелодию`,
  GAME_TIME: 300,
  QUESTIONS_COUNT: 10,
  FAST_ANSWER_TIME: 30,
  NOTES_COUNT: 4,
  AnswerPrice: {
    CORRECT: 1,
    FAST: 2,
    WRONG: -2
  },
  ExitCode: {
    NOTES_OVER: -1,
    TIME_OVER: -2
  }
};

// Начальные параметры хедера
export const initialState = {
  notesLeft: gameData.NOTES_COUNT,
  timeLeft: gameData.GAME_TIME
};

// Массив вопросов игры
export const gameSequence = [
  {
    typeArtist: true, // Тип: выбор артиста
    melodyID: 1, // ID проигрываемой мелодии (правильный ответ)
    answers: new Set([1, 2, 3]) // ID мелодий из библиотеки
  },
  {
    typeArtist: false, // Тип: выбор жанра
    genre: `Rock`, // Оставил для наглядности, но можно брать из correctAnswer
    correctAnswer: new Set([2, 4]), // ID мелодий из библиотеки
    answers: new Set([1, 2, 3, 4]) // ID мелодий из библиотеки
  },
  {
    typeArtist: true,
    melodyID: 1,
    answers: new Set([1, 2, 3])
  },
  {
    typeArtist: false,
    genre: `Rock`,
    correctAnswer: new Set([2, 4]),
    answers: new Set([1, 2, 3, 4])
  },
  {
    typeArtist: true,
    melodyID: 1,
    answers: new Set([1, 2, 3])
  },
  {
    typeArtist: false,
    genre: `Rock`,
    correctAnswer: new Set([2, 4]),
    answers: new Set([1, 2, 3, 4])
  },
  {
    typeArtist: true,
    melodyID: 1,
    answers: new Set([1, 2, 3])
  },
  {
    typeArtist: false,
    genre: `Rock`,
    correctAnswer: new Set([2, 4]),
    answers: new Set([1, 2, 3, 4])
  },
  {
    typeArtist: true,
    melodyID: 1,
    answers: new Set([1, 2, 3])
  },
  {
    typeArtist: false,
    genre: `Rock`,
    correctAnswer: new Set([2, 4]),
    answers: new Set([1, 2, 3, 4])
  }
];

// Статистика предыдущих игр
export const gameStatistics = [
  {
    score: 7,
    notesLeft: 4,
    timeLeft: 20
  },
  {
    score: 14,
    notesLeft: 3,
    timeLeft: 40
  },
  {
    score: 2,
    notesLeft: 4,
    timeLeft: 20
  }
];

// Массив ответов игрока (изначально пустой, формируется в процессе игры)
export const gameAnswers = [];

export default gameData;