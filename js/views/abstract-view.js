import getElementFromTemplate from '../dom-helpers/get-element-from-template';

export default class AbstractView {
  constructor(data) {
    this.data = data;
  }

  get data() {
    return this._data;
  }

  set data(data) {
    this._data = data;
    delete this._element;
  }

  get template() {
    // возвращает строку, содержащую разметку
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }

    return this._element;
  }

  render() {
    return getElementFromTemplate(this.template);
  }

  bind() {
    // добавляет обработчики событий
  }

  unbind() {
    // удаляет обработчики событий
  }
}