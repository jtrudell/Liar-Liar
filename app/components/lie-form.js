import Ember from 'ember';

export default Ember.Component.extend({
  // description: this.get('lie-description'),
  lieDescription: null,
  actions: {
    submitLie() {
      const description = this.get('lieDescription');
      alert(description);
      this.transitionToRoute('lies');
    },
  }
});
