import Ember from 'ember';

export default Ember.Component.extend({
  showAnswerForm: false, //initially hides form
  actions: {
    showAnswerForm() {
      this.set('showAnswerForm', true);//show form
    },
    // hide answer form
    save() {
      var params = {
        answer: this.get('answer'),
        author: this.get('author'),
        question: this.get('question')
      };
      this.set('showAnswerForm', false);//hide form
      this.sendAction('save', params);//send to question route
    }
  }
});
