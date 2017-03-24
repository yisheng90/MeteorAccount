Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/register', {
  layoutTemplate: 'layout_app',
  name: 'register',
  template: 'register'
});
