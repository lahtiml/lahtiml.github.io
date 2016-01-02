import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['top-bar'],
  attributeBindings: ['dataTopBar:data-topbar'],
  dataTopBar: '',
  tagName: 'nav',
  didInsertElement() {
    Ember.$(document).foundation();
  }
});
