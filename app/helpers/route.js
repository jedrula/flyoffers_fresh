import Ember from 'ember';

export function removeAll(route) {
  	var content = route.controller.model.content;
	content.forEach(function(rec) {
	    Ember.run.once(this, function() {
	       rec.deleteRecord();
	       rec.save();
	    });
	 }, route);

}

export default Ember.Helper.helper(route);


//[WARN]: helpers without a dash will not automatically be resolved 
