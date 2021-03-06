import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'span',
	actions: {
	showConfirmation: function() {
	  this.toggleProperty('isShowingConfirmation');
	},

	confirm: function() {
	  this.toggleProperty('isShowingConfirmation');
	  this.sendAction('action', this.get('param'));
	}
	}
});