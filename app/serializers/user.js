import ApplicationSerializer from './application';
import Ember from 'ember';
import DS from "ember-data";
//export default DS.JSONSerializer.extend({
export default ApplicationSerializer.extend({

	extractSingle: function(store, type, payload, id) {
		return this._super.apply(this, arguments);
	},
	extractArray: function(store, type, payload) {
	var arr = payload.users;
	//var arr = payload;
		Ember.$.each(arr,function(index,user){
		//remove local?

			//user['id'] = user._id;
			//delete user._id;
			if(user.local && user.local.email){
			 user.email = user.local.email;

			}
		});
		return this._super.apply(this, arguments);
	}
});