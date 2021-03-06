import {gameState, QuestionType} from '../data/game-data';
import GenreView from '../views/genre-view';
import GamePresenter from '../presenters/game-presenter';

class GenrePresenter {
  initialize(data) {
    gameState.currentLevelType = QuestionType.GENRE;
    this.view = new GenreView(data);
    this.bindEvents();
    this.view.show();
  }

  bindEvents() {
    const view = this.view;
    view.onPlayerClick = (evt) => this.onGenrePlayerClick(evt);
    view.onSubmitClick = (evt) => this.onGenreSubmitClick(evt);
    view.onAnswerChange = (evt) => this.onGenreAnswerChange(evt);
  }

  checkAnswer(userAnswerValues) {
    return userAnswerValues.length === this.view.rightAnswerLength && userAnswerValues.every((it) => it);
  }

  onGenrePlayerClick(evt) {
    evt.preventDefault();
    this.view.audioToggle(evt);
  }

  onGenreSubmitClick(evt) {
    evt.preventDefault();
    GamePresenter.onAnswerSubmit(this.view, this.checkAnswer(this.userAnswerValues));
  }

  onGenreAnswerChange(evt) {
    const view = this.view;

    view.getUserAnswer(evt);
    this.userAnswerValues = Object.values(view.userAnswer);
    view.submitToggle(!this.userAnswerValues.length);
  }
}

export default new GenrePresenter();
