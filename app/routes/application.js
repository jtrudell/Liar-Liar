import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const date = new Date();
    const headings = {
      title: "You think you are a liar?",
      subtitle: "If you've made it to this page, you probably aren't lying. But let's do this anyway.",
      year: date.getFullYear(),
    };
    return headings;
  }
});
