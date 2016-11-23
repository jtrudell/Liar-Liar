import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    const headings = {
      subtitle: "If you've made it to this page, you probably aren't lying. But let's do this anyway.",
    };
    return headings;
  }
});
