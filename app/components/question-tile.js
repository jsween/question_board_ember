import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),

  askedBy: Ember.computed('question.author', function() {
    return this.get('question.author') + '!';
  }),

  actions: {
    addToFavorites(question) {
      this.get('favorites').add(question);
    }
  }
});
