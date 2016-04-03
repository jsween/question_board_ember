import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('question');  //return all questions - do not need answers here
  },
  actions: {
    save(params) {  //save a new question to model
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
