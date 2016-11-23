import Ember from 'ember';

export default Ember.Component.extend({
  lieDescription: null,
  lies: null,
  actions: {
    submitLie() {
      const description = this.get('lieDescription');
      this.set('lies', description);
      const lies = this.get('lies');
      alert(lies);
    },
  }
});
