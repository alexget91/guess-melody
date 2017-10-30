import {gameSequence as gameSequenceInitial, gameAnswers, gameState} from '../data/game-data.js';
import showScreen from '../dom-helpers/show-screen.js';
import clearScreen from '../dom-helpers/clear-screen.js';
import headerPresenter from '../screens/header-presenter.js';
import artistScreen from '../screens/artist-screen.js';
import genreScreen from '../screens/genre-screen.js';
import getDataHeader from '../screen-data/get-data-header.js';
import getDataArtist from '../screen-data/get-data-artist.js';
import getDataGenre from '../screen-data/get-data-genre.js';
import showGameEnd from '../control/show-game-end.js';

let gameSequence;

export default (reset) => {
  if (reset) {
    gameSequence = [...gameSequenceInitial];
    gameAnswers.length = 0;
    gameState.reset();
  }

  const question = gameSequence.shift();

  if (question) {

    if (reset) {
      headerPresenter.view.data = getDataHeader(gameState.timeLeft, gameState.mistakesCount);
      headerPresenter.initialize();
      clearScreen();
      showScreen(headerPresenter.view.element);
    } else {
      clearScreen(`.main-wrap`);
    }

    if (question.typeArtist) {
      artistScreen.view.data = getDataArtist(question);
      artistScreen.initialize();
      showScreen(artistScreen.view.element);
    } else {
      gameState.currentLevelIsGenre = true;
      genreScreen.view.data = getDataGenre(question);
      genreScreen.initialize();
      showScreen(genreScreen.view.element);
    }

  } else {
    showGameEnd();
  }
};
