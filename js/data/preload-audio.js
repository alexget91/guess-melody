import {gameMusic} from './game-data';
export default (links) => {
  links.forEach((el) => {
    const audio = new Audio(el);

    audio.preload = `auto`;
    audio.load();

    gameMusic[el] = audio;
  });
};
