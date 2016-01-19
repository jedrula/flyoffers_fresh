import Ember from 'ember';

export function mongoIdToDate(params, hash) {
	var post = params[0];
	var id = post.get('id');
	if(!id){
		return 'not yet created';
	}
	var timehex = id.substring(0,8);
	var secondsSinceEpoch = parseInt(timehex, 16);
	var dt = new Date(secondsSinceEpoch*1000);
	var locale = navigator.language || "pl";
	return dt.toLocaleString(locale,{ year: 'numeric', month : 'numeric', day : 'numeric' ,hour: '2-digit', minute:'2-digit',hour12: false });
	//return dt;
}

export default Ember.Helper.helper(mongoIdToDate);
