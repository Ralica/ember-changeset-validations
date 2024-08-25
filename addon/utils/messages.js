import _Messages from 'ember-validators/messages';
// import { capitalize, dasherize } from '@ember/string';

const Messages = Object.assign({}, _Messages);

export default Object.assign(Messages, {
  // Blank and present are flipped in ember-validators. Need to flip them back here
  blank: _Messages.present,
  present: _Messages.blank,

  getDescriptionFor(key = '') {
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    const dasherize = (str) => str.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();

    return capitalize(dasherize(key).split(/[._-]/g).join(' '));
  },
});
