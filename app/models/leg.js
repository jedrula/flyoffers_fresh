import DS from 'ember-data';
var attr = DS.attr;
var belongsTo = DS.belongsTo;

export default DS.Model.extend({
	post: belongsTo('post'),
	departure_marker: DS.belongsTo('marker'  ,{'inverse': 'leg_departure'}/*, embedded: 'always'} */),
	departure_date: DS.attr('date'),
	arrival_marker: DS.belongsTo('marker' /* arrivalmarker */ ,{'inverse': 'leg_arrival'} /* , embedded: 'always'}*/),
	arrival_date: DS.attr('date'),
	price: DS.attr('number'),
	// hasValidMarkers: function(){
	// 	return this.get('arrival_marker').isValid() && this.get('departure_marker').isValid();
	// },
});