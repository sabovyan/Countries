/**
 *
 * @param {HTMLElement} elem
 * @param {String} removedClass  a class that is going to be removed
 * @param {string} addedClass a class that is going to be added
 * @returns {void}
 * @example
 *  changeState(navToggler, 'nav__toggler--close', 'nav__toggler--open');
 */

export function changeState(elem, removedClass, addedClass) {
  elem.classList.remove(removedClass);
  elem.classList.add(addedClass);
}
