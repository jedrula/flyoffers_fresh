import Ember from 'ember';

function emberObjectCopy(emberObj){	//TODO maybe one could do it with some sort of interfacace copieable
	var copiedObj = {};
	Object.keys(emberObj).forEach((key)=>{
		copiedObj[key] = emberObj.get(key);
	}); 
	return copiedObj;
}

export default Ember.Controller.extend({
	actions: {
		create(json){
			console.log('debugging create',arguments);
			var legsTemp = json.legs;
			delete json.legs;
			var copiedObj = emberObjectCopy(json);
			var postRecord = this.store.createRecord('post',copiedObj);
			 //var recordLegs = [];
			 var postLegs = postRecord.get('legs');
			 legsTemp.forEach(legObj => {
				var leg = this.store.createRecord('leg',legObj);
				var departureMarker = this.store.createRecord('marker',legObj.departure_marker);
				var arrivalMarker = this.store.createRecord('marker',/*arrivalmarker*/legObj.arrival_marker);
				leg.set('departure_marker',departureMarker);
				leg.set('arrival_marker',arrivalMarker);//arrivalMarker.id
				
				postLegs.pushObject(leg);
			 });
			
			 postRecord.save().then(result => {
				this.transitionToRoute('post',result); 	
			 });
		},
		goToPosts(){
			console.log('check args',arguments);
			this.transitionToRoute('posts');
		}
	}
});
