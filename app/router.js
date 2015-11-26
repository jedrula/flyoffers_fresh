import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('posts');

    this.route('new');

    this.route('post', {
        path : '/post/:post_id'
    });

    this.route('edit', {
        path : '/edit/:post_id'
    });

    this.route('about');
    this.route('unverified');
    this.route('users',{
        path: '/users'
    },function(){});

    this.route('login');

    this.route('signup');
    
    this.route('logout');
});

export default Router;
