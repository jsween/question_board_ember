import Ember from 'ember';

export default Ember.Component.extend({
  showEditForm: false,
  actions: {
    showEditForm() {
      this.set('showEditForm', true);
    },
    save(question) {
      var params = {
        question: this.get('question.question'),
        author: this.get('question.author'),
        notes: this.get('question.notes')
      };
      this.set('showEditForm', false);
      this.sendAction('save', question, params);
    },
    deleteQuestion(question) {
      this.sendAction('delete', question);
    }
  }
});
