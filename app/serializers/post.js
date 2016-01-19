import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin,{
	attrs: {
    	comments: { embedded: 'always' }, 
        legs: { embedded: 'always' }, 
    	//http://emberjs.com/api/data/classes/DS.EmbeddedRecordsMixin.html#toc_example-json-payloads-models-and-serializers
    	//http://stackoverflow.com/questions/25213719/emberjs-cannot-read-property-typekey-of-undefined
  	},
	serialize: function(record, options) {
        var json = this._super(record,options);
    	//var json = record.record.toJSON();
    	delete json["image"];	//no need to send the image - it will be sent to cloudinary
    	return json;
	}
});