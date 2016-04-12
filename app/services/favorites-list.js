import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],

  add(question) {
    this.get('questions').pushObject(question);
  }
});
