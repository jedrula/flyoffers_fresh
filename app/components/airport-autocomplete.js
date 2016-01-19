import Ember from 'ember';

export default Ember.TextField.extend({
    airports: Ember.inject.service(),
    marker: {},
    didInsertElement: function(){
        this._super();
        var self = this;
        var jQueryInputElem = this.$();
        //TODO angle brackets
        
        function displayKey(datum){
            return datum.name + ' (' + datum.id + ')';
        }
        
        //value=marker.name is not very good as it changes the name as we type
        jQueryInputElem.typeahead({
            highlight: true,
        }, {
          name: "names",
          displayKey: displayKey,
            source: this.get('airports').getSource(),
          templates: {
                suggestion: function (data) {
                    return '<div class="suggestion"><div><p>' + data.name + ' / ' + data.city + ' (' + data.id + ')</p></div><div>' + data.country + '</div></div>';
                }
            }
        });

        //var id = this.attrs.marker.value;
        if(!Ember.$.isEmptyObject(this.marker)){
            var datum = displayKey(this.marker);
            jQueryInputElem.typeahead('val',datum);
        }
        
        //jQueryInputElem.val(this.attrs.marker.value);    //TODO maybe this could go as an unbound attr to the input helper
        //jQueryInputElem.typeahead('val',id);

        jQueryInputElem.bind('typeahead:selected', function(obj, datum, name) {
            console.log('typeahead:selected_args',arguments);
            self.get('typeheadselected')(datum);

        });
    },
    didInitAttrs(){
        var val = this.attrs.marker.value;
        if(!Ember.$.isEmptyObject(val)){
            this.marker = val.get('content').toJSON({includeId:1})    
        }
    }
});