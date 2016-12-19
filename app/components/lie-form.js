import Ember from 'ember';

export default Ember.Component.extend({
  lieDescription: null,
  lie: null,
  options: [
    "I don't know, you still just don't seem like a liar to me. Better luck next time!",
    "You only feel that way because you really are sick. Everyone feels like that. Go back to bed.",
    "I see your point, but you wouldn't feel guilty about this if you were a liar.",
    "I blame your mother. Or your father. Or both.",
    "White lie, you're good.",
    "HELP! I'm falling asleep I am so bored. You are too boring to be lying.",
    "Dude, it took some serious mental gymnastics for you to get to 'I'm a liar'. Wow.",
    "You suck at lying. Worry about that.",
  ],

  actions: {
    submitLie() {
      let description = this.get('lieDescription');
      const options = this.get('options');
      const randomIndex = Math.floor(Math.random() * options.length);
      let response;
      if (description === null || description.trim().length === 0) {
        description = "nothing";
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
