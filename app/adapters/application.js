import DS from 'ember-data';
import ENV from 'flyoffers-fresh/config/environment';

export default DS.RESTAdapter.extend({
	namespace: 'api',
	host: ENV.APP.API_SERVER_URL,
	ajax: function(url, method, hash) {
	    hash = hash || {}; // hash may be undefined
	    hash.crossDomain = true;
	    hash.xhrFields = {withCredentials: true};
	    hash.cache = true;
	    return this._super(url, method, hash);
  	}
});
