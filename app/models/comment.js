import DS from 'ember-data';
var attr = DS.attr;
var belongsTo = DS.belongsTo;

export default DS.Model.extend({
  body: attr(),
  username: attr(),

  post: belongsTo('post')
});