import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

  askedBy: Ember.computed('question.author', function() {
    return this.get('question.author') + '!';
  }),

  actions: {
    addToFavorites(item) {
      this.get('favoritesList').add(item);
    }
  }
});
