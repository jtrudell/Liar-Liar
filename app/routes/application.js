import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const date = new Date();
    const headings = {
      title: "So, you think you are lying?",
      year: date.getFullYear(),
    };
    return headings;
  }
});
