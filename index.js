import { Bulb } from './Bulb/index.js';

console.log('funguju!');

const appElm = document.querySelector('#app');

appElm.append(
  Bulb({ isOn: true }),
  Bulb({ isOn: false }),
  Bulb({ isOn: true }),
);
