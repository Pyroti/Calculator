import '../../../index.css';
import { additions, separations } from './state.js';
const rootY = 17;
const rootCube = 24;

const root = document.querySelector('body');

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

const container = document.createElement('div');
container.className = 'container';

const result = document.createElement('textarea');
result.className = 'calc__result';
result.setAttribute('rows', '3');
result.setAttribute('readonly', '');

root.append(wrapper);
wrapper.append(container);
container.append(result);

Object.values(separations).forEach((sValue) => {

  const node = document.createElement('span');
  node.className = 'separation';

  sValue.forEach((separation) => {

    const button = document.createElement('button');
    button.className = separation.class;
    button.setAttribute('data-value', separation.data);
    button.innerText = separation.value;

    const { id } = separation;
    if (id in additions) {

      const span = document.createElement('span');
      span.className = additions[id].class;
      span.setAttribute('data-value', additions[id].data);
      span.innerText = additions[id].value;

      if (id !== rootY && id !== rootCube) {

        button.append(span);

      } else {

        button.prepend(span);

      }

    }

    node.append(button);

  });

  container.append(node);

});
