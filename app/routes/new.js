import Ember from 'ember';

export default Ember.Route.extend({
	
	actions: {
		//once routable components land we can remove controller and use route with its actions
		// goToPosts(){
			
		// },
		// create(){
			
		// },
	},
	model(){
		return Ember.Object.create({
			legs: []
		});//TODO maybe return {}; ??
		/*
		return Ember.RSVP.hash({
			post: Ember.Object.create({}),
   //          post: 
   //          {
			// 	title: 'testtodo',
			// 	href: '',
			// 	legs: [],
			// 	price: '',
			// 	currency: '',
			// 	desc: 'TODOTODO',
			// 	image: '',
			// 	imageToUpload: ''
			// },
			//TODO get from backed using .all and cache in storage probably
            markers: [{"name":"Goroka","city":"Goroka","country":"Papua New Guinea","iata":"GKA","lat":"-6.081689","lng":"145.391881"},{"name":"Madang","city":"Madang","country":"Papua New Guinea","iata":"MAG","lat":"-5.207083","lng":"145.7887"}]
        });
*/
	}
});
