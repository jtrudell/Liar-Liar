import Ember from 'ember';

export default Ember.Component.extend({
  donald: function() {
    let article = '';
    Ember.$.getJSON(
      "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=Donald_Trump",
      function(res) {
        const pages = res.query.pages;
        for (var key in pages) {
          article += pages[key]['extract'];
        }
      }
    );
    return article;
  },
});
