import ApplicationSerializer from './application';
import DS from 'ember-data';

//export default DS.RESTSerializer.extend({
export default ApplicationSerializer.extend({
	serialize: function(record, options) {
		//var json = record.record.toJSON();
    	var json = this._super(record,options);
    	delete json["username"];	//no need to send the author username - it will be grabbed from session
    	return json;
	}
});
