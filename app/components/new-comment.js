import Ember from 'ember';
//should be passed container and comment
export default Ember.Component.extend({
	actions: {
		postComment: function(){
			this.sendAction('action');
		}
	}
});
