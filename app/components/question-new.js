import Ember from 'ember';

export default Ember.Component.extend({
  showNewQuestionForm: false,
  actions: {
    showNewQuestionForm() {
      this.set('showNewQuestionForm', true);//show form
    },
    // hideNewQuestionForm(){}
    save() {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.set('showNewQuestionForm', false);//hide form
      this.sendAction('save', params);
    }
  }
});
