import {gameState} from '../data/game-data';
import GenreView from '../views/genre-view';
import getDataGenre from '../screen-data/get-data-genre';
import GamePresenter from '../presenters/game-presenter';

class GenrePresenter {
  initialize(data) {
    gameState.currentLevelIsGenre = true;

    this.view = new GenreView(getDataGenre(data));

    const view = this.view;
    let userAnswerValues;

    view.onPlayerClick = (evt) => {
      evt.preventDefault();
      view.audioToggle(evt);
    };

    view.onSubmitClick = (evt) => {
      evt.preventDefault();

      GamePresenter.onAnswerSubmit(view, view.checkAnswer(userAnswerValues));
    };

    view.onAnswerChange = (evt) => {
      const answerCheckbox = evt.target;
      const answerID = view.getAnswerID(answerCheckbox);
      const userAnswer = view.userAnswer;

      if (answerCheckbox.checked) {
        userAnswer[answerID] = answerCheckbox.dataset.right;
      } else {
        delete userAnswer[answerID];
      }

      userAnswerValues = Object.values(userAnswer);

      view.submitToggle(!userAnswerValues.length);
    };

    view.show();
  }
}

export default new GenrePresenter();