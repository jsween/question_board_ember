import Ember from 'ember';

export default Ember.Component.extend({
  showAnswerForm: false,
  actions: {
    showAnswerForm() {
      this.set('showAnswerForm', true);
    },
    // hide answer form
    save() {
      var params = {
        answer: this.get('answer'),
        author: this.get('author'),
        question: this.get('question')
      };
      console.log(params);
      this.set('showAnswerForm', false);//hide form
      this.sendAction('save', params);
    }
  }
});
