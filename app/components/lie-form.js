import Ember from 'ember';

export default Ember.Component.extend({
  lieDescription: null,
  lie: null,
  options: [
    "I don't know, you just don't seem like a liar to me.",
    "You only feel that because it is about being sick. Everyone feels like they are lying about being sick when they are really sick.",
    "I see your point but you wouldn't feel this guilty about it if you were a liar.",
    "I blame your mother. Or your father. Or both."
  ],

  actions: {
    submitLie() {
      const description = this.get('lieDescription');
      const options = this.get('options');
      const randomIndex = Math.floor(Math.random() * options.length);
      let response;
      if (description === null || description.trim().length === 0) {
        response = "You can't be lying, you haven't told a lie!";
      } else if (description.includes('sick')) {
        response = options[1];
      } else {
        response = options[randomIndex];
      }

      const donald = this.get('lie.donald');
      this._fetchDonald(donald).then((article) => {
        this.setProperties({
          lie: {
            description: description,
            submitted: true,
            response: response,
            donald: article,
          },
        });
        this.set('lieDescription', null);
      });
    },
  },

  _fetchDonald: (donald) => {
    let article = '';
    return new Promise((resolve, reject) => {
      if (donald !== null) {
        resolve(donald);
      } else {
        Ember.$.getJSON(
          "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&origin=*&exintro=&titles=Donald_Trump",
          (res) => {
            const pages = res.query.pages;
            for (var key in pages) {
              article += pages[key]['extract'];
            }
          })
        .done(() => {
          const articleHTML = Ember.String.htmlSafe(article);
          resolve(articleHTML);
        })
        .fail(() => {
          reject("<p>Something went wrong</p>");
          console.log("Something went wrong");
        });
      }
    });
  }
});
