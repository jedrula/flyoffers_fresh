import Ember from 'ember';
//import routeHelpers from '../../helpers/route'
export default Ember.Route.extend({
	model(){
		return this.store.filter('post',{}/*,{unverified: false* - not passig as its then truthy in node.js }*/,function(post){
			return post.get('unverified') === false;
		});
	},
	actions: {
		removeAll(){
			//routeHelpers.removeAll(this);
			console.error('TODO filter unverified!');
			this.store.findAll('post').invoke('destroyRecord');//FIXME remove only posts from this model! like this.model(),delete?
		}
	}
});
