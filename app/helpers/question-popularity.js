import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];
  console.log(question);
  if(question.get('answers').get('length') >= 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  } else if(question.get('answers').get('length') > 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-user"></span>');
  }
}

export default Ember.Helper.helper(questionPopularity);
