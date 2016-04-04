import Ember from 'ember';

export default Ember.Component.extend({
  showNewQuestionForm: false,
  actions: {
    showNewQuestionForm() {
      this.set('showNewQuestionForm', true);//show form
    },
    hideNewQuestionForm(){
      this.set('showNewQuestionForm', false);//allows user to hide form if changes mind
    },
    save() {
      if(this.get('question')) {
        var params = {
          question: this.get('question'),
          author: this.get('author'),
          notes: this.get('notes')
        };
        this.set('showNewQuestionForm', false);//hide form
        this.sendAction('save', params);
      } else {
        alert('Please ask a question first!');
      }
    }
  }
});
