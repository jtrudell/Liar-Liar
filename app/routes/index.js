import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      lie: {
        submitted: null,
        description: null,
        response: null,
        donald: null,
      },
    };
  },
});
