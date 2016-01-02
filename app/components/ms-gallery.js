import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['clearing-thumbs'],
  attributeBindings: ['dataClearing:data-clearing'],
  dataClearing: '',
  tagName: 'ul',
  didInsertElement() {
    Ember.$(document).foundation();
  }
});
