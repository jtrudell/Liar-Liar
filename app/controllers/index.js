import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removeLie() {
      this.set('model.lie.submitted', false);
    },
  }
});
