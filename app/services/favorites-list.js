import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],

  add(item) {
    // debugger;
    this.get('questions').pushObject(item);
    // console.log(item);
  }
});
