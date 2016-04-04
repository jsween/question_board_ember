import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr('string'),
  answer_author: DS.attr('string'),
  answer_author_avatar: DS.attr('string'),
  question: DS.belongsTo('question', {async: true})
});
