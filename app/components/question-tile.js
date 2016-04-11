import Ember from 'ember';

export default Ember.Component.extend({
  askedBy: Ember.computed('question.author', function() {
    return this.get('question.author') + '!';
  })
});
