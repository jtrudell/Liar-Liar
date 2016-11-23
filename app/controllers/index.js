import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    removeLie() {
      this.set('model.lie.submitted', false);
      Ember.$.getJSON(
        "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=Lie",
        function(res) {
          console.log(res);
        }
      );
    },
  }
});
