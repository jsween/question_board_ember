import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(question, params) {  //sends changes to editQuestion
      this.sendAction('save', question, params)
    },
    deleteQuestion(question) { //deletes question and answers
      if(confirm('Are you sure you want to delete this question?')) {
        this.sendAction('delete', question);
      }
    }
  }
});
