import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.filter('post',{unverified: true},function(post){
			return post.get('unverified') === true;
		});
	},
});
