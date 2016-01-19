import Ember from 'ember';

export default Ember.Service.extend({
	url: 'xxx',
	bloodhound: null,
    store: Ember.inject.service(),
    doInit: function(){
        var adapterName = 'marker';
        var queryFindAll = 'markers';
        var adapter = this.get('store').adapterFor(adapterName);
        var host = adapter.get('host');
        var namespace = adapter.get('namespace');
        var url = [ host, namespace, queryFindAll ].join('/');
		this.bloodhound = new Bloodhound({
            // datumTokenizer: function(data){
            //     return Bloodhound.tokenizers.whitespace(data.name);
            // },
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name', 'id', 'city'),
            //datumTokenizer: function(x){Bloodhound.tokenizers.obj.whitespace('name', 'iata', 'city')(x);},
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            //https://raw.githubusercontent.com/jbrooksuk/JSON-Airports/master/airports.json
            //local:
            //prefetch: "/assets/airports_with_lat_and_lng_v3.1_with_mongo_ids.json",// TODO get from the same server or make a common file for backend and frontend that has the same contents for airports
            //prefetch: "/assets/airports_with_lat_and_lng_v3.1.min_with_mongo_ids.json",// TODO get from the same server or make a common file for backend and frontend that has the same contents for airports
            remote: {
                url: url + "?q=%QUERY",
                wildcard: '%QUERY',
                transform: function(response){
                    var transformed = response[queryFindAll];
                    transformed = Ember.$.map(transformed,(airport) => {
                        airport.id = airport._id; 
                        delete airport._id; 
                        return airport;
                    });
                    return transformed;
                }
            }
        });
		// instantiate the bloodhound suggestion engine
        
        this.bloodhound.initialize();
	}.on('init'),
	getSource(){
		return this.bloodhound.ttAdapter();
	},
    getById(id){
        debugger;
      return this.bloodhound.get(id);  
    }
});
