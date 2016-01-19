import DS from 'ember-data';
var attr = DS.attr;
var belongsTo = DS.belongsTo;
var hasMany = DS.hasMany;

export default DS.Model.extend({
	lat: attr(),
	lng: attr(),
	name: attr(),
	leg_departure: hasMany('leg'),
	leg_arrival: hasMany('leg'),
	// isValid: function(){
	// 	return this.get('lat') != null;
	// }
});