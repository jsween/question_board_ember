import Ember from 'ember';

export default Ember.Component.extend({
  showEditForm: false,
  actions: {
    showEditForm() {  //displays form
      this.set('showEditForm', true);
    },
    hideEditForm() {
      this.set('showEditForm', false);
    },
    save(question) {  //catches the changes to the question
      var params = {
        question: this.get('question.question'),
        author: this.get('question.author'),
        notes: this.get('question.notes')
      };
      this.set('showEditForm', false);//hide form
      this.sendAction('save', question, params);
    },
    deleteQuestion(question) { //sends the selected question to delete up
      this.sendAction('deleteQuestion', question);
    }
  }
});
