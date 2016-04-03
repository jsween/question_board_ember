import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      question: this.store.findRecord('question', params.question_id),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    editQuestion(question, params) { //save edited question
      Object.keys(params).forEach(function(key) { //if a field is left blank
        question.set(key, params[key]);
      });
      question.save();
      this.transitionTo('question');
    },
    deleteQuestion(question) {
      var answers_to_delete = question.get('answers').map(function(answer) { //this deletes all answers associated with question then deletes the question
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answers_to_delete).then(function() { //takes in resolve and reject promises
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },
    saveAnswer(params) {  //saves the answer to model
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      newAnswer.save().then(function() {
        return question.save();
      });
    }
  }
});
