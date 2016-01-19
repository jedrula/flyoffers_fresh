import DS from 'ember-data';
import config from '../config/environment';
import Ember from 'ember';

export default DS.Model.extend({
	comments: DS.hasMany('comment', {embedded: true}),	//TODO check if this is a bad practice ??? quoting "Nevertheless, using { embedded: 'always' } as an option to DS.attr is not a valid way to setup embedded records." after  http://emberjs.com/api/data/classes/DS.EmbeddedRecordsMixin.html
	legs: DS.hasMany('legs'),	
	// validMarkers: function(){
	// 	var markers = [];
	// 	this.get('legs').forEach(function(leg){
	// 		markers.push(leg.get('departure_marker'),leg.get('arrival_marker'));
	// 	});
	// 	return markers;
	// }.property('legs.@each.departure_marker','legs.@each.arrival_marker'),
	title: DS.attr('string'),
	desc: DS.attr('string'),
	author: DS.attr('string'),
	unverified: DS.attr('boolean'),
	publishedAt: DS.attr('date'),
	href: DS.attr('string'),
	currency: DS.attr('string'),
	price: 'TODO PRICE',
	// price: function(){
	// 	var price = 0;
	// 	this.get('legs').forEach(function(leg){
	// 		price = price + leg.get('price');
	// 	});
	// 	return price;
	// }.property('legs.@each.price'),
	image: DS.attr('string'),
	imageToUpload: DS.attr('string'),
	cloudinaryPublicId: DS.attr('string'),

	saveImageToCdn: function(public_id){
		if(!public_id){
			public_id = Date.now() + "image";
		}
		var self = this;
		var cloud_name = "flyoffers";	//TODO get from config
		var url = "https://api.cloudinary.com/v1_1/" + cloud_name + "/image/upload";

		var deferredCdnCall = Ember.$.ajax({
						    url: url,
						    data: {
						      file: self.get("imageToUpload"),
						      upload_preset: "kyjx3qfm",	//TODO get from config
						      public_id: public_id
						    },
						    type: "POST"
						});
		deferredCdnCall.then(function(cloudinaryResponseData){
			self.set("cloudinaryPublicId",cloudinaryResponseData.public_id);	//TODO check - experimental
			self.set('imageToUpload',null);
			self.set('image',null);
		});
		return deferredCdnCall;
	},
	// hasValidLegs: function(){
	// 	return this.get('legs').every(function(leg){
	// 		return leg.hasValidMarkers();
	// 	});
	// },

	/*
	save: function(){
		var self = this;
		// if(!this.hasValidLegs()){
		// 	alert('legs are not valid');
		// 	return new Ember.RSVP.Promise(function(resolve, reject){
		// 		reject('legs are not valid');
		// 	});
		// }
		var image = this.get("image");
		var _superSave = self.__nextSuper.bind(this);
		if(image){
			var promise = new Ember.RSVP.Promise(function(resolve, reject){
				console.log('fire xhr calls');
				var deferredCdnCall = self.saveImageToCdn().then(function(cloudinaryResponseData){
						console.log("image saved to cdn");
						//self.send("imagesaved");TODO 
				});
				

				deferredCdnCall.then(function(cloudinaryResponseData){
					//var defferedEmberSaveCall = 
					_superSave().then(function(emberSaveData){	//maybe we should call or apply here?
						console.log("ember save to backend done");
						resolve(emberSaveData);
					},function emberDataSaveFailure(){
						reject(arguments);//TODO maybe .apply(this????,arugments)
					});
				},function cloudinaryUploadFailure(){
					reject(arguments);//TODO maybe .apply(this????,arugments)
				});
			});
			return promise;
		}
		else{ 
			return _superSave();//return self._super.apply(self,arguments);
		}
	}
	*/
});