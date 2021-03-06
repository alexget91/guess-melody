import getFormattedTime from './get-formatted-time';

export default class ConvertData {

  static encode(state) {
    return state ? Object.values(state).reduce((result, it) => `${result}${getFormattedTime(it)}`, ``) : ``;
  }

  static decode(data) {
    if (!data) {
      return false;
    }

    const result = [];
    let position = 0;
    let step = 2;

    while (position < data.length) {
      if (data.length - position === 3) {
        step = 3;
      }
      result.push(parseInt(data.substr(position, step), 10));
      position += 2;
    }

    return result;
  }
}
