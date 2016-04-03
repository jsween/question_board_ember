import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('question');
  },
  action: {
    //save new question goes here
  }
});
