import Ember from 'ember';
//http://stackoverflow.com/questions/16001586/change-the-no-file-chosen could be used to alter the no file chosn text
export default Ember.TextField.extend({
	tagName: 'input',
    attributeBindings: ['name'],
    type: 'file',
    file: null,
    fileToUpload: null,
    change: function (e) {
        var reader = new FileReader(), 
        that = this;        
        reader.onload = function (e) {
            var fileToUpload = e.target.result;
            console.log('e.target.result',fileToUpload);
            Ember.run(function() {
                that.set('file', fileToUpload);
                that.set('fileToUpload', fileToUpload);
            });            
        };
        console.log('e.target.files[0]',e.target.files[0]);
    }
});