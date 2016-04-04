import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('string'),
  author: DS.attr('string'),
  author_avatar: DS.attr('string'),
  notes: DS.attr('string'),
  image: DS.attr('string'),
  answers: DS.hasMany('answer', {async: true})
});
