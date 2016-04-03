import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(question, params) {
      this.sendAction('save', question, params)
    },
    deleteQuestion(question) {
      if(confirm('Are you sure you want to delete this question?')) {
        console.log('delete at question detail');
        this.sendAction('delete', question);
      }
    }
  }
});
