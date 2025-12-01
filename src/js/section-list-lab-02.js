import createinputListComponent from './input-list-component.js';

/**
 * Create input-list component.
 *
 * @param {HTMLElement} container
 *
 * @returns {HTMLElement}
 */

export function createComponent(container) {
  const templateElem = container.querySelector('.app-number-section');

  if (templateElem === null) {
    throw new Error('Template .app-tmp-number-component is not found');
  }

  const sectionListContainer = templateElem.parentElement;

  if (sectionListContainer === null) {
    throw new Error('Template .app-tmp-number-component does not have parent');
  }

  const createSectionContainer = () => {
    const sectionContainer =
      templateElem.textContent.cloneNode(true).firstElementChild;

    sectionContainer.addEventListener('click', (ev) => {
      if (ev.target?.matches?.('.app-cmd-remove-section') ?? false) {
        sectionContainer.remove();
      }
    });

    createinputListComponent();

    sectionListContainer.append(inputListContainer);
  };

  container.addEventListener('click', (ev) => {
    if (ev.target?.matches('.app-cmd-add-section')) {
      createInputComponent();
    }
  });

  createinputListComponent();
}
