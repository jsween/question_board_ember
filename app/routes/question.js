import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      question: this.store.findRecord('question', params.question_id),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    editQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        question.set(key, params[key]);
      });
      question.save();
      this.transitionTo('question');
    },
    deleteQuestion(question) {
      var answers_to_delete = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answers_to_delete).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      newAnswer.save().then(function() {
        return question.save();
      });
    }
  }
});
