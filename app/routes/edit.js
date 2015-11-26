import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		var post = this.store.find('post',params.post_id);
		return post;
	},
	actions: {
		save: function(){
			console.warn('TODO implement save');
			debugger;
		}
	},
	setupController: function(controller, model) {
		var self = model;
		//var controllerModelProp = model.serialize({includeId: true});
		//controllerModelProp.id = controllerModelProp._id; delete controllerModelProp._id;//FIXME very dirty

		var obj = {
			model: model,//controllerModelProp,
			actions: {
				updatePost(json){
					var id = json.id;
					//TODO reuse create from new.js in controllers
					var postRecord = this.store.peekRecord('post',id);//.then(post => {	//TODO maybe we do need to peek it ? isnt it just the same as model ?
					var legsTemp = json.legs;
					delete json.legs;

					//irst remove all legs (cleanup)
					var postLegs = postRecord.get('legs');
					var list = postLegs.toArray();
					list.forEach((leg)=>{
						leg.deleteRecord();
						postLegs.removeObject(leg);
					});

					//second setup legs fresh from zero from what came from component/ui
					

					legsTemp.forEach(legObj => {
						var leg = this.store.createRecord('leg',legObj);
						var departureMarker = this.store.createRecord('marker',legObj.departure_marker);
						var arrivalMarker = this.store.createRecord('marker',/*arrivalmarker*/legObj.arrival_marker);
						leg.set('departure_marker',departureMarker);
						leg.set('arrival_marker',arrivalMarker);//arrivalMarker.id
						
						postLegs.pushObject(leg);
					 });

					postRecord.setProperties(json);
					postRecord.save().then(result => {
						this.transitionToRoute('post',id); 	//TODO maybe result.id would be safer
					});
					
					
				},
				goToFullView(id){
					this.transitionToRoute('post',id);
				}
			}
		};
		
     	controller.setProperties(obj);
   	}
});
