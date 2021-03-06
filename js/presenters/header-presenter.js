import HeaderView from '../views/header-view';
import getMinutes from '../data/get-minutes';
import getFormattedTime from '../data/get-formatted-time';
import gameData, {gameState, QuestionType} from '../data/game-data';
import artistPresenter from './artist-presenter';
import genrePresenter from './genre-presenter';
import getRadius from '../data/get-radius';
import getDataHeader from '../screen-data/get-data-header';
import Application from '../application';

class HeaderPresenter {
  initialize(timeLeft, mistakesCount) {
    this.view = new HeaderView(getDataHeader(timeLeft, mistakesCount));

    const view = this.view;

    view.onTimerTick = () => {
      view.timerTick();

      if (!view.timer) {
        this.stopGame();
      } else {
        this.changeTimerParameters();
      }
    };

    view.show();
  }

  stopGame() {
    this.view.unbind();

    if (gameState.currentLevelType === QuestionType.GENRE) {
      genrePresenter.view.audioToggle();
    } else {
      artistPresenter.view.audioToggle();
    }

    Application.showResult([gameData.ExitCode.TIME_OVER]);
  }

  changeTimerParameters() {
    const view = this.view;
    const timerValue = view.timer.value;

    if (timerValue < gameData.TIMER_BLINK_TIME) {
      view.timerBlink();
    }

    const time = getMinutes(timerValue);
    const timeRatio = timerValue / gameData.GAME_TIME;
    const timerLineParameters = getRadius(timeRatio, gameData.TIME_CIRCLE_RADIUS);

    gameState.timeLeft = timerValue;

    view.setTimerValues(getFormattedTime(time.min), getFormattedTime(time.sec), timerLineParameters.offset);
  }
}

export default new HeaderPresenter();
