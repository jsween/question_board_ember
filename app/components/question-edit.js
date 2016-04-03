import Ember from 'ember';

export default Ember.Component.extend({
  showEditForm: false,
  actions: {
    showEditForm() {
      this.set('showEditForm', true);
    },
    save(question) {
      this.sendAction('save', question, params);
    },
    deleteQuestion(question) {
      this.sendAction('delete', question);
    }
  }
});
