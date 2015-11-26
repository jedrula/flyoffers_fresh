import ApplicationSerializer from './application';
import DS from 'ember-data';

//var options = { serialize: 'ids', deserialize: 'records' };

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin,{
	attrs: {
    	departure_marker: { deserialize: 'records' }, 
    	arrival_marker: {deserialize: 'records' }
  	}
});