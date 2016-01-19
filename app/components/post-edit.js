import Ember from 'ember';
var isEmptyObj = Ember.$.isEmptyObject;
export default Ember.GlimmerComponent.extend({
	//legs: [],//TODO maybe it should be some special array!
	post: null,
	actions: {
		submitform(){
			console.log('im in component');
			// this.send('save',this.attrs.post);
			if(!this.areLegsValid()){
				alert('legs invalid');
			}
			else{
				this.attrs['submit'](this.post);	
			}
			
			//TODO this.get('submit')(this.post) desnt return a promise
			// this.get('submit')(this.post).then(() => {
		 //      	console.log('success in component promise');
		 //    }).catch(error => {
		 //    	console.error(error);
		 //      alert('we got an error in the promise');
		 //    });
			return true;// alert('xxx');
		},
		setupNewLeg(){
			console.log('kegsss',this.attrs.post.legs);
			var newLeg = {
				departure_marker: {},
				arrival_marker: {},
				departure_date: null,
				arrival_date: null
			};
			//var newLeg = Ember.Object.create({});
			//var newLeg = {};
			// this.attrs.post.legs.addObject(newLeg);
			this.post.legs.addObject(newLeg);
		},
		removeLeg(leg,index){
			console.log('remove the leg',leg,'at index',index);
			//this.attrs.post.legs.removeAt(index);
			this.post.legs.removeAt(index);
		},
		markerchange(leg,marker_key,datum){
			//leg[marker_key] = datum;
			Ember.set(leg,marker_key,datum);
			console.log('markerchange',arguments);
			
		}
	},
	setItUp: function(){
		//console.log('TODO setup legs');
		//debugger;
	}.on("init"),
	didInitAttrs: function(){
		this.post = this.attrs.post;
		this.post.legs = this.attrs.post.get('legs').toArray() || [];
		//this.attrs.post.legs = this.attrs.post.legs || [];
		// this.attrs.post.get('legs').forEach((leg)=>{
		// 	debugger;
		// 	console.log(leg.toJson());
		// });
	},
	areLegsValid(){
		var allValid = this.post.legs.every((leg)=>{
			return !isEmptyObj(leg.departure_marker) && !isEmptyObj(leg.arrival_marker);
		});

		return allValid;
	}
});