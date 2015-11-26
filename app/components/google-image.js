import Ember from 'ember';

export default Ember.Component.extend({
	images: Ember.A(),
	viewedImage: 0,
	curImage: function(){
		var viewedImage = this.get('viewedImage');
		var images = this.get('images');
		var curImage = images[viewedImage];
		return curImage;
	}.property('viewedImage','images'),
	// curThumbnail: function(){
	// 	curImage.image.thumbnailLink
	// }.property('curImage'),
	isTyping: null,
	search: null,
	actions: {
		// selectImg: function(image){
		// 	//var link = image.link;
		// 	this.sendAction('selectedImage', image);
		// 	this.clear();
		// },
		selectCurImg: function(image){
			//var link = image.link;
			this.sendAction('selectedImage', image);
			this.clear();
		},
		next: function(){
			var viewedImage = this.get('viewedImage');
			if(viewedImage < this.get('images').length -1){
				this.set('viewedImage',viewedImage + 1);
			}
		},
		prev: function(){
			var viewedImage = this.get('viewedImage');
			if(viewedImage > 0){
				this.set('viewedImage',viewedImage -1);
			}
		}
	},
	clear: function(){
		this.images.clear();
		this.set('search','');
	},
	onSearchChanged: function(){
		this.set('isTyping','true');
		Ember.run.debounce(this, this.searchForImages, 500);
	}.observes('search'),
	searchForImages: function(){
		var self = this;
		this.set('isTyping',false);
		var search = this.get('search');
		
		if(search){

			var adapter = this.container.lookup('adapter:application');

			var onImageSearchComplete = function(response) {
				self.set('isQuerying',null);
				if(response.err){
					alert(response.err + " : TODO HANDLE");
				}
				else{
					self.set('images',response.items);
					//self.images.pushObjects(response.items);
				}
			}
			
			this.set('isQuerying',true);
			Ember.$.ajax({
					url: adapter.buildURL() + "/googleImageSearch",
					type: 'POST',
					data: {search: search}
			}).done(onImageSearchComplete);
		}
		
	},
});
