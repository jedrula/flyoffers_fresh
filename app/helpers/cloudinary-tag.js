import Ember from 'ember';

export function cloudinaryTag(publicId, options) {
  console.log('cloudinaryTagcloudinaryTag',options);
	options = options || {};
	options.hash = options.hash || {};
  if (Em.isBlank(publicId)) { 
  	return ''; 
  }

  var height = options.hash.height || 535,
    width = options.hash.width || 535,
    crop = options.hash.crop || 'fill',
    cssClass = options.hash.class || 'cloudinary-image';

  return new Ember.Handlebars.SafeString($.cloudinary.image(publicId, {
    width: width,
    height: height,
    crop: crop,
    class: cssClass
  }).prop('outerHTML'));
}

export default Ember.Helper.helper(cloudinaryTag);
