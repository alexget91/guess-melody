import AbstractView from './abstract-view';
import logo from '../views/logo';

export default class SplashScreen extends AbstractView {
  constructor(data) {
    super(data);
  }

  get template() {
    return `\
      <section class="main main--welcome">
        ${logo}
        <button class="main-play" style="visibility: hidden;"></button>
        <h2 class="title main-title">Загрузка...</h2>
      </section>`;
  }

  show() {
    const app = document.querySelector(`.app`);

    app.replaceChild(this.element, app.querySelector(`.main`));
  }

  bind() {

  }

  unbind() {

  }
}
