import Ember from 'ember';

export default Ember.Component.extend({
  showAnswerForm: false, //initially hides form
  actions: {
    showAnswerForm() {
      this.set('showAnswerForm', true);//show form
    },
    hideAnswerForm() {
      this.set('showAnswerForm', false);//hide form if user decides to cancel edit
    },
    save() {
      if(this.get('answer')) {
        var params = {
          answer: this.get('answer'),
          answer_author: this.get('answer_author'),
          question: this.get('question')
        };
        this.set('showAnswerForm', false);//hide form
        this.sendAction('save', params);//send to question route
      } else {
        alert('Please Give Us Your Wisdom First!');
      }
    }
  }
});
