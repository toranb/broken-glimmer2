import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  layout: Ember.computed(function () {
    //get some dynamic vars here ...
    return Ember.HTMLBars.compile(`
      {{component "ui-button"}}
    `);
  }).volatile()
});
